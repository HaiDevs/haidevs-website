import {
	Heading,
	useColorModeValue,
	Box,
	Text,
	Img,
	Card
} from "@chakra-ui/react";

import React from "react";

import { IPost } from "interfaces/Posts";
import PostTags from "./PostTags";
import CustomLink from "./common/CustomLink";

export default function Post(post: IPost) {
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			bg="black"
			alignItems={"center"}
			padding={1}
		>
			<Box paddingRight={{ base: 0, sm: 35, md: 50 }}>
				<CustomLink href={`/blog/${post.slug}`}>
					<Img
						objectFit="cover"
						width={{ base: "100%", sm: 350, md: 350 }}
						height={{ base: "auto", md: 180 }}
						src={post.cover_image}
						alt="card-image"
						borderRadius={10}
					/>
				</CustomLink>
			</Box>
			<Box pt={{ base: 0, xs: 5 }} width={{ base: "100%", md: 650 }}>
				<PostTags tags={post.tags} />
				<CustomLink href={`/blog/${post.slug}`}>
					<Heading
						size={{ base: "none", sm: "sm", md: "md", lg: "lg" }}
						color={useColorModeValue("white", "white.800")}
					>
						{post.title}
					</Heading>
				</CustomLink>
				<Text py="5" color={"gray"}>
					{post.date}
				</Text>
			</Box>
		</Card>
	);
}
