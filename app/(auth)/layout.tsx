import "@styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "@components/providers/providers";
import { ClerkProvider } from "@clerk/nextjs";

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
		<ClerkProvider>
			<html lang="en">
				<Providers>
					<body>{children}</body>
				</Providers>
			</html>
		</ClerkProvider>
	);
}
