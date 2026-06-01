import Link from "next/link";
import { ZohoBookingsEmbed } from "@/components/zoho-bookings";

export default function B2BPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12">
      <section className="grid gap-8 rounded-[32px] border border-ink/10 bg-cream p-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-charcoal/70">
            Tư vấn doanh nghiệp
          </p>
          <h1 className="text-3xl font-semibold text-ink md:text-4xl">
            Đặt lịch tư vấn quà tặng B2B
          </h1>
          <p className="text-sm text-charcoal/80">
            Gợi ý combo theo ngân sách, quy trình giao hàng, và tư vấn in logo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/danh-muc"
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cream"
            >
              Xem sản phẩm
            </Link>
            <span className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/70">
              Báo giá trong 24h
            </span>
          </div>
        </div>
        <div className="space-y-4 rounded-[24px] bg-mist p-6">
          <p className="text-sm font-semibold text-ink">Quy trình</p>
          <ol className="space-y-2 text-sm text-charcoal/80">
            <li>1. Chia sẻ ngân sách và số lượng.</li>
            <li>2. Chọn mẫu combo và yêu cầu in logo.</li>
            <li>3. Xác nhận mẫu và lịch giao hàng.</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-ink">Đặt lịch tư vấn</h2>
          <span className="text-sm text-charcoal/70">
            Lịch hẹn được đồng bộ với Zoho Bookings.
          </span>
        </div>
        <ZohoBookingsEmbed />
      </section>
    </div>
  );
}
