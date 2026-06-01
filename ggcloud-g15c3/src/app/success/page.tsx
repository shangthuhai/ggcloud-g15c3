import SuccessClient from "@/components/success-client";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[]> | Promise<Record<string, string | string[]>>;
}) {
  const params = await searchParams;
  const provider = Array.isArray(params?.provider)
    ? params.provider[0]
    : params?.provider || "VNPAY";

  return <SuccessClient provider={provider} />;
}
