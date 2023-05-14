import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import {
	getPostBySlug,
	getSlug,
	rehypePrettyCodeOptions
} from "../../utils/mdxUtils";
import { IPost } from "interfaces/Posts";

import LayoutBlog from "@components/LayoutBlog";
import { Heading, useColorModeValue, Text, VStack } from "@chakra-ui/react";
import Image from "@components/common/Image";
import { useMDXComponents } from "mdx-components";
import remarkToc from "remark-toc";
import { TableOfContents } from "@components/TableContent";
import PostTags from "@components/PostTags";

type PostPageProps = {
	source: MDXRemoteSerializeResult;
	frontMatter: IPost;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
	const gray = useColorModeValue("gray", "gray.800");
	return (
		<>
			<LayoutBlog>
				<VStack height={148} marginTop={50}>
					<PostTags tags={frontMatter.tags} />
					<Heading
						fontWeight={"900"}
						fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
						as="h1"
						textAlign="center"
					>
						{frontMatter.title}
					</Heading>
					<Text color={gray}>
						{dayjs(frontMatter.date).format("MMMM D, YYYY")} &mdash;{" "}
						{frontMatter.readingTime}
					</Text>
				</VStack>
				<TableOfContents />
				<MDXRemote {...source} components={useMDXComponents({ Image })} />
			</LayoutBlog>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const { slug } = params;
	const { content, frontmatter } = await getPostBySlug(slug);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkToc],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "wrap"
					}
				],
				[rehypePrettyCode, rehypePrettyCodeOptions]
			]
		}
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: {
				...frontmatter
			}
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false
	};
};

export default PostPage;
