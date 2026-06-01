export type Category = {
  slug: string;
  title: string;
  description: string;
  tone: "mist" | "sand" | "cream" | "pine";
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  tone: "mist" | "sand" | "cream";
  badges?: string[];
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  detail: string;
};

export const categories: Category[] = [
  {
    slug: "so-tay",
    title: "Sổ tay",
    description: "Chất giấy mượt, kẻ dòng vừa tay, dùng cho note nhanh và bullet journal.",
    tone: "mist",
  },
  {
    slug: "but",
    title: "Bút",
    description: "Bút gel, bút mực nước, set màu trung tính cho thao tác ký hợp đồng.",
    tone: "sand",
  },
  {
    slug: "combo-qua-tang",
    title: "Combo quà tặng",
    description: "Gói sản phẩm đồng bộ, đóng hộp nhanh cho sự kiện và tri ân.",
    tone: "cream",
  },
  {
    slug: "b2b",
    title: "Gói doanh nghiệp",
    description: "Bộ quà tặng B2B có sẵn spot logo, set thông điệp và báo giá số lượng.",
    tone: "pine",
  },
];

export const products: Product[] = [
  {
    id: "st-001",
    name: "Sổ tay Linen 180 trang",
    price: 125000,
    category: "so-tay",
    categoryLabel: "Sổ tay",
    image: "/images/products/notebook-linen.svg",
    imageAlt: "So tay Linen",
    tone: "mist",
    badges: ["Bán chạy"],
  },
  {
    id: "st-002",
    name: "Sổ tay Dot Grid A5",
    price: 98000,
    category: "so-tay",
    categoryLabel: "Sổ tay",
    image: "/images/products/notebook-dot.svg",
    imageAlt: "So tay Dot Grid",
    tone: "cream",
  },
  {
    id: "bt-001",
    name: "Bút gel 0.5 Minimal",
    price: 36000,
    category: "but",
    categoryLabel: "Bút",
    image: "/images/products/pen-gel.svg",
    imageAlt: "But gel Minimal",
    tone: "sand",
  },
  {
    id: "bt-002",
    name: "Bút ký kim loại",
    price: 69000,
    category: "but",
    categoryLabel: "Bút",
    image: "/images/products/pen-metal.svg",
    imageAlt: "But ky kim loai",
    tone: "mist",
    badges: ["Cao cấp"],
  },
  {
    id: "cb-001",
    name: "Combo Quà tặng 100K",
    price: 99000,
    category: "combo-qua-tang",
    categoryLabel: "Combo",
    image: "/images/products/gift-100.svg",
    imageAlt: "Combo qua tang 100K",
    tone: "cream",
  },
  {
    id: "cb-002",
    name: "Combo Quà tặng 200K",
    price: 199000,
    category: "combo-qua-tang",
    categoryLabel: "Combo",
    image: "/images/products/gift-200.svg",
    imageAlt: "Combo qua tang 200K",
    tone: "sand",
    badges: ["Quà tặng nhanh"],
  },
  {
    id: "cb-003",
    name: "Combo Quà tặng 500K",
    price: 499000,
    category: "combo-qua-tang",
    categoryLabel: "Combo",
    image: "/images/products/gift-500.svg",
    imageAlt: "Combo qua tang 500K",
    tone: "mist",
    badges: ["Cho B2B"],
  },
];

export const cartItems: CartItem[] = [
  {
    id: "st-001",
    name: "Sổ tay Linen 180 trang",
    price: 125000,
    quantity: 2,
    detail: "Màu nâu đỏ, dòng kẻ mờ",
  },
  {
    id: "bt-002",
    name: "Bút ký kim loại",
    price: 69000,
    quantity: 1,
    detail: "Màu đen, hộp quà tặng",
  },
];

export const formatVnd = (value: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
