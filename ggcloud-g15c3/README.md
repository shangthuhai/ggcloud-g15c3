This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
Set-Location .\ggcloud-g15c3
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Zoho Integrations

The app includes backend API routes for Zoho Campaigns, Desk, Inventory,
Invoice, WorkDrive, and generic Zoho Forms webhooks.

Configure these server-side environment variables before calling the APIs:

```env
ZOHO_CLIENT_ID=
ZOHO_CLIENT_SECRET=
ZOHO_REFRESH_TOKEN=
ZOHO_ACCOUNTS_BASE_URL=https://accounts.zoho.com
ZOHO_API_BASE_URL=https://www.zohoapis.com

ZOHO_CAMPAIGNS_BASE_URL=https://campaigns.zoho.com
ZOHO_CAMPAIGNS_LIST_KEY=

ZOHO_DESK_BASE_URL=https://desk.zoho.com
ZOHO_DESK_ORG_ID=
ZOHO_DESK_DEPARTMENT_ID=

ZOHO_INVENTORY_ORG_ID=
ZOHO_INVOICE_ORG_ID=
ZOHO_WORKDRIVE_FOLDER_ID=
ZOHO_WEBHOOK_SECRET=
```

Use the Zoho Developer Console to generate an OAuth refresh token with the
scopes needed by the services you enable. Typical scopes:

```txt
ZohoCampaigns.contact.CREATE
Desk.tickets.CREATE
Desk.basic.READ
ZohoInventory.items.READ
ZohoInventory.salesorders.CREATE
ZohoInvoice.invoices.CREATE
WorkDrive.files.CREATE
```

Available local endpoints:

```txt
POST /api/zoho/campaigns/subscribe
POST /api/zoho/desk/tickets
GET  /api/zoho/inventory/items?search=...
POST /api/zoho/inventory/orders
POST /api/zoho/invoice
POST /api/zoho/workdrive/upload
POST /api/zoho/webhook?secret=...
```

Example request bodies:

```json
{
  "email": "customer@example.com",
  "firstName": "Minh",
  "phone": "0909123456"
}
```

```json
{
  "subject": "Can tu van don hang B2B",
  "description": "Khach can bao gia 200 bo qua tang",
  "email": "customer@example.com",
  "contactName": "Minh",
  "priority": "Medium"
}
```

```json
{
  "customerId": "123456789",
  "referenceNumber": "WEB-ORDER-001",
  "lineItems": [
    {
      "itemId": "987654321",
      "name": "So tay Linen 180 trang",
      "quantity": 2,
      "rate": 125000
    }
  ]
}
```

## Google Cloud SQL

This project is prepared for a Cloud SQL MySQL instance like the
`quanlyvanphong` instance in Google Cloud Console.

1. Wait until the Cloud SQL instance status is ready.
2. Open **Databases** and create a database:

```txt
ggcloud_stationery
```

3. Open **Users** and create a database user, or use the existing root user.
4. Open **Connections** and choose one connection mode:

```txt
Local development with public IP:
- Enable public IP.
- Add your current IP to Authorized networks.
- Set DB_HOST to the Cloud SQL public IP.

Local development with Cloud SQL Auth Proxy:
- Start the proxy on 127.0.0.1:3306.
- Keep DB_HOST=127.0.0.1 and DB_PORT=3306.

Google Cloud deployment:
- Attach the Cloud SQL instance to the runtime.
- Set CLOUD_SQL_CONNECTION_NAME to project:region:instance.
- Leave DB_HOST empty if using the Cloud SQL socket.
```

5. Copy `.env.example` to `.env.local` and fill these values:

```env
DB_USER=
DB_PASSWORD=
DB_NAME=ggcloud_stationery
DB_HOST=127.0.0.1
DB_PORT=3306
CLOUD_SQL_CONNECTION_NAME=
```

6. Import the starter schema from `database/schema.sql`.

You can run the SQL in Cloud SQL Studio, MySQL Workbench, or the mysql CLI:

```bash
mysql -h YOUR_DB_HOST -u YOUR_DB_USER -p ggcloud_stationery < database/schema.sql
```

7. Start the app and test the connection:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000/api/db/health
```

If the database connection works, the response looks like:

```json
{
  "ok": true,
  "database": "ggcloud_stationery",
  "serverTime": "2026-06-02T..."
}
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
