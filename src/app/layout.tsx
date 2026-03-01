import type { Metadata } from "next";
import { Inter, Philosopher, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-philosopher"
});
const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel"
});

export const metadata: Metadata = {
  title: "Project G | Премиум Сервер",
  description: "Лучший сервер Hytale. Заходи и играй на Project G.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${inter.variable} ${philosopher.variable} ${cinzel.variable} font-sans bg-background text-foreground antialiased selection:bg-accent-gold/30 selection:text-accent-gold`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
