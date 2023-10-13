import { Box, Img } from "@chakra-ui/react";
import React from "react";

export default function Image(props: { image: string }) {
	return (
		<Box mt={100}>
			<Img
				objectFit="cover"
				w="100%"
				height={{ base: "auto", md: 500 }}
				src={props.image}
				alt="post-image"
				borderRadius={10}
			/>
		</Box>
	);
}
