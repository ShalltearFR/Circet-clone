import './globals.css';
import Header from "@/components/Header/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='bg-background'>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}
