import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { theme } from 'utils/theme';

const HeroSection: FC = () => {
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

            {paragraph('Pi gwo kominote dijital', theme.colors.neutral['100'])}
            {paragraph(' devlopè Ayisyen', theme.colors.neutral['100'])}
            {paragraph(' nan mond lan.', theme.colors.neutral['100'])}
          </Heading>
        </Stack>
      </Container>
    </>
  );
}

export default HeroSection;
