import type { Metadata } from "next";
import { Inter, Calistoga} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

//instatiate fonts and tell it to use var to tell it when to show up
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] , });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //twMerge allows to add more classes dynamically to this function
  return (
    <html lang="en"> 
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
