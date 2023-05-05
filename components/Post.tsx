import {
	Heading,
	useColorModeValue,
	Box,
	Text,
	Link,
	Img,
	Button,
	Card,
	CardBody,
	CardFooter,
	Stack
} from "@chakra-ui/react";

import React from "react";
import BlogTags from "./PostCategory";
import { IPostProps } from "types/types";

export default function Post(post: IPostProps) {
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			bg="black"
			alignItems={"center"}
			padding={1}
			boxShadow={" 0 3px 10px rgb(0 0 0 / 0.2)"}
		>
			<Box paddingRight={{ base: 0, sm: 35, md: 50 }}>
				<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
					<Img
						objectFit="cover"
						width={{ base: "100%", sm: 350, md: 350 }}
						height={{ base: "auto", md: 180 }}
						src={post.image}
						alt="card-image"
						borderRadius={10}
					/>
				</Link>
			</Box>
			<Box pt={{ base: 0, xs: 5 }} width={{ base: "100%", md: 650 }}>
				<BlogTags category={post.category} />
				<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
					<Heading
						size={{ base: "none", sm: "sm", md: "md", lg: "lg" }}
						color={useColorModeValue("white", "white.800")}
					>
						{post.title}
					</Heading>
					<Text py="5" color={useColorModeValue("gray", "gray.800")}>
						{post.date}
					</Text>
				</Link>
			</Box>
		</Card>
	);
}
