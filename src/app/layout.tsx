import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Chase Meadows | Portfolio",
  description: "Portfolio of applications built by Chase Meadows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <div className="stars" />
          <div className="embers" />
          <Navbar />
          <main className="page-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
