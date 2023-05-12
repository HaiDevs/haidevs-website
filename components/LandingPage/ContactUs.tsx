import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    LinkBox,
    LinkOverlay,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import { theme } from 'utils/theme';
  import { FaTwitter, FaDiscord } from "react-icons/fa";
  
  interface CardProps {
    description: string;
    icon: ReactElement;
    link: string
  }
  
  const Card = ({description, icon, link }: CardProps) => {
    return (
      <LinkBox
        maxW={{ base: 'full', md: '475px' }}
        w={'full'}
        borderRadius="lg"
        overflow="hidden"
        rounded={0}
        bg={theme.colors.neutral['800']}
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
  
  const ContactSection = () => {
    return (
      <Box p={4} my={85}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={theme.colors.neutral['100']}>
            Rejwenn Nou!
          </Heading>
          <Text color={theme.colors.green['200']} fontSize={{ base: 'sm', sm: 'lg' }}>
            N ap tann ou pou nou rive grandi a on pwen kote nou bezwen kreye plis kominote nan sektè teknoloji a.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12} >
          <Flex flexWrap="wrap" gridGap={0} justify="space-between">
            <Card
               icon={<Icon as={FaTwitter} w={10} h={10} />}
               description={
               'Sou Twitter, nou swiv tout devlopè Ayisyen nou jwenn, nou pwopilse Twit yo, nou fè anons epi nou kreye podcast avèk Twitter Spaces.'
              }
              link="https://twitter.com/HaiDevs"
            />
            <Card
              icon={<Icon as={FaDiscord} w={10} h={10} />}
              description={
                'Sou Discord, nou enteraji sou plizyè sijè teknolojik, nou vote sou desizyon enpotan kominote a, nou kreye epi patisipe nan challenge, ak anpil lot aktivite anko.'
              }
              link="https://discord.gg/tDVzKz45"
            />
          </Flex>
        </Container>
      </Box>
    );
  }
  
  export default ContactSection;