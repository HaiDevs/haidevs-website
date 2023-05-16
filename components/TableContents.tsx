import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomLink from "./common/CustomLink";

export default function TableContents() {
  const [headings, setHeadings] = useState<[]>([]);

  useEffect(() => {
    const allHeadings: any = Array.from(document.querySelectorAll("h2")).map(
      (heading) => ({
        text: heading.textContent,
        id: heading.id,
      })
    );

    setHeadings(allHeadings);
  }, []);

  return (
    <Box
      pos="fixed"
      bg="#000"
      zIndex={2}
      right="10px"
      py={10}
      as="nav"
      display={{
        base: "none",
        xl: "none",
        "2xl": "block",
      }}
      px={2}
      borderRadius={5}
    >
      {headings.length > 0 && (
        <>
          <Heading
            fontWeight="300"
            fontSize={"lg"}
            as="h3"
            mb={3}
            textTransform="uppercase"
          >
            On this page
          </Heading>
          <List spacing={2}>
            {headings.map((heading: any) => {
              return (
                <ListItem
                  key={heading.id}
                  fontWeight={"300"}
                  color="gray"
                  fontSize={"md"}
                >
                  <CustomLink href={`#${heading.id}`}>
                    <Link>{heading.text}</Link>
                  </CustomLink>
                </ListItem>
              );
            })}
          </List>
        </>
      )}
    </Box>
  );
}
