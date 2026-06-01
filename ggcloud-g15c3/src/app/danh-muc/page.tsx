import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/catalog";

export default function CategoryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-12">
      <section className="grid gap-6 rounded-[32px] border border-ink/10 bg-cream p-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
            Danh mục
          </p>
          <h1 className="text-3xl font-semibold text-ink md:text-4xl">
            Chọn bộ sản phẩm đúng ngân sách và phong cách.
          </h1>
          <p className="text-sm text-charcoal/80">
            Gợi ý cho học sinh, sinh viên, đối tác doanh nghiệp và quà tặng sự kiện.
          </p>
        </div>
        <div className="rounded-[28px] bg-gradient-to-br from-pine/20 via-cream to-tangerine/30 p-6">
          <p className="text-sm font-semibold text-ink">Gợi ý nhanh</p>
          <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
            <li>Combo 100K cho quà tặng số lượng lớn.</li>
            <li>Bút ký kim loại cho hợp đồng B2B.</li>
            <li>Sổ tay dot grid cho bullet journal.</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <div id={category.slug} key={category.slug} className="h-full">
            <CategoryCard category={category} />
          </div>
        ))}
      </section>

      <section className="space-y-6" id="combo">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-ink">Sản phẩm nổi bật</h2>
          <p className="text-sm text-charcoal/80">
            Cập nhật mới nhất cho mùa Back to School.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
