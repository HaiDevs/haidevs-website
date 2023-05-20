import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { FC } from 'react';
  import { theme } from 'utils/theme';
  import { FaTwitter, FaDiscord } from "react-icons/fa";
  import SocialMediaCard from './SocialMediaCard';

  const ContactSection: FC = () => {
    return (
      <Box p={4} my={85}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={theme.colors.neutral['100']}>
            Rejwenn Nou!
          </Heading>
          <Text color={theme.colors.neutral['100']} fontSize={{ base: 'sm', sm: 'lg' }}>
            N ap tann ou pou nou rive grandi a on pwen kote nou bezwen kreye plis kominote nan sektè teknoloji a.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12} >
          <Flex flexWrap="wrap" gridGap={0} justify="space-between">
            <SocialMediaCard
               icon={<Icon as={FaTwitter} w={10} h={10} />}
               description={
               'Sou Twitter, nou swiv tout devlopè Ayisyen nou jwenn, nou pwopilse Twit yo, nou fè anons epi nou kreye podcast avèk Twitter Spaces.'
              }
              link="https://twitter.com/HaiDevs"
            />
            <SocialMediaCard
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