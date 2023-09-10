import "@styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "@components/providers/providers";

export const metadata: Metadata = {
  title: "Login or Sign Up",
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
          <main className="bg-th-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
