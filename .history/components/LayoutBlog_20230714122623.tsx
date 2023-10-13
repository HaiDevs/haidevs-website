import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";

export default function LayoutBlog({ children }: any) {
	return (
		<Container maxW="4xl">
			<Navbar />
			{children}
			<Footer />
		</Container>
	);
}
