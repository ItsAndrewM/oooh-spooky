import { GhostIcon } from "@/components/icons/ghostIcon";
import Link from "next/link";

export function Navbar() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center">
			<Link
				href="#"
				className="flex items-center justify-center"
				prefetch={false}
			>
				<GhostIcon className="h-6 w-6" />
				<span className="sr-only">Oooh, Spooky</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Episodes
				</Link>
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Hosts
				</Link>
				<Link
					href="#"
					className="text-sm font-medium hover:underline underline-offset-4"
					prefetch={false}
				>
					Subscribe
				</Link>
			</nav>
		</header>
	);
}
