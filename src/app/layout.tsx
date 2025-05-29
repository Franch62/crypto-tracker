import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypto Tracker",
  description: "Follow the top 10 cryptocurrencies on the global market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-zinc-100 text-gray-900 dark:bg-zinc-900 dark:text-gray-200 antialiased`}
      >
        <header className="flex justify-center text-xl p-4 mx-auto font-bold border-b-1 border-gray-600">
          {" "}
          CryptoTracker
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
