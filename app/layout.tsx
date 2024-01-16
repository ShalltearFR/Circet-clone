"use client";
import "./globals.css";
import Nav from "@/components/Nav/NavBar";
import { Body } from "@/components/StyledElement/StyledElement";
import PathName from "@/components/PathName/PathName";
import FooterBar from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Body xs="bg-background">
        <Nav />
        <PathName />
        <main className="text-primary">{children}</main>
        <FooterBar />
      </Body>
    </html>
  );
}
