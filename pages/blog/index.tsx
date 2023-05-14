import React from "react";
import { GetStaticProps } from "next";
import { Heading, Stack, VStack, Center } from "@chakra-ui/react";
import Post from "@components/Post";
import { getAllPosts } from "utils/mdxUtils";
import { IPost, IPosts } from "interfaces/Posts";
import LayoutBlog from "@components/LayoutBlog";

export default function Posts({ posts }: IPosts) {
	return (
		<LayoutBlog>
			<Center>
				<Stack height={148} marginTop={50}>
					<Heading
						fontWeight={"900"}
						fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
						as="h1"
					>
						Blog
					</Heading>
				</Stack>
			</Center>

			<VStack spacing={20}>
				{posts.map((post: IPost) => (
					<React.Fragment key={post.title}>
						<Post {...post} />
					</React.Fragment>
				))}
			</VStack>
		</LayoutBlog>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllPosts();

	posts
		.map((post) => post.data)
		.sort((a, b) => {
			if (a.data.date > b.data.date) return 1;
			if (a.data.date < b.data.date) return -1;

			return 0;
		});

	return {
		props: {
			posts: posts.reverse()
		}
	};
};

