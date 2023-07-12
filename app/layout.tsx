import { ReactNode } from "react"
import Navbar from "@components/organism/Navbar"
import Breadcrumb from "@components/moleculs/Breadcrumb"
import Footer from "@components/organism/Footer"
import "@styles/globals.css"

export const metadata = {
  title: "Sobat Bangun | Platform Digital SIG",
  description: "SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan"
}

interface IRootLayout {
  children: ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <body>
        <Navbar />
        <Breadcrumb />
        {children}
        <Footer />
      </body>
    </html>
  )
}