import { Flex, Icon, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

interface SocialMediaBoxProps {
  platformIcon: any
  link: string
  description: string
}

export const SocialMediaBox: React.FC<SocialMediaBoxProps> = ({
  platformIcon,
  link,
  description
}) => {
  return (
    <LinkBox
      w="330px"
      h="330px"
      display="flex"
    >
      <Flex
        border="1px solid #fff"
        direction="column"
        justify="center"
        align="center"
        rounded="2xl"
        p="16px"
      >
        <LinkOverlay
          isExternal
          href={link}
        >
          <Icon
            as={platformIcon}
            w="70px"
            h="70px"
            color="#fff"
          />
        </LinkOverlay>

        <Text my="24px">
          {description}
        </Text>
      </Flex>
    </LinkBox>
  );
}