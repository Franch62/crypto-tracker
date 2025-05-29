import Link from "next/link";
import { fetchTopCoins } from "../../lib/coingecko";

export default async function Home() {
  const coins = await fetchTopCoins();

  return (
    <section className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Top criptomoedas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gris-cols-3 gap-4">
        {coins.map((coin: any) => (
          <Link href={`/coin/${coin.id}`} key={coin.id}>
            <div className="p-4 border border-gray-600 rounded sadhow hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                <h2 className="font-semibold">{coin.name}</h2>
              </div>
              <p>Preço: ${coin.current_price.toLocaleString()}/</p>
              <p
                className={
                  coin.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                Variação: {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
