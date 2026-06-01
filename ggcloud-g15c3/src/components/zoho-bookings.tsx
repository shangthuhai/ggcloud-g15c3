export function ZohoBookingsEmbed() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dịch Vụ Quà Tặng Doanh Nghiệp B2B</h1>
      <p className="mb-8">Hãy chọn khung giờ phù hợp dưới đây, đội ngũ thiết kế của chúng tôi sẽ liên hệ để tư vấn trực tiếp cho bạn.</p>
      
      {/* Khung nhúng lịch Zoho Bookings */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-200" style={{ height: '700px' }}>
        <iframe
          src="https://ministation.zohobookings.com/portal-embed#/4945686000000041045" 
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Đặt lịch hẹn tư vấn thiết kế quà tặng"
        ></iframe>
      </div>
    </div>
  );
}

export default ZohoBookingsEmbed;
