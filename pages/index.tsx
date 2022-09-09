/* eslint-disable react/no-unescaped-entities */
import { Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
import { PageSection } from '../components/PageSection'

const Home: NextPage = () => {
  // To prevent the section contents from rendering before the script is loaded
  const [isInit, setIsInit] = useState(false)

  return (
    <>
      <Head>
        <title>HaiDevs - Haitian Developers</title>
        <meta name="description" content="Pi gwo kominote dijital Devlopè Ayisyen nan mond lan." />
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
        <PageSection
          id="intro"
          isInit={isInit}
        >
          <Heading fontSize="32px">
            🇭🇹 HaiDevs
          </Heading>

          <Heading
            fontSize="52px"
            w="50%"
            textAlign="center"
            mt="15px"
          >
            Pi gwo kominote dijital<br />Devlopè Ayisyen<br />nan mond lan.
          </Heading>
        </PageSection>

        <PageSection
          id="values"
          isInit={isInit}
        >
          <Heading fontSize="32px">
            Valè nou ak Vizyon nou
          </Heading>

          <Flex
            mt="50px"
            textAlign="center"
            columnGap="120px"
          >
            <Flex
              direction="column"
              w="350px"
              align="center"
              justify="center"
            >
              <Heading>
                Ayiti Avantou
              </Heading>

              <Text mt="15px">
                Nou fè efò pou nou anplifye travay tout Devlopè ak Kominote Ayisyen yo sou fòm dijital ak fizik. Sitou sa ki baze an Ayiti yo.
              </Text>
            </Flex>

            <Flex
              direction="column"
              w="350px"
              align="center"
              justify="center"
            >
              <Heading>
                Pa gen Chèf
              </Heading>

              <Text mt="15px">
                Eksepte pou moderatè kominote yo, pa gen dirijan. Manm kominote yo se lidè yo!
              </Text>
            </Flex>
          </Flex>

          <Flex
            mt="100px"
            textAlign="center"
            columnGap="120px"
          >
            <Flex
              direction="column"
              w="350px"
              align="center"
              justify="center"
            >
              <Heading>
                Nou Grandi Ansanm
              </Heading>

              <Text mt="15px">
                Nou tout gen potansyel, men nou tout pa jwenn menm opotinite. Nou espere ankouraje egalite epi pemet li pi fasil pou Devlopè Ayisyen yo aprann youn de lot atravè evènman kominote nou yo dirije.
              </Text>
            </Flex>

            <Flex
              direction="column"
              w="350px"
              align="center"
              justify="center"
            >
              <Heading>
                Totalman Ouvè
              </Heading>

              <Text mt="15px">
                Platfòm nou ak zouti nou yo open-source, epi devlopè volontè nou yo ouvè a piblik la. Se manm nou yo ki enfliyanse ak vote sou desizyon nou yo.              </Text>
            </Flex>
          </Flex>
        </PageSection>

      </Flex>
    </>
  )
}

export default Home
