import { SkeletonRecentEpsCard } from "./skeleton-recent-ep-card";

export function SkeletonRecentPods() {
	return (
		<section
			id="episodes"
			className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg  px-3 py-1 text-sm ">
							Latest Episodes
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Dive into the spooky world
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Explore the latest episodes of our podcast, where we delve into
							the paranormal, the unexplained, and the downright spooky.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-4xl items-center gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
					<SkeletonRecentEpsCard />
					<SkeletonRecentEpsCard />
					<SkeletonRecentEpsCard />
				</div>
			</div>
		</section>
	);
}
