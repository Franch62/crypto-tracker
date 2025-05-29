import { fetchCoinMarketChart } from "@/lib/coingecko";
import CoinChart from "@/components/CoinChart";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `${params.id.toUpperCase()} | Crypto Tracker`,
  };
}

export default async function CoinPage({ params }: { params: { id: string } }) {
  const chartData = await fetchCoinMarketChart(params.id);

  const prices = chartData.prices.map((item: [number, number]) => ({
    date: new Date(item[0]).toLocaleDateString("pt-BR"),
    price: item[1],
  }));

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{params.id.toUpperCase()}</h1>
      <CoinChart data={prices} />
    </main>
  );
}
