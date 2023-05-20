import {
    Box,
    Flex,
    LinkBox,
    LinkOverlay,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FC } from 'react';
  import { theme } from 'utils/theme';
  import type { SocialMediaCard } from '../../types/SocialMediaCard';
  
  const SocialMediaCard: FC<SocialMediaCard> = ({description, icon, link}) => {
    return (
      <LinkBox
        maxW={{ base: 'full', md: '475px' }}
        w={'full'}
        borderRadius="lg"
        overflow="hidden"
        rounded={0}
        bg={theme.colors.neutral['800']}
        _hover={{
          borderColor: theme.colors.neutral['400'],
          borderWidth: 1
      }}
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue(theme.colors.neutral['900'], theme.colors.neutral['400'])}>
            {icon}
          </Flex>
          <Box mt={2}>
          <LinkOverlay
          isExternal
          href={link}
        >
            <Text mt={1} fontSize={'md'} color={theme.colors.neutral['100']}>
              {description}
            </Text>
            </LinkOverlay>
          </Box>
        </Stack>
      </LinkBox>
    );
  };

  export default SocialMediaCard;