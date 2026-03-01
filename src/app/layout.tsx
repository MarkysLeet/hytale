import type { Metadata } from "next";
import { Inter, Philosopher } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-philosopher"
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
        className={`${inter.variable} ${philosopher.variable} font-sans bg-background text-foreground antialiased selection:bg-accent-gold/30 selection:text-accent-gold`}
      >
        {children}
      </body>
    </html>
  );
}
