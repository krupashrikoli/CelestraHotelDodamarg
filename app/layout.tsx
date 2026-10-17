import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celéstra | Premium Hotel in Dodamarg",
  description: "A contemporary premium hotel in Dodamarg — by GHD Hotels. Deployed at celestra.ghdhotels.in",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
