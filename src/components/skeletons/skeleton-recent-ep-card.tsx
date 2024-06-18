import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
export function SkeletonRecentEpsCard() {
	return (
		<Card className="h-full w-full">
			<CardHeader>
				<CardTitle>
					<Skeleton className="h-6 w-[250px]" />
				</CardTitle>
				<CardTitle>
					<Skeleton className="h-6 w-[250px]" />
				</CardTitle>

				<CardDescription>
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[250px]" />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button className="w-full bg-gray-100 dark:bg-gray-800">
					<Skeleton className="w-full" />
				</Button>
			</CardContent>
		</Card>
	);
}
