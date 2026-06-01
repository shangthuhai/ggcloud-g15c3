"use client";

import Link from "next/link";

export default function MoMoSandboxPage() {
  const handleComplete = () => {
    window.location.href = "/success?provider=momo&status=success";
  };

  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-12">
      <section className="space-y-4 rounded-[32px] border border-ink/10 bg-cream p-8 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
            MoMo Sandbox
          </p>
          <h1 className="text-3xl font-semibold text-ink">
            Thanh toán MoMo mô phỏng
          </h1>
          <p className="mt-3 text-sm text-charcoal/80">
            Đây là trang thử nghiệm thanh toán MoMo. Bạn có thể nhấn hoàn tất để giả lập giao dịch.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-ink/10 bg-mist p-6">
            <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-3xl bg-black/5 p-6 text-center">
                <div className="mx-auto h-64 w-64 rounded-3xl bg-gradient-to-br from-pine/20 via-cream to-tangerine/40" />
              </div>
              <div className="space-y-3 text-sm text-charcoal/80">
                <p className="font-semibold text-ink">Thông tin giao dịch</p>
                <p>Mã đơn: <span className="font-semibold text-ink">MOMO-20260602001</span></p>
                <p>Số tiền: <span className="font-semibold text-ink">199.000 ₫</span></p>
                <p>Người nhận: <span className="font-semibold text-ink">GGCloud Stationery</span></p>
                <p>Nội dung: <span className="font-semibold text-ink">Thanh toán thử nghiệm MoMo</span></p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleComplete}
              className="w-full rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-pine/90"
            >
              Hoàn tất thanh toán
            </button>
          </div>

          <div className="rounded-[28px] border border-ink/10 bg-cream p-6">
            <p className="text-sm font-semibold text-ink">Mô phỏng quy trình</p>
            <ol className="mt-4 space-y-3 text-sm text-charcoal/80">
              <li>1. Mở ứng dụng MoMo hoặc quét mã.</li>
              <li>2. Kiểm tra số tiền và tên người nhận.</li>
              <li>3. Xác nhận giao dịch và hoàn tất.</li>
            </ol>
            <div className="mt-6 rounded-3xl bg-mist p-4 text-sm text-charcoal/80">
              Trang này giả lập cổng thanh toán MoMo sandbox để thử nghiệm quy trình.
            </div>
            <Link
              href="/checkout"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-sand"
            >
              Quay lại chọn cổng thanh toán
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
