import { getZohoApiBaseUrl, requireZohoEnv } from "./config";
import { zohoRequest } from "./request";

export type InventoryOrderItem = {
  itemId?: string;
  name: string;
  quantity: number;
  rate: number;
  sku?: string;
};

export type InventorySalesOrderInput = {
  customerId: string;
  referenceNumber?: string;
  notes?: string;
  lineItems: InventoryOrderItem[];
};

export async function createInventorySalesOrder(order: InventorySalesOrderInput) {
  return zohoRequest(`${getZohoApiBaseUrl()}/inventory/v1/salesorders`, {
    method: "POST",
    query: {
      organization_id: requireZohoEnv("ZOHO_INVENTORY_ORG_ID"),
    },
    body: {
      customer_id: order.customerId,
      reference_number: order.referenceNumber,
      notes: order.notes,
      line_items: order.lineItems.map((item) => ({
        item_id: item.itemId,
        name: item.name,
        quantity: item.quantity,
        rate: item.rate,
        sku: item.sku,
      })),
    },
  });
}

export async function listInventoryItems(searchText?: string) {
  return zohoRequest(`${getZohoApiBaseUrl()}/inventory/v1/items`, {
    query: {
      organization_id: requireZohoEnv("ZOHO_INVENTORY_ORG_ID"),
      search_text: searchText,
    },
  });
}
