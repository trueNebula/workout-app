import "@styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@components/ui/navbar";
import { Providers } from "@components/providers/providers";

export const metadata: Metadata = {
  title: "Workout App",
  description: "Change this lmao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar></Navbar>

          <main className="bg-th-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
