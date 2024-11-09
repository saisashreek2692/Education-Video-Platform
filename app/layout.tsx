import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Education Video Platform",
  description: "Video Platform is here to help to teach and make children understand the concepts in easy format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
