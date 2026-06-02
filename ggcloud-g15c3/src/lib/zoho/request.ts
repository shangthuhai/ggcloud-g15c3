import { getZohoAccessToken } from "./auth";

type ZohoRequestOptions = {
  body?: unknown;
  headers?: HeadersInit;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  query?: Record<string, string | number | boolean | undefined>;
};

export class ZohoApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public payload: unknown
  ) {
    super(message);
  }
}

export async function zohoRequest<T>(
  url: string,
  { body, headers, method = "GET", query }: ZohoRequestOptions = {}
) {
  const accessToken = await getZohoAccessToken();
  const requestUrl = new URL(url);

  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined) {
      requestUrl.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(requestUrl, {
    method,
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      ...(body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...headers,
    },
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const payload = contentType.includes("application/json")
    ? await response.json().catch(() => null)
    : await response.text().catch(() => "");

  if (!response.ok) {
    throw new ZohoApiError("Zoho API request failed", response.status, payload);
  }

  return payload as T;
}

export function jsonError(error: unknown) {
  if (error instanceof ZohoApiError) {
    return {
      error: error.message,
      status: error.status,
      payload: error.payload,
    };
  }

  if (error instanceof Error) {
    return {
      error: error.message,
    };
  }

  return {
    error: "Unknown Zoho integration error",
  };
}
