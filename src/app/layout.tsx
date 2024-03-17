/* eslint-disable @next/next/no-sync-scripts */
import { NavBar } from '@/components/NavBar/NavBar';
import SessionProvider from './SessionProvider';
import "@/styles/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
      <SessionProvider>
      <SpeedInsights/>
      <Analytics/>
        <NavBar />
        <ToastContainer />
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}