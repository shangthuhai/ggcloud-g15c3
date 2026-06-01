import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ZohoSalesIQ } from "@/components/zoho-salesiq";
import { CartProvider } from "@/context/cart-context";
import "./globals.css";

const brandSans = Manrope({
  variable: "--font-brand-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const brandSerif = Fraunces({
  variable: "--font-brand-serif",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GGCloud Stationery",
  description: "Văn phòng phẩm tinh gọn cho học tập và quà tặng doanh nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${brandSans.variable} ${brandSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">
        <CartProvider>
          <div className="relative flex min-h-full flex-col">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(242,163,101,0.18),_transparent_55%),radial-gradient(circle_at_70%_20%,_rgba(46,77,59,0.18),_transparent_50%)]" />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <ZohoSalesIQ />
        </CartProvider>
      </body>
    </html>
  );
}
