import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import RSSParser from "rss-parser";

export type Episode = {
	title: string;
	link: string;
	pubDate: string;
	contentSnippet: string;
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function parseRssFeed() {
	const parser = new RSSParser();
	const feed = await parser.parseURL("https://ooohspooky.libsyn.com/rss");
	const episodes: Episode[] = feed.items.slice(0, 3).map((item) => ({
		title: item.title || "No title",
		link: item.link || "#",
		pubDate: item.pubDate || "No date",
		contentSnippet: item.contentSnippet || "No description",
	}));
	return episodes;
}
