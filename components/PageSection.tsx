import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface PageSectionProps {
  id: string
  isInit: boolean
  children: React.ReactNode
}

export const PageSection: FC<PageSectionProps> = ({
  id,
  isInit,
  children,
}) => {
  return (
    <Flex
      data-anchor={id}
      align="center"
      justify="center"
      direction="column"
    >
      {isInit && children}
    </Flex>
  )
}