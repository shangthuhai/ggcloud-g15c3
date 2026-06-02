import { getZohoDeskBaseUrl, requireZohoEnv } from "./config";
import { zohoRequest } from "./request";

export type DeskTicketInput = {
  subject: string;
  description: string;
  email?: string;
  phone?: string;
  contactName?: string;
  priority?: "Low" | "Medium" | "High";
  departmentId?: string;
};

export async function createDeskTicket(ticket: DeskTicketInput) {
  return zohoRequest(`${getZohoDeskBaseUrl()}/api/v1/tickets`, {
    method: "POST",
    headers: {
      orgId: requireZohoEnv("ZOHO_DESK_ORG_ID"),
    },
    body: {
      subject: ticket.subject,
      description: ticket.description,
      email: ticket.email,
      phone: ticket.phone,
      contactName: ticket.contactName,
      priority: ticket.priority ?? "Medium",
      departmentId:
        ticket.departmentId ?? process.env.ZOHO_DESK_DEPARTMENT_ID ?? undefined,
    },
  });
}
