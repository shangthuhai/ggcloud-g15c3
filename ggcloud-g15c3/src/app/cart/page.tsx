"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatVnd } from "@/data/catalog";

export default function CartPage() {
  const { items, totalAmount, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
          Giỏ hàng
        </p>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">
          Kiểm tra đơn và cập nhật số lượng.
        </h1>
        <p className="text-sm text-charcoal/80">
          Điều chỉnh số lượng, xóa sản phẩm và xem tổng giá ngay lập tức.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <section className="space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-ink/10 bg-cream p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-ink">{item.name}</p>
                    <p className="text-sm text-charcoal/80">{item.detail}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-charcoal/70">
                      <span>Giá: {formatVnd(item.price)}</span>
                      <span>Số lượng: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 text-right lg:items-end">
                    <span className="text-lg font-semibold text-pine">
                      {formatVnd(item.price * item.quantity)}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-sand"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-sand"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-cream"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[28px] border border-ink/10 bg-mist p-10 text-center text-sm text-charcoal/80">
              Giỏ hàng trống. Vui lòng thêm sản phẩm để tiếp tục.
            </div>
          )}
        </section>

        <aside className="space-y-4 rounded-3xl border border-ink/10 bg-mist p-6">
          <h2 className="text-lg font-semibold text-ink">Tổng kết đơn</h2>
          <div className="space-y-3 text-sm text-charcoal/80">
            <div className="flex items-center justify-between">
              <span>Tạm tính</span>
              <span>{formatVnd(totalAmount)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Phí giao nhanh</span>
              <span>{items.length > 0 ? formatVnd(35000) : formatVnd(0)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Ưu đãi</span>
              <span>{items.length > 0 ? `- ${formatVnd(50000)}` : formatVnd(0)}</span>
            </div>
            <div className="h-px bg-ink/10" />
            <div className="flex items-center justify-between text-base font-semibold text-ink">
              <span>Tổng cộng</span>
              <span>
                {items.length > 0
                  ? formatVnd(totalAmount + 35000 - 50000)
                  : formatVnd(0)}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <button
              type="button"
              onClick={clearCart}
              className="w-full rounded-full border border-ink/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/80 transition hover:bg-sand"
            >
              Xóa hết giỏ hàng
            </button>
            <Link
              href="/checkout"
              className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-charcoal"
            >
              Thanh toán sandbox
            </Link>
          </div>
          <div className="rounded-2xl bg-cream px-4 py-3 text-xs text-charcoal/80">
            Hỗ trợ VNPAY và MoMo sandbox. Hãy chọn cổng thanh toán ở bước tiếp.
          </div>
        </aside>
      </div>
    </div>
  );
}
