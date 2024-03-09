import { NavBar } from '@/components/NavBar/NavBar';
import SessionProvider from './SessionProvider';
import "@/styles/globals.css"


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
      <SessionProvider>
        <NavBar />
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}