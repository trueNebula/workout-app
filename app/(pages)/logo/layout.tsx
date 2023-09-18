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
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<div className="h-screen flex flex-col">
					<main className="bg-transparent w-screen mx-auto flex-grow flex flex-col justify-center items-center">
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
