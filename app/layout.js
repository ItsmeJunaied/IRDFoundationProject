import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ওহীর সূচনা অধ্যায়",
  description: "ওহীর সূচনা অধ্যায়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-black">

      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
