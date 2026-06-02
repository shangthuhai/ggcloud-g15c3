import { getZohoCampaignsBaseUrl, requireZohoEnv } from "./config";
import { zohoRequest } from "./request";

export type CampaignSubscriber = {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
};

export async function subscribeToCampaignsList(subscriber: CampaignSubscriber) {
  const listKey = requireZohoEnv("ZOHO_CAMPAIGNS_LIST_KEY");
  const contactInfo = {
    "Contact Email": subscriber.email,
    "First Name": subscriber.firstName,
    "Last Name": subscriber.lastName,
    Phone: subscriber.phone,
  };

  return zohoRequest(`${getZohoCampaignsBaseUrl()}/api/v1.1/json/listsubscribe`, {
    method: "POST",
    query: {
      resfmt: "JSON",
      listkey: listKey,
      contactinfo: JSON.stringify(contactInfo),
    },
  });
}
