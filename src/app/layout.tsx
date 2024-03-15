/* eslint-disable @next/next/no-sync-scripts */
import { NavBar } from '@/components/NavBar/NavBar';
import SessionProvider from './SessionProvider';
import "@/styles/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head><script src="http://localhost:8097"></script></head>
      <body>
      <SessionProvider>
      <SpeedInsights/>
      <Analytics/>
        <NavBar />
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}