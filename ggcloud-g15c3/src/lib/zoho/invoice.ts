import { getZohoApiBaseUrl, requireZohoEnv } from "./config";
import { zohoRequest } from "./request";

export type InvoiceLineItem = {
  itemId?: string;
  name: string;
  quantity: number;
  rate: number;
  sku?: string;
};

export type InvoiceInput = {
  customerId: string;
  referenceNumber?: string;
  lineItems: InvoiceLineItem[];
};

export async function createZohoInvoice(invoice: InvoiceInput) {
  return zohoRequest(`${getZohoApiBaseUrl()}/invoice/v3/invoices`, {
    method: "POST",
    query: {
      organization_id: requireZohoEnv("ZOHO_INVOICE_ORG_ID"),
    },
    body: {
      customer_id: invoice.customerId,
      reference_number: invoice.referenceNumber,
      line_items: invoice.lineItems.map((item) => ({
        item_id: item.itemId,
        name: item.name,
        quantity: item.quantity,
        rate: item.rate,
        sku: item.sku,
      })),
    },
  });
}
