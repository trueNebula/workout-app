import "app/globals.css";
import type { Metadata } from "next";
import Header from "@components/ui/header";
import Navbar from "@components/ui/navbar";
import { ThemeProvider, SessionProvider } from "@components/providers";
import getCurrentUser, { getSession } from "@actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Workout App",
  description: "Change this lmao",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = await getCurrentUser();
  // console.log(user);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen">
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <Navbar />
            <main className="bg-th-background gradient mx-auto flex flex-col justify-center items-center">
              {children}
            </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
