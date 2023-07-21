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

import LayoutBlog from "@components/Layouts/LayoutBlog";
import { Heading, useColorModeValue, Text, VStack, Container } from "@chakra-ui/react";
import Image from "@components/common/Image";
import { useMDXComponents } from "mdx-components";
import remarkToc from "remark-toc";
import PostTags from "@components/blog/PostTags";
import TableContents from "@components/blog/TableContents";
import Head from "next/head";
import { theme } from "utils/theme";

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: IPost;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const gray = useColorModeValue("gray", "gray.800");
  return (
    <LayoutBlog>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>

      <VStack  marginTop={50}>
        <PostTags tags={frontMatter.tags} />
        <Heading
          fontWeight={"900"}
					fontSize={{ base: '1xl', sm: '4xl', md: '6xl' }}
          lineHeight={"110%"}
          as="h1"
					color={theme.colors.neutral['100']}
          textAlign="center"
        >
          {frontMatter.title}
        </Heading>
        <Text color={gray} as={"p"} fontSize={{ base: "sm", md: "md" }}>
          {dayjs(frontMatter.date).format("MMMM D, YYYY")} &mdash;{" "}
          {frontMatter.readingTime}
        </Text>
      </VStack>
      <TableContents />
      <MDXRemote {...source} components={useMDXComponents({ Image })} />
    </LayoutBlog>
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
