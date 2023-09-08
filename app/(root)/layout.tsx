import "@styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "@components/providers/providers";
import { ClerkProvider } from "@clerk/nextjs";

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
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body>
					<Providers>
						<main className="bg-th-background">{children}</main>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
