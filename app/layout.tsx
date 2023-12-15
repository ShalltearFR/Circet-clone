"use client";
import "./globals.css";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname().slice(1);

  return (
    <html lang="fr">
      <body className="bg-background w-[1240px] mx-auto flex flex-col">
        <Header />
        <span className="ml-[35px] mt-[33px] text-white text-sm capitalize">{`Accueil > ${pathname}`}</span>
        <main>{children}</main>
      </body>
    </html>
  );
}
