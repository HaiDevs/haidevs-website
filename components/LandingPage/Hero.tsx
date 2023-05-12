import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { theme } from 'utils/theme';

const HeroSection = () => {
  const paragraph = (text: string, color: any, fontSize?: number) => (
    <Text as={'span'} color={color} fontSize={fontSize}>
      {text}
    </Text>
  )
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Box width={'full'}>
              {paragraph('🇭🇹 HaiDevs', theme.colors.neutral['100'])}
            </Box>

            {paragraph('Pi gwo kominote dijital', theme.colors.green['200'])}
            {paragraph(' nan mond lan.', theme.colors.green['200'])}
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={theme.colors.coral['200']}
              bg={theme.colors.green['100']}
              rounded={12}
              px={12}
              h={50}
              fontFamily={theme.fonts.heading}
              _hover={{
                bg: theme.colors.green['400'],
              }}>
              Ann Komanse
            </Button>
            {paragraph('Komanse pibliye gratis', theme.colors.neutral['100'], 18)}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default HeroSection;
