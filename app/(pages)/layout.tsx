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
  // console.log(session);
  console.log(user);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="h-screen flex flex-col">
              <Header />
              <Navbar />
              <main className="bg-th-background gradient w-screen mx-auto flex-grow flex flex-col justify-center items-center">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
