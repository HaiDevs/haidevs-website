import { Container, Stack } from "@chakra-ui/react";
import React from "react";

export default function LayoutBlog({ children }: any) {
	return (
		<Stack as={Container} maxW={"4xl"} mb={60}>
			{children}
		</Stack>
	);
}
