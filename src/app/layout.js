'use client';

import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';
import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import React, { useMemo } from 'react';

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const pathName = usePathname().split('/');
  console.log(pathName);
  const authenticatedRoutes = useMemo(() => ['dashboard', 'profile', 'students', 'teachers'], []);

  const isAuthenticatedRoute = useMemo(() => authenticatedRoutes.includes(pathName[1]), [pathName, authenticatedRoutes]);

  return (
    <html lang="en" className="dark bg-primary">
      <body className={inter.className}>
        {isAuthenticatedRoute ? <AuthenticatedLayout>{children}</AuthenticatedLayout> : children}
      </body>
    </html>
  );
}
