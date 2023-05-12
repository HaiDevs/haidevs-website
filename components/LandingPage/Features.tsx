import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';
import { theme } from 'utils/theme';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement | string;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '475px' }}
      w={'full'}
      borderRadius="lg"
      overflow="hidden"
      rounded={0}
      bg={theme.colors.neutral['800']}
      p={5}>
      <Stack align={'start'} spacing={2} >
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
          <Heading size="lg" color={theme.colors.neutral['100']}>{heading}</Heading>
          <Text mt={1} fontSize={'md'} color={theme.colors.neutral['100']}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const FeaturesSection = () =>{
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={theme.colors.neutral['100']}>
          Valè nou ak Vizyon nou
        </Heading>
        <Text color={theme.colors.green['200']} fontSize={{ base: 'sm', sm: 'lg' }}>
          Nan HaiDevs, nou konsidere tout san distenksyon, san prejije, e san diskiminasyon. Fi kou gason mete konesans yo atè san pyès moun pa santi yo enferyè pa rapò ak yon lòt. Tout moun egal.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12} >
        <Flex flexWrap="wrap" gridGap={0} justify="center">
          <Card
            heading={'Ayiti Avantou'}
            icon={<Text fontSize={48}>🇭🇹</Text>}
            description={
             'Nou fè efò pou nou anplifye travay tout Devlopè ak Kominote Ayisyen yo sou fòm dijital ak fizik. Sitou sa ki baze an Ayiti yo.'
            }
          />
          <Card
            heading={'Pa gen Chèf'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              'Eksepte pou moderatè kominote yo, pa gen dirijan. Manm kominote yo se lidè yo!'
            }
          />
          <Card
            heading={'Nou Grandi Ansanm'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Nou tout gen potansyel, men nou tout pa jwenn menm opotinite. Nou espere ankouraje egalite epi pemet li pi fasil pou Devlopè Ayisyen yo aprann youn de lot atravè evènman kominote nou yo dirije.'
            }
          />
          <Card
            heading={'Totalman Ouvè'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              'Platfòm nou ak zouti nou yo open-source, epi devlopè volontè nou yo ouvè a piblik la. Se manm nou yo ki enfliyanse ak vote sou desizyon nou yo.'
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default FeaturesSection;