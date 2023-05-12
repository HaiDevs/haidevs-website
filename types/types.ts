export interface IPostProps {
	id: number;
	category: string;
	date: string;
	title: string;
	description: string;
	image: string;
}

export interface IPostsProps {
	[key: string | number]: IPostProps[];
}

export interface IBlogCategoryProps {
	category: string;
}

export interface IColumnProps {
	header: string;
	list: string[];
}
