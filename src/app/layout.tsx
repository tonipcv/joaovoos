import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Voos | Viagens com até 50% de desconto",
  description: "Descubra como viajar para fora do país pagando até metade do preço. Ofertas exclusivas de passagens aéreas e dicas de viagem.",
  keywords: "passagens aéreas, viagens internacionais, desconto em passagens, voos baratos, promoção de passagens",
  authors: [{ name: "João Voos", url: "https://instagram.com/joaodosvoos" }],
  creator: "João Voos",
  publisher: "João Voos",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joaovoos.com.br",
    title: "João Voos | Viagens com até 50% de desconto",
    description: "Descubra como viajar para fora do país pagando até metade do preço. Ofertas exclusivas de passagens aéreas e dicas de viagem.",
    siteName: "João Voos",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Voos | Viagens com até 50% de desconto",
    description: "Descubra como viajar para fora do país pagando até metade do preço. Ofertas exclusivas de passagens aéreas.",
    creator: "@joaodosvoos",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
  },
  alternates: {
    canonical: "https://joaovoos.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
