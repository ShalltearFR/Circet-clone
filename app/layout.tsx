"use client";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname().slice(1).replaceAll("-", " ");

  return (
    <html lang="fr">
      <body className="bg-background mx-auto tablet:w-full desktop:w-[1240px]">
        <Nav />
        <div className="ml-[35px] mt-[33px] mb-[10px] text-white text-sm capitalize">{`Accueil > ${pathname}`}</div>
        <main>{children}</main>
      </body>
    </html>
  );
}
