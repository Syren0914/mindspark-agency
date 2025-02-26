import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import "./globals.css";
import React from "react"; // Import React

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen w-full bg-background font-sans antialiased")} style={{ fontFamily: "Mona Sans, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
