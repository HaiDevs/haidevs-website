import React, { FC } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { theme } from "utils/theme";
import type { CardType } from '../../types/CardType';

export const Card: FC<CardType> = ({
  heading,
  description,
  icon,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  borderWidth, }) => {
  return (
    <Box
      maxW={{ base: "full", md: "475px" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      rounded={0}
      borderTopWidth={borderTopWidth}
      borderBottomWidth={borderBottomWidth}
      borderLeftWidth={borderLeftWidth}
      borderRightWidth={borderRightWidth}
      borderWidth={borderWidth}
      borderColor={theme.colors.neutral["100"]}
      bg={theme.colors.neutral["800"]}
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={36}
          h={36}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue(
            theme.colors.neutral["900"],
            theme.colors.neutral["400"]
          )}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="lg" color={theme.colors.neutral["100"]}>
            {heading}
          </Heading>
          <Text mt={1} fontSize={"md"} color={theme.colors.neutral["100"]}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Card