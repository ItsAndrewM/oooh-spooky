import { Episode } from "@/lib/utils";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export function RecentEpsCard({ episode }: { episode: Episode }) {
	return (
		<Card className="h-full w-full" key={episode.title}>
			<CardHeader>
				<CardTitle>{episode.title}</CardTitle>
				<CardDescription>{episode.contentSnippet}</CardDescription>
			</CardHeader>
			<CardContent>
				<Button variant="ghost" className="w-full">
					Play
				</Button>
			</CardContent>
		</Card>
	);
}
