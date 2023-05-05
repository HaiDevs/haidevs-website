import React from "react";
import { Container, Box, Heading, Stack, Flex, VStack } from "@chakra-ui/react";

import data from "@data/data.json";
import Post from "@components/Post";
import Navbar from "@components/common/Navbar/Navbar";
import Footer from "@components/common/Footer/Footer";
import { IPostsProps } from "types/types";

export default function Posts(props: IPostsProps) {
	return (
		<Container maxW="4xl">
			<Navbar />
			<Stack height={148} marginTop={50}>
				<Flex alignItems="center" justifyContent="center">
					<Heading
						fontWeight={"900"}
						fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
						as="h1"
					>
						Blog
					</Heading>
				</Flex>
			</Stack>

			<VStack spacing={20}>
				{props.data.map((post: any, index: any) => (
					<React.Fragment key={index}>
						<Post {...post} />
					</React.Fragment>
				))}
			</VStack>

			<Footer />
		</Container>
	);
}

export async function getServerSideProps() {
	return {
		props: { data }
	};
}
