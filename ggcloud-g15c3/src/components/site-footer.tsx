const policyItems = [
  {
    title: "Chính sách đổi trả",
    description: "Đổi trả hàng lỗi trong 7 ngày, hoàn phí vận chuyển lỗi nhà cung cấp.",
  },
  {
    title: "Giao hàng hỏa tốc",
    description: "Gửi nhanh 2-4 giờ nội thành, cập nhật trạng thái theo đơn.",
  },
  {
    title: "Bảo mật dữ liệu",
    description: "Thông tin đơn hàng được mã hóa và lưu trữ an toàn.",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/70">
            GGCloud Studio
          </p>
          <p className="text-2xl font-serif text-ink">
            Văn phòng phẩm tinh gọn cho công việc hiệu quả.
          </p>
          <p className="text-sm text-charcoal/80">
            Tư vấn quà tặng doanh nghiệp theo ngân sách và số lượng.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-ink">Địa chỉ kho</p>
          <p className="text-sm text-charcoal/80">Cập nhật địa chỉ kho trên CMS.</p>
          <p className="text-sm text-charcoal/80">Giờ hỗ trợ: 08:30 - 20:00.</p>
        </div>
        <div className="space-y-4">
          {policyItems.map((item) => (
            <div key={item.title} className="rounded-2xl bg-cream px-4 py-3">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="text-xs text-charcoal/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-charcoal/70 md:flex-row">
          <span>GGCloud Stationery 2026. All rights reserved.</span>
          <span>Chính sách: đổi trả hàng lỗi - giao hàng hỏa tốc - bảo mật dữ liệu.</span>
        </div>
      </div>
    </footer>
  );
}
