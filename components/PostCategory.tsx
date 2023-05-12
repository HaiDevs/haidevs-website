import React from "react";
import { Tag, Box, Heading } from "@chakra-ui/react";
import { IBlogCategoryProps } from "types/types";

const BlogCategory = (props: IBlogCategoryProps) => {
	const { category } = props;
	return (
		<Heading marginTop={30}>
			<Tag
				size={"md"}
				variant="solid"
				colorScheme={category === "Guides" ? "orange" : "cyan"}
			>
				{category}
			</Tag>
		</Heading>
	);
};

export default BlogCategory;
