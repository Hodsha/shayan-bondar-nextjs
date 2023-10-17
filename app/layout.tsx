
import { LanguageProvider } from '@/app/hooks/LanguageProvider'
import './globals.scss'
import Header from './Navbar'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
      </body>
    </html>
  )
}
