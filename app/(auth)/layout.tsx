import "app/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@components/providers/";

export const metadata: Metadata = {
  title: "Login or Sign Up",
  description: "Change this lmao",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-th-background h-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
