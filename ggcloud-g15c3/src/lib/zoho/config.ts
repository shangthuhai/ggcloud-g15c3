export type ZohoService =
  | "campaigns"
  | "desk"
  | "inventory"
  | "invoice"
  | "workdrive";

export function getZohoAccountsBaseUrl() {
  return process.env.ZOHO_ACCOUNTS_BASE_URL ?? "https://accounts.zoho.com";
}

export function getZohoApiBaseUrl() {
  return process.env.ZOHO_API_BASE_URL ?? "https://www.zohoapis.com";
}

export function getZohoDeskBaseUrl() {
  return process.env.ZOHO_DESK_BASE_URL ?? "https://desk.zoho.com";
}

export function getZohoCampaignsBaseUrl() {
  return process.env.ZOHO_CAMPAIGNS_BASE_URL ?? "https://campaigns.zoho.com";
}

export function requireZohoEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required Zoho environment variable: ${name}`);
  }

  return value;
}
