import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Layout } from "@/components/component/layout/layout";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Oooh Spooky",
	description:
		"Three brave explorers of the unknown read excerpts from a haunted book of the paranormal. Adam Knox, Luka Muller and Peter Jones are comedians from Melbourne, Australia whose souls are on the line for the podcast about ghosts, ghouls, UFOs and often a group of easily excited villagers who've just seen something slightly weird, but not really that weird. Listener beware! You're in for a chuckle.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
