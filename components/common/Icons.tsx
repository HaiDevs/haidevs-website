import {
	Stack,
	VisuallyHidden,
	chakra,
	useColorModeValue
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const SocialButton = ({
	children,
	label,
	href
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Icons() {
	return (
		<Stack direction={"row"} spacing={4}>
			<SocialButton label={"Twitter"} href={"#"}>
				<FaTwitter color="gray" fontSize={"1.2em"} />
			</SocialButton>
			<SocialButton label={"YouTube"} href={"#"}>
				<FaYoutube color="gray" fontSize={"1.2em"} />
			</SocialButton>
			<SocialButton label={"Instagram"} href={"#"}>
				<FaInstagram color="gray" fontSize={"1.2em"} />
			</SocialButton>
		</Stack>
	);
}
