import "app/globals.css";
import type { Metadata } from "next";
import Header from "@components/ui/header";
import Navbar from "@components/ui/navbar";
import { ThemeProvider, SessionProvider } from "@components/providers";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Workout App",
  description: "Change this lmao",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <ThemeProvider>
            <Header />
            <Navbar />
            <main className="bg-th-background">{children}</main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
