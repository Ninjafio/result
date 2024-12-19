import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});


export const metadata: Metadata = {
  title: "МИДИС",
  description: "Информационные технологии и программирование",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
