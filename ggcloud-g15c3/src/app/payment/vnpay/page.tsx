"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VNPaySimulationPage() {
  const router = useRouter();

  const handlePaymentSuccess = () => {
    router.push("/success");
  };

  const handlePaymentFailed = () => {
    router.push("/checkout");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-6 py-12">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
          VNPAY Sandbox
        </p>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">
          Cổng thanh toán giả lập VNPAY
        </h1>
        <p className="text-sm text-charcoal/80">
          Bạn đang ở trong môi trường test. Chọn một lựa chọn dưới đây để hoàn tất giao dịch.
        </p>
      </section>

      <div className="space-y-6 rounded-[32px] border border-ink/10 bg-cream p-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">Chi tiết giao dịch</h2>
          <div className="space-y-2 rounded-[20px] bg-mist p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-charcoal/70">Mã giao dịch:</span>
              <span className="font-semibold text-ink">VNP20260602001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/70">Số tiền:</span>
              <span className="font-semibold text-ink">500.000 ₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/70">Trạng thái:</span>
              <span className="font-semibold text-pine">Đang xử lý</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">Mã QR chuyển khoản</h2>
          <div className="flex items-center justify-center rounded-[20px] bg-mist p-8">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="200" fill="white" />
              <rect
                x="10"
                y="10"
                width="30"
                height="30"
                fill="black"
              />
              <rect
                x="20"
                y="20"
                width="10"
                height="10"
                fill="white"
              />
              <rect
                x="160"
                y="10"
                width="30"
                height="30"
                fill="black"
              />
              <rect
                x="170"
                y="20"
                width="10"
                height="10"
                fill="white"
              />
              <rect
                x="10"
                y="160"
                width="30"
                height="30"
                fill="black"
              />
              <rect
                x="20"
                y="170"
                width="10"
                height="10"
                fill="white"
              />
              <circle cx="100" cy="100" r="50" fill="none" stroke="black" strokeWidth="2" />
              <rect
                x="60"
                y="80"
                width="10"
                height="10"
                fill="black"
              />
              <rect
                x="130"
                y="80"
                width="10"
                height="10"
                fill="black"
              />
              <rect
                x="95"
                y="125"
                width="10"
                height="10"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-center text-xs text-charcoal/70">
            Nội dung CK: <span className="font-semibold">VNP20260602001</span>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-ink">Chọn kết quả giao dịch:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handlePaymentSuccess}
              className="rounded-full bg-pine px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-pine/90"
            >
              ✓ Thanh toán thành công
            </button>
            <button
              type="button"
              onClick={handlePaymentFailed}
              className="rounded-full border border-ink/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-cream"
            >
              ✕ Thanh toán thất bại
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-mist px-4 py-3 text-xs text-charcoal/80">
          <p className="font-semibold text-ink">ℹ️ Lưu ý:</p>
          <p>
            Đây là trang giả lập để test quy trình thanh toán. Không có giao dịch thực tế được thực hiện.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href="/checkout"
          className="flex-1 rounded-full border border-ink/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-sand"
        >
          Quay lại
        </Link>
        <Link
          href="/cart"
          className="flex-1 rounded-full border border-ink/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-sand"
        >
          Về giỏ hàng
        </Link>
      </div>
    </div>
  );
}
