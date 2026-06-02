import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/catalog";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-charcoal/70">
              Studio văn phòng phẩm
            </p>
            <h1 className="font-serif text-4xl text-ink md:text-5xl">
              Chọn quà tặng và văn phòng phẩm tinh gọn, đẹp, dễ bán.
            </h1>
            <p className="text-sm text-charcoal/80 md:text-base">
              Bộ sản phẩm cho học sinh, sinh viên và doanh nghiệp. Đóng gói theo
              ngân sách 100k, 200k, 500k, sẵn sàng in logo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/danh-muc"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream"
              >
                Xem danh mục
              </Link>
              <Link
                href="/gio-hang"
                className="rounded-full border border-ink/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Giỏ hàng
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-charcoal/70">
              <span>Gói 100k - 500k</span>
              <span>In logo nhanh</span>
              <span>Hỗ trợ hóa đơn B2B</span>
            </div>
          </div>
          <div className="relative grid gap-4">
            <div className="overflow-hidden rounded-[36px] border border-ink/10 bg-cream/90 p-4 shadow-[0_28px_70px_-45px_rgba(27,26,23,0.6)]">
              <div className="relative aspect-[9/7] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(242,163,101,0.2),_transparent_55%)]">
                <Image
                  src="/images/hero-stationery.svg"
                  alt="Bộ đồ dùng văn phòng phẩm"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-cream/80 p-6 shadow-[0_30px_70px_-45px_rgba(27,26,23,0.6)]">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
                Set B2B
              </p>
              <p className="mt-3 text-lg font-semibold text-ink">
                Hộp quà tặng + sổ tay + bút ký
              </p>
              <p className="text-sm text-charcoal/80">
                Báo giá từ 50 bộ, hỗ trợ thiết kế logo.
              </p>
            </div>
            <div className="rounded-[28px] bg-gradient-to-br from-tangerine/30 via-cream to-mist p-6 shadow-[0_30px_70px_-45px_rgba(27,26,23,0.6)]">
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
                Back to School
              </p>
              <p className="mt-3 text-lg font-semibold text-ink">
                Sổ tay + sticky note + bút màu
              </p>
              <p className="text-sm text-charcoal/80">Gói quà tặng 200k</p>
            </div>
            <div className="rounded-[28px] border border-ink/10 bg-pine p-6 text-cream shadow-[0_30px_70px_-45px_rgba(27,26,23,0.6)]">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/70">
                Sản phẩm chủ lực
              </p>
              <p className="mt-3 text-lg font-semibold">Sổ tay Linen 180 trang</p>
              <p className="text-sm text-cream/80">Bán chạy tháng này</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-charcoal/70">
              Danh mục
            </p>
            <h2 className="font-serif text-3xl text-ink">
              Chọn nhanh theo nhu cầu
            </h2>
          </div>
          <Link
            href="/danh-muc"
            className="text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.slice(0, 4).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-charcoal/70">
              Gói ngân sách
            </p>
            <h2 className="font-serif text-3xl text-ink">Quà tặng theo mức giá</h2>
          </div>
          <span className="text-sm text-charcoal/70">
            Gói quà tặng có thể tùy biến theo thương hiệu.
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "100K",
              note: "Gói quà tặng nhanh cho sự kiện",
              tint: "bg-[radial-gradient(circle_at_top,_rgba(242,163,101,0.25),_transparent_60%)]",
            },
            {
              title: "200K",
              note: "Gói đồng bộ màu sắc, nội thất",
              tint: "bg-[radial-gradient(circle_at_top,_rgba(46,77,59,0.25),_transparent_60%)]",
            },
            {
              title: "500K",
              note: "Combo B2B, kèm hộp và thư cảm ơn",
              tint: "bg-[radial-gradient(circle_at_top,_rgba(27,26,23,0.25),_transparent_60%)]",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl border border-ink/10 bg-cream p-6 ${item.tint}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
                {item.title}
              </p>
              <p className="mt-3 text-lg font-semibold text-ink">{item.note}</p>
              <p className="mt-6 text-sm text-charcoal/70">
                Đặt nhanh trong 2-4 ngày, hỗ trợ in logo.
              </p>
              <Link
                href="/bao-gia"
                className="mt-6 inline-block rounded-full bg-ink px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cream hover:bg-ink/90"
              >
                Yêu cầu báo giá số lượng lớn
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-charcoal/70">
              Sản phẩm nổi bật
            </p>
            <h2 className="font-serif text-3xl text-ink">
              Lựa chọn từ đội ngũ thiết kế
            </h2>
          </div>
          <span className="text-sm text-charcoal/70">
            Cập nhật từ chi tiết đơn hàng mới nhất.
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="b2b" className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 rounded-[32px] border border-ink/10 bg-pine p-10 text-cream md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-cream/70">
              Dịch vụ quà tặng B2B
            </p>
            <h2 className="font-serif text-3xl">
              Tư vấn quà tặng doanh nghiệp theo ngân sách.
            </h2>
            <p className="text-sm text-cream/80">
              Đóng gói đồng bộ, thiết kế thông điệp và hỗ trợ giao hàng theo lịch.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/b2b"
                className="rounded-full bg-cream px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-pine"
              >
                Đặt lịch tư vấn
              </Link>
              <span className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/80">
                Có hóa đơn điện tử
              </span>
            </div>
          </div>
          <div className="space-y-4 rounded-[24px] bg-cream/10 p-6">
            <p className="text-sm font-semibold text-cream">Dịch vụ kèm theo</p>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>Tư vấn màu sắc và chất liệu đồng bộ.</li>
              <li>In logo, thẻ cảm ơn, và thư cảm ơn.</li>
              <li>Hỗ trợ chốt số lượng và xuất hóa đơn.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
