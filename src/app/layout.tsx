import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { bellefair, pacifico, paytoneOne } from "./fonts";


export const metadata: Metadata = {
  title: "Mohammed Arif Portfolio",
  description: "A personal portfolio website showcasing projects and skills.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pacifico.variable} ${paytoneOne.variable} ${bellefair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        </body>
    </html>
  );
}
