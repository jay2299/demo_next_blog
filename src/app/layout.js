'use client'
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";
import Navbar from './componet/navbar'
const inter = Inter({ subsets: ["latin"] });


const existingRoutes = ['/', '/about', '/blogclient', '/blogsrever', '/user/:userid', '/login', '/signup', '/user/1', '/user/2', '/user/3', '/user/4', '/user/5', '/user/6', '/user/7', '/user/8', '/user/9', '/user/10', '/user'];


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isExistingRoute = existingRoutes.includes(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        {isExistingRoute && <Navbar />}
        {children}</body>

    </html>
  );
}
