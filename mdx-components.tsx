import type { MDXComponents } from "mdx/types";
import { Heading, Text } from "@chakra-ui/react";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => (
      <Heading
        fontWeight={"900"}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        as="h1"
        {...props}
      />
    ),
    h2: (props) => (
      <Heading
        fontWeight={"900"}
        fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        lineHeight={"110%"}
        as="h2"
        {...props}
      />
    ),
    p: (props) => (
      <Text fontSize={{ base: "sm", md: "xl" }} {...props} my="50px" />
    ),
    ...components,
  };
}
