import Script from "next/script";

export function ZohoSalesIQ() {
  const widgetCode = process.env.NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_CODE;
  const domain =
    process.env.NEXT_PUBLIC_ZOHO_SALESIQ_DOMAIN ??
    "https://salesiq.zohopublic.com";

  if (!widgetCode) {
    return null;
  }

  return (
    <>
      <Script
        id="zoho-salesiq-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var $zoho=$zoho||{};$zoho.salesiq=$zoho.salesiq||{widgetcode:"${widgetCode}",values:{},ready:function(){}};`,
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
