"use client";
import "./globals.css";
import Nav from "@/components/Nav/NavBar";
import { Body } from "@/components/StyledElement/StyledElement";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
    .replaceAll("-", " ")
    .split("/")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" > ");

  return (
    <html lang="fr">
      <Body xs="bg-background mx-auto" sm="sm:w-full" xl="xl:w-[1240px]">
        <Nav />
        <div className="ml-[35px] mt-[33px] mb-[10px] text-white text-sm">{`Accueil${pathname}`}</div>
        <main className="text-primary">{children}</main>
      </Body>
    </html>
  );
}
