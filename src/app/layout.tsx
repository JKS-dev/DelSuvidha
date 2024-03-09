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
      <head><meta name="google-site-verification" content="g6UH3WQlmkiE5i7SbBE_8_JKez9wRTZyjDyId83xYg8" /></head>
      <body>
      <SessionProvider>
        <NavBar />
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}