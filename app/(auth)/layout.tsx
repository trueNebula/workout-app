import "app/globals.css";
import type { Metadata } from "next";
import { SessionProvider, ThemeProvider } from "@components/providers/";
import Title from "@components/ui/Title";
import getCurrentUser, { getSession } from "@actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Login or Sign Up",
  description: "Change this lmao",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  // console.log("layout", session);
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="bg-th-background gradient h-screen mx-auto flex flex-col justify-center items-center">
              <Title />
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
