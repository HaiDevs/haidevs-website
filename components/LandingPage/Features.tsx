import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { theme } from 'utils/theme';
import FlatCompanyImg from '../../images/flat-company.png'
import GrowTogetherImg from '../../images/grow-together.png'
import TransparencyImg from '../../images/transparency.png'
import Card from './Card';
import Portrait from './Portrait';
import { FC } from 'react';

const FeaturesSection: FC = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={theme.colors.neutral['100']}>
          Valè nou ak Vizyon nou
        </Heading>
        <Text color={theme.colors.neutral['100']} fontSize={{ base: 'sm', sm: 'lg' }}>
          Nan HaiDevs, nou konsidere tout san distenksyon, san prejije, e san diskiminasyon. Fi kou gason mete konesans yo atè san pyès moun pa santi yo enferyè pa rapò ak yon lòt. Tout moun egal.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={0} justify="center">
          <Card
            heading={'Ayiti Avantou'}
            icon={<Text fontSize={88}>🇭🇹</Text>}
            description={
              'Nou fè efò pou nou anplifye travay tout Devlopè ak Kominote Ayisyen yo sou fòm dijital ak fizik. Sitou sa ki baze an Ayiti yo.'
            }
          />
          <Card
            heading={'Pa gen Chèf'}
            icon={<Portrait width="200" height="200" objectFit='cover' src={FlatCompanyImg} alt='Flat Company' />
            }
            description={
              'Eksepte pou moderatè kominote yo, pa gen dirijan. Manm kominote yo se lidè yo!'
            }
          />
          <Card
            heading={'Nou Grandi Ansanm'}
            icon={<Portrait width="100" height="100" objectFit='cover' src={GrowTogetherImg} alt='Grow Together' />}
            description={
              'Nou tout gen potansyel, men nou tout pa jwenn menm opotinite. Nou espere ankouraje egalite epi pèmèt li pi fasil pou Devlopè Ayisyen yo aprann youn de lot atravè evènman kominote nou yo dirije.'
            }
          />
          <Card
            heading={'Totalman Ouvè'}
            icon={<Portrait width="200" height="200" objectFit='cover' src={TransparencyImg} alt='Transparency' />}
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
