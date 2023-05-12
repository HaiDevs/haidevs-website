import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaInstagram, } from 'react-icons/fa';
import { theme } from 'utils/theme';



const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue(theme.colors.neutral['600'], theme.colors.neutral['700'])}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue(theme.colors.green['600'], theme.colors.green['700']),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
     borderTopWidth={1}
     borderTopColor={theme.colors.neutral['100']}
      bg={useColorModeValue(theme.colors.neutral['900'], theme.colors.neutral['800'])}
      color={useColorModeValue(theme.colors.neutral['100'], theme.colors.neutral['200'])}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Konpayi</ListHeader>
            <Link href={'#'}>Kiyès Nou Ye</Link>
            <Link href={'#'}>Blòg</Link>
            <Link href={'#'}>Karyè</Link>
            <Link href={'#'}>Kontake Nou</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Sipò</ListHeader>
            <Link href={'#'}>Jwenn èd</Link>
            <Link href={'#'}>Prensip Kominote a</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Nou Legal</ListHeader>
            <Link href={'#'}>Politik Sekirite Nou</Link>
            <Link href={'#'}>Politik Sou Kesyon Prive Nou</Link>
            <Link href={'#'}>Kondisyon Ak Sevis</Link>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue(theme.colors.neutral['100'], theme.colors.neutral['100'])}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 HaiDevs. Nou menm sèlman ki gen dwa sou sit sa</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/HaiDevs'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://discord.gg/tDVzKz45'}>
              <FaDiscord />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;