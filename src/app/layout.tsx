import type { Metadata } from "next";
import { geist } from "@/styles/fonts";
import "./globals.css";
import { Header1 } from "@/components/homepage/headers/Header1";


export const metadata: Metadata = {
  title: "Artist Site",
  description: "Repo containing reusable components for speedy website development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <Header1 />
        {children}
      </body>
    </html>
  );
}
