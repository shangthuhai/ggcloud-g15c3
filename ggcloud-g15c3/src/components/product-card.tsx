import type { Product } from "@/data/catalog";
import { formatVnd } from "@/data/catalog";

const toneClasses: Record<Product["tone"], string> = {
  mist: "bg-mist",
  sand: "bg-sand",
  cream: "bg-cream",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-3xl border border-ink/10 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(26,26,23,0.16)] ${toneClasses[product.tone]}`}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream"
            >
              {badge}
            </span>
          ))}
        </div>
        <p className="text-lg font-semibold text-ink">{product.name}</p>
        <p className="text-sm text-charcoal/80">
          Phù hợp: {product.categoryLabel}
        </p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-lg font-semibold text-pine">
          {formatVnd(product.price)}
        </span>
        <button className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-cream">
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
