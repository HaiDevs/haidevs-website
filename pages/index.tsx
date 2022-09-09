import { Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  // To prevent the section contents from rendering before the script is loaded
  const [isInit, setIsInit] = useState(false)

  return (
    <>
      <Head>
        <title>Haitian Developers</title>
        <meta name="description" content="HaiDevs - Haitian Developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://unpkg.com/pageable@latest/dist/pageable.min.js"
        onLoad={() =>
          // @ts-ignore - pageable is not a module
          new Pageable("#container", {
            freeScroll: true,
            onInit() {
              setIsInit(true)
            }
          })
        }
      />

      <Flex
        id="container"
      >
        <Flex
          data-anchor="hero"
          align="center"
          justify="center"
          direction="column"
        >
          {isInit && (
            <>
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
            </>
          )}
        </Flex>

        <Flex
          data-anchor="hero-2"
          align="center"
          justify="center"
          direction="column"
        >
          {isInit && (
            <>
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
            </>
          )}
        </Flex>

      </Flex>
    </>
  )
}

export default Home
