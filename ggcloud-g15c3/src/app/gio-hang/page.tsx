import Link from "next/link";
import { cartItems, formatVnd } from "@/data/catalog";

export default function CartPage() {
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
          Giỏ hàng
        </p>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">
          Kiểm tra đơn và chọn phương thức thanh toán.
        </h1>
        <p className="text-sm text-charcoal/80">
          Tạo yêu cầu in logo, xuất hóa đơn và giao hàng hỏa tốc ngay tại đây.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <section className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-ink/10 bg-cream p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-charcoal/80">{item.detail}</p>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-charcoal/70">
                    <span>Số lượng: {item.quantity}</span>
                    <span>Giá: {formatVnd(item.price)}</span>
                  </div>
                </div>
                <span className="text-lg font-semibold text-pine">
                  {formatVnd(item.price * item.quantity)}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-cream">
                  Cập nhật số lượng
                </button>
                <button className="rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-sand">
                  Lưu cho lần sau
                </button>
              </div>
            </div>
          ))}
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
          <Link
            href="/checkout"
            className="w-full rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-charcoal"
          >
            Thanh toán sandbox
          </Link>
          <div className="rounded-2xl bg-cream px-4 py-3 text-xs text-charcoal/80">
            Hỗ trợ VNPAY và MoMo sandbox. Hãy chọn cổng thanh toán ở bước tiếp.
          </div>
        </aside>
      </div>
    </div>
  );
}
