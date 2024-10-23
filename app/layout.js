import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import StoreProvider from "./StoreProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ওহীর সূচনা অধ্যায়",
  description: "ওহীর সূচনা অধ্যায়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-black h-full overflow-y-hidden">

      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
