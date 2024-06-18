import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Navbar />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}
