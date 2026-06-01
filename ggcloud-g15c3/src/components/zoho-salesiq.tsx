import Script from "next/script";

export function ZohoSalesIQ() {
  const widgetCode = process.env.NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_CODE;
  const domain =
    process.env.NEXT_PUBLIC_ZOHO_SALESIQ_DOMAIN ??
    "https://salesiq.zohopublic.com";

  if (!widgetCode) {
    return (
      <div className="fixed bottom-6 right-6 z-50 max-w-xs rounded-3xl border border-ink/10 bg-cream p-4 shadow-[0_24px_90px_rgba(49,83,57,0.08)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              Hỗ trợ nhanh
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">
              Chat GGCloud Stationery
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pine text-cream">
            💬
          </div>
        </div>
        <p className="mt-3 text-sm text-charcoal/80">
          Nếu chat Zoho chưa bật, vui lòng liên hệ ngay:
        </p>
        <div className="mt-3 rounded-2xl bg-mist p-3 text-sm text-charcoal/80">
          <p className="font-semibold text-ink">Hotline: 0909 123 456</p>
          <p className="mt-1">Email: support@ggcloud-stationery.vn</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="zoho-salesiq-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var $zoho=$zoho||{};$zoho.salesiq=$zoho.salesiq||{widgetcode:"${widgetCode}",values:{budgetSuggestions:"Dưới 100k, 200k, 500k"},ready:function(){setTimeout(function(){if(window.$zoho&&window.$zoho.salesiq){window.$zoho.salesiq.visitor={name:"Khách hàng mới"};}} ,1000);}};`,
        }}
      />
      <Script
        id="zoho-salesiq-loader"
        src={`${domain}/widget?wc=${widgetCode}`}
        strategy="afterInteractive"
      />
    </>
  );
}
