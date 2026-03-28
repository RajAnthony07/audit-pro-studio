import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: 'Audit-Pro Studio | DigitalRaj',
  description: 'Professional 10-Point Compliance & Threat Verification.',
}
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