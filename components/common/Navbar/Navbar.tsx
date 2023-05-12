import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { MdElectricBolt } from "react-icons/md";
import Icons, { SocialButton } from "../Icons";

export default function Navbar() {
	return (
		<Box px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<HStack spacing={8} alignItems={"center"}>
					<SocialButton label="Home" href={"#"}>
						<MdElectricBolt color="gray" fontSize={"1.4em"} />
					</SocialButton>
				</HStack>
				<Icons />
			</Flex>
		</Box>
	);
}
