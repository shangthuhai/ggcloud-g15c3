'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ZohoChatWrapper() {
  const widgetCode = process.env.NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_CODE;
  const [shouldRenderZoho, setShouldRenderZoho] = useState(false);

  useEffect(() => {
    // Log ra để kiểm tra xem Next.js đã đọc được file .env chưa
    console.log("Zoho Widget Code hiện tại:", widgetCode);

    if (widgetCode && widgetCode !== "MÃ_WIDGET_CỦA_BẠN") {
      setShouldRenderZoho(true);
    }
  }, [widgetCode]);

  // NẾU CHƯA CÓ CODE HOẶC ĐANG LOAD -> HIỆN UI FALLBACK CONTACT FIXED GÓC PHẢI
  if (!shouldRenderZoho) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white text-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-2 max-w-xs">
          <p className="text-xs font-semibold text-gray-700 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Hỗ trợ trực tuyến B2B
          </p>
          <a href="tel:0123456789" className="bg-orange-500 text-white text-center text-xs py-2 px-4 rounded-xl font-medium">
            📞 Gọi Hotline
          </a>
        </div>
      </div>
    );
  }

 return (
  <Script
    id="zoho-salesiq"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.$zoho = window.$zoho || {};
        window.$zoho.salesiq = window.$zoho.salesiq || {
          widgetcode: "${widgetCode}",
          values: {},
          ready: function() {}
        };
        var d = document;
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.id = "zsiqscript";
        s.defer = true;
        // Gắn thẳng widgetcode vào URL để sửa lỗi 400
        s.src = "https://salesiq.zohopublic.com/widget?widgetcode=${widgetCode}";
        var t = d.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s, t);
      `,
    }}
  />
 );
}