import { Box, Container, Stack, SimpleGrid, Text } from "@chakra-ui/react";
import Icons from "./Icons";
import Column from "./Column";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<Box pt={80}>
			<Container as={Stack} maxW={"4xl"} py={10}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={100}>
					<Column header="Solutions" list={["About Us", "Blog"]} />
					<Column header="Company" list={["About Us", "Blog"]} />
					<Column header="Support" list={["About Us", "Blog"]} />
					<Column header="Legal" list={["About Us", "Blog"]} />
				</SimpleGrid>
			</Container>

			<Container
				as={Stack}
				maxW={"4xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={8}
				justify={{ md: "space-between" }}
				align={{ md: "center" }}
			>
				<Text>© {year} Haitian Developers</Text>
				<Icons />
			</Container>
		</Box>
	);
}
