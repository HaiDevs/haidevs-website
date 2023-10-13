import React from "react";
import NextLink from "next/link";
import { ReactNode } from "@mdx-js/react/lib";
import { Link } from "@chakra-ui/react";

interface ILink {
	href: string;
	children: ReactNode;
}

export default function CustomLink({ href, children }: ILink) {
	return (
		<NextLink href={href} passHref>
			<Link>{children} </Link>
		</NextLink>
	);
}
