import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audit Pro Studio | Professional Compliance",
  description: "High-end digital auditing engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}