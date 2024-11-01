import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "TrustyBite - Where Freshness and Hygiene Meet",
  description: "Experience ultimate freshness and hygiene in dining with TrustyBite, your trusted partner for food safety.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased h-screen`}>{children}</body>
    </html>
  );
}