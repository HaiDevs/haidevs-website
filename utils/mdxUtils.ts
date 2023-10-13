import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type Options } from "rehype-pretty-code";
import { sync } from "glob";
import readingTime from "reading-time";

export const POSTS_PATH = path.join(process.cwd(), "content/");

export function getSlug() {
	const postFilePaths = POSTS_PATH;

	const paths = sync(`${postFilePaths}/*.mdx`);

	return paths.map((path) => {
		const pathContent = path.split("/");
		const fileName = pathContent[pathContent.length - 1];
		const [slug, _extension] = fileName.split(".");
		return slug;
	});
}

export function getPostBySlug(slug: string) {
	const pathDir = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(pathDir, "utf8");
	const { content, data } = matter(source);

	return {
		content,
		frontmatter: {
			slug,
			excerpt: data.excerpt,
			title: data.title,
			tags: data.tags,
			date: data.date,
			readingTime: readingTime(source).text,
			...data
		}
	};
}

export function getAllPosts() {
	const posts = fs.readdirSync(path.join(process.cwd(), "content/"));

	return posts.reduce((allPosts: any, postSlug: any) => {
		const source = fs.readFileSync(
			path.join(process.cwd(), "content/", postSlug),
			"utf-8"
		);
		const { data } = matter(source);

		return [
			{
				...data,
				slug: postSlug.replace(".mdx", ""),
				readingTime: readingTime(source).text
			},
			...allPosts
		];
	}, []);
}

// mdxOptions
export const rehypePrettyCodeOptions: Partial<Options> = {
	theme: "one-dark-pro",
	onVisitHighlightedLine(node:any) {
		node.properties.className.push("line--highlighted");
	}
};
