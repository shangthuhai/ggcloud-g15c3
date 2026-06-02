import { getZohoAccountsBaseUrl, requireZohoEnv } from "./config";

type ZohoTokenResponse = {
  access_token?: string;
  expires_in?: number;
  error?: string;
};

let cachedAccessToken: {
  token: string;
  expiresAt: number;
} | null = null;

export async function getZohoAccessToken() {
  const now = Date.now();

  if (cachedAccessToken && cachedAccessToken.expiresAt - 60_000 > now) {
    return cachedAccessToken.token;
  }

  const params = new URLSearchParams({
    refresh_token: requireZohoEnv("ZOHO_REFRESH_TOKEN"),
    client_id: requireZohoEnv("ZOHO_CLIENT_ID"),
    client_secret: requireZohoEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });

  const response = await fetch(`${getZohoAccountsBaseUrl()}/oauth/v2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const tokenResponse = (await response.json().catch(() => ({}))) as ZohoTokenResponse;

  if (!response.ok || !tokenResponse.access_token) {
    throw new Error(
      `Unable to refresh Zoho access token: ${
        tokenResponse.error ?? response.statusText
      }`
    );
  }

  cachedAccessToken = {
    token: tokenResponse.access_token,
    expiresAt: now + (tokenResponse.expires_in ?? 3600) * 1000,
  };

  return cachedAccessToken.token;
}
