export interface IPost {
	slug: string;
	title: string;
	readingTime: Buffer;
	cover_image: string;
	tags: string[];
	date: string;
	excerpt: string;
}
export interface IPosts {
	[key: string]: IPost[];
}
