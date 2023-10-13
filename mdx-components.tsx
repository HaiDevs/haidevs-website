import type { MDXComponents } from "mdx/types";
import { Box, Heading, Text } from "@chakra-ui/react";
import { theme } from "utils/theme";

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
        color={theme.colors.neutral['100']}
        {...props}
      />
    ),
    h2: (props) => (
      <Box>
      <Heading
        fontWeight={"900"}
        fontSize={{ base: "sm", md: "md" }}
        lineHeight={"110%"}
        as="h2"
        mt={100}
        color={theme.colors.neutral['100']}
        {...props}
      />
      </Box>
    ),
    p: (props) => (
      <Box >
      <Text  as={"p"} fontSize={{ base: "sm", md: "md" }} {...props}   color={theme.colors.neutral['200']} mt={5}/>
      </Box>
    ),
    ...components,
  };
}
