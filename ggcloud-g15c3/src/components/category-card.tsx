import Link from "next/link";
import type { Category } from "@/data/catalog";

const toneClasses: Record<Category["tone"], string> = {
  mist: "bg-mist",
  sand: "bg-sand",
  cream: "bg-cream",
  pine: "bg-pine text-cream",
};

const toneText: Record<Category["tone"], string> = {
  mist: "text-charcoal/70",
  sand: "text-charcoal/70",
  cream: "text-charcoal/70",
  pine: "text-cream/70",
};

const toneHeading: Record<Category["tone"], string> = {
  mist: "text-ink group-hover:text-pine",
  sand: "text-ink group-hover:text-pine",
  cream: "text-ink group-hover:text-pine",
  pine: "text-cream group-hover:text-cream",
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/danh-muc#${category.slug}`}
      className={`group flex h-full flex-col justify-between rounded-3xl border border-ink/10 p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(26,26,23,0.12)] ${toneClasses[category.tone]}`}
    >
      <div>
        <p
          className={`text-xs uppercase tracking-[0.3em] ${toneText[category.tone]}`}
        >
          {category.title}
        </p>
        <p className={`mt-3 text-lg font-semibold ${toneHeading[category.tone]}`}>
          {category.description}
        </p>
      </div>
      <div className="mt-10 flex items-center gap-2 text-sm font-medium">
        <span>Xem sản phẩm</span>
        <span aria-hidden>→</span>
      </div>
    </Link>
  );
}
