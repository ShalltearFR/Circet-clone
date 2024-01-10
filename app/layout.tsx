"use client";
import "./globals.css";
import Nav from "@/components/Nav/NavBar";
import { Body } from "@/components/StyledElement/StyledElement";
import PathName from "@/components/PathName/PathName";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Body xs="bg-background mx-auto" sm="sm:w-full" xl="xl:w-[1240px]">
        <Nav />
        <PathName />
        <main className="text-primary">{children}</main>
      </Body>
    </html>
  );
}
