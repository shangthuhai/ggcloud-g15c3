"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/cart-context";

interface SuccessClientProps {
  provider: string;
}

export default function SuccessClient({ provider }: SuccessClientProps) {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const transactionCode =
    provider.toUpperCase() === "MOMO" ? "MOMO20260602001" : "VNP20260602001";

  return (
    <div className="mx-auto max-w-2xl space-y-12 px-6 py-12">
      <section className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
          ✓ Thành công
        </p>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">
          Thanh toán hoàn tất
        </h1>
        <p className="text-sm text-charcoal/80">
          Cảm ơn bạn đã tin tưởng GGCloud Stationery. Đơn hàng của bạn đang được chuẩn bị.
        </p>
      </section>

      <div className="space-y-6 rounded-[32px] border border-pine/20 bg-mist p-8">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">Chi tiết đơn hàng</h2>
          <div className="space-y-2 rounded-[20px] bg-cream p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-charcoal/70">Mã giao dịch:</span>
              <span className="font-semibold text-ink">{transactionCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/70">Ngày:</span>
              <span className="font-semibold text-ink">02/06/2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/70">Số tiền:</span>
              <span className="font-semibold text-pine">500.000 ₫</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal/70">Phương thức:</span>
              <span className="font-semibold text-ink">{provider.toUpperCase()}</span>
            </div>
            <div className="h-px bg-ink/10" />
            <div className="flex justify-between">
              <span className="text-charcoal/70">Trạng thái:</span>
              <span className="font-semibold text-pine">✓ Đã thanh toán</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-ink">Bước tiếp theo</h2>
          <ul className="space-y-2 rounded-[20px] bg-cream p-4 text-sm text-charcoal/80">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-pine">1.</span>
              <span>Kiểm tra email để nhận hoá đơn chi tiết</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-pine">2.</span>
              <span>Theo dõi trạng thái vận chuyển trong 2-4 ngày làm việc</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-pine">3.</span>
              <span>Liên hệ support nếu có bất kỳ câu hỏi nào</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-cream px-4 py-3 text-xs text-charcoal/80">
          <p className="font-semibold text-ink">📧 Email xác nhận:</p>
          <p>hoadon@ggcloud-stationery.vn</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="rounded-full bg-pine px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-pine/90"
        >
          Tiếp tục mua sắm
        </Link>
        <Link
          href="/danh-muc"
          className="rounded-full border border-ink/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-sand"
        >
          Xem danh mục sản phẩm
        </Link>
      </div>
    </div>
  );
}
