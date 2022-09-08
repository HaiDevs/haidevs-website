import { Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Haitian Developers</title>
        <meta name="description" content="HaiDevs - Haitian Developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        align="center"
        justify="center"
        direction="column"
        mt="50px"
      >
        <Heading fontSize="24px">
          🇭🇹 HaiDevs
        </Heading>

        <Heading
          fontWeight="700"
          fontSize="48px"
          w="50%"
          textAlign="center"
          mt="15px"
        >
          Pi gwo kominote dijital<br />Devlopè Ayisyen<br />nan mond lan.
        </Heading>
      </Flex>
    </>
  )
}

export default Home
