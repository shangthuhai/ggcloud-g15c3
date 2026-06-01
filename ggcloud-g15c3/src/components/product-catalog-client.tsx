"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Category, Product } from "@/data/catalog";

const priceRanges: Array<
  { id: string; label: string; min?: number; max?: number }
> = [
  { id: "all", label: "Tất cả" },
  { id: "under100", label: "Dưới 100k", min: 0, max: 99999 },
  { id: "100-200", label: "100k - 200k", min: 100000, max: 200000 },
  { id: "over200", label: "Trên 200k", min: 200001, max: Infinity },
];

export function ProductCatalogClient({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [searchText, setSearchText] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const selectedRange = priceRanges.find(
        (range) => range.id === selectedPrice
      );

      const matchPrice =
        selectedPrice === "all" ||
        (
          selectedRange &&
          selectedRange.min !== undefined &&
          selectedRange.max !== undefined &&
          product.price >= selectedRange.min &&
          product.price <= selectedRange.max
        );

      const matchText =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.categoryLabel.toLowerCase().includes(normalizedSearch) ||
        product.imageAlt.toLowerCase().includes(normalizedSearch);

      return matchCategory && matchPrice && matchText;
    });
  }, [products, selectedCategory, selectedPrice, searchText]);

  return (
    <div className="space-y-6">
      {/* FILTER */}
      <div className="rounded-[32px] border border-ink/10 bg-cream p-6 shadow-sm">
        <div className="flex flex-col gap-4">

              {/* SEARCH */}
          <div>
            <label className="block text-xs uppercase tracking-[0.3em] text-charcoal/70" htmlFor="product-search">
              Tìm kiếm
            </label>
            <input
              id="product-search"
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Tìm Sổ tay, 100k, bút..."
              className="mt-3 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/20"
            />
          </div>

          {/* PRICE */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              Khoảng giá
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  type="button"
                  onClick={() => setSelectedPrice(range.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    selectedPrice === range.id
                      ? "border-pine bg-pine/10 text-pine"
                      : "border-ink/10 bg-white text-charcoal"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
              Danh mục
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  selectedCategory === "all"
                    ? "border-pine bg-pine/10 text-pine"
                    : "border-ink/10 bg-white text-charcoal"
                }`}
              >
                Tất cả
              </button>

              {categories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category.slug)
                  }
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    selectedCategory === category.slug
                      ? "border-pine bg-pine/10 text-pine"
                      : "border-ink/10 bg-white text-charcoal"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* COUNT */}
      <div className="rounded-[28px] bg-mist p-4 text-sm">
        <p>
          Hiện {filteredProducts.length} sản phẩm
          {selectedCategory !== "all" && (
            <>
              {" "}
              • Danh mục:{" "}
              {
                categories.find(
                  (c) => c.slug === selectedCategory
                )?.title
              }
            </>
          )}
          {selectedPrice !== "all" && (
            <>
              {" "}
              • Khoảng giá:{" "}
              {
                priceRanges.find(
                  (p) => p.id === selectedPrice
                )?.label
              }
            </>
          )}
        </p>
      </div>

      {/* PRODUCT LIST */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full rounded-[28px] bg-mist p-10 text-center">
            Không có sản phẩm phù hợp với bộ lọc hiện tại.
          </div>
        )}
      </div>
    </div>
  );
}