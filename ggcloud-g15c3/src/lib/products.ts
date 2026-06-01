import { products } from "@/data/catalog";

export async function fetchProducts() {
  // Đây là hàm mẫu gọi dữ liệu từ CMS.
  // Bạn có thể mở rộng thành fetch API thật sau này.
  return products;
}
