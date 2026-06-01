import Link from "next/link";
import { cartItems, formatVnd } from "@/data/catalog";

export default function CheckoutPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500000 ? 0 : 35000;
  const discount = subtotal > 300000 ? 50000 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
          Thanh toán
        </p>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">
          Chọn cổng thanh toán sandbox
        </h1>
        <p className="text-sm text-charcoal/80">
          VNPAY và MoMo sẽ được kết nối qua API server. Cần cấu hình key sandbox.
        </p>
        <Link
          href="/gio-hang"
          className="text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4"
        >
          Quay lại giỏ hàng
        </Link>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-ink/10 bg-cream p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              VNPAY sandbox
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Tạo giao dịch test với thẻ ATM nội địa.
            </p>
            <p className="text-sm text-charcoal/80">
              Endpoint: /api/payments/vnpay (POST)
            </p>
            <button className="mt-6 w-full rounded-full bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cream">
              Tạo giao dịch VNPAY
            </button>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-cream p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              MoMo sandbox
            </p>
            <p className="mt-3 text-lg font-semibold text-ink">
              Kiểm tra luồng thanh toán QR hoặc app.
            </p>
            <p className="text-sm text-charcoal/80">
              Endpoint: /api/payments/momo (POST)
            </p>
            <button className="mt-6 w-full rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-ink">
              Tạo giao dịch MoMo
            </button>
          </div>
        </section>

        <aside className="space-y-4 rounded-3xl border border-ink/10 bg-mist p-6">
          <h2 className="text-lg font-semibold text-ink">Tổng kết đơn</h2>
          <div className="space-y-3 text-sm text-charcoal/80">
            <div className="flex items-center justify-between">
              <span>Tạm tính</span>
              <span>{formatVnd(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Phí giao nhanh</span>
              <span>{formatVnd(shipping)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Ưu đãi</span>
              <span>- {formatVnd(discount)}</span>
            </div>
            <div className="h-px bg-ink/10" />
            <div className="flex items-center justify-between text-base font-semibold text-ink">
              <span>Tổng cộng</span>
              <span>{formatVnd(total)}</span>
            </div>
          </div>
          <div className="rounded-2xl bg-cream px-4 py-3 text-xs text-charcoal/80">
            Cần cấu hình key sandbox trong .env.local để bật thanh toán.
          </div>
        </aside>
      </div>
    </div>
  );
}
