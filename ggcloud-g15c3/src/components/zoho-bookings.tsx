export function ZohoBookingsEmbed() {
  const embedUrl = process.env.NEXT_PUBLIC_ZOHO_BOOKINGS_EMBED_URL;

  if (!embedUrl) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-cream p-6 text-sm text-charcoal/80">
        Thêm biến môi trường NEXT_PUBLIC_ZOHO_BOOKINGS_EMBED_URL để hiện lịch
        hẹn trực tuyến.
      </div>
    );
  }

  return (
    <iframe
      title="Zoho Bookings"
      src={embedUrl}
      className="h-[640px] w-full rounded-3xl border border-ink/10"
    />
  );
}
