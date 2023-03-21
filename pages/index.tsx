import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { SocialMediaBox } from "@components/SocialMediaBox";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

type DrippinDownProps = {
  goDown: Function
}
// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const DrippinDown = ({ goDown }: DrippinDownProps) => {
  return (
    <Box onClick={goDown} sx={{
      'div': {
        position: 'absolute',
        bottom: '100px',
        left: '50%',
      },
      "& .chevron": {
        position: 'absolute',
        width: '28px',
        height: '8px',
        opacity: '0',
        transform: 'scale3d(0.5, 0.5, 0.5)',
        animation: 'move 3s ease-out infinite',
        '&:first-of-type': {
          animation: 'move 3s ease-out 1s infinite'
        },
        ':nth-of-type(2)': {
          animation: 'move 3s ease-out 2s infinite'
        },
        '&:before, &: after': {
          content: '""',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '51%',
          background: '#fff',
        },
        '&:before': {
          left: 0,
          transform: 'skew(0deg, 30deg)'
        },
        '&:after': {
          right: 0,
          width: '50%',
          transform: 'skew(0deg, -30deg)'
        }

      },
      "@keyframes move": {
        "25%": {
          opacity: 1,
        },
        "33%": {
          opacity: 1,
          transform: 'translateY(30px)',
        },
        "67%": {
          opacity: 1,
          transform: 'translateY(40px)',
        },
        "100%": {
          opacity: 0,
          transform: 'translateY(55px) scale3d(0.5, 0.5, 0.5)',
        }
      }
    }}><>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </>
    </Box >
  )
}

const Home = () => {
  const Menu = () => (
    null
  );

  return (
    <div className="App">
      <NextSeo title="Home" />
      <Menu />

      <ReactFullpage
        credits={{ enabled: false }}
        navigation
        style={{
          position: 'relative'
        }}
        licenseKey="gplv3-license"
        pluginWrapper={pluginWrapper}
        render={(state, fullpageApi) => (
          <ReactFullpage.Wrapper>
            <Flex
              className="section fp-noscroll"
              align="center"
              justify="center"
              textAlign="center"
              overflow="hidden"
            >
              <Heading fontSize="32px">🇭🇹 HaiDevs</Heading>

              <Heading fontSize="52px" mt="15px">
                Pi gwo kominote dijital
                <br />
                Devlopè Ayisyen
                <br />
                nan mond lan.
              </Heading>

              <DrippinDown goDown={fullpageApi && fullpageApi.moveSectionDown()} />
            </Flex>

            <Flex
              className="section fp-noscroll"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Heading fontSize="32px">Valè nou ak Vizyon nou</Heading>

              <Flex mt="50px" textAlign="center" columnGap="120px">
                <Flex
                  direction="column"
                  w="350px"
                  align="center"
                  justify="center"
                >
                  <Heading>Ayiti Avantou</Heading>

                  <Text mt="15px">
                    Nou fè efò pou nou anplifye travay tout Devlopè ak Kominote
                    Ayisyen yo sou fòm dijital ak fizik. Sitou sa ki baze an
                    Ayiti yo.
                  </Text>
                </Flex>

                <Flex
                  direction="column"
                  w="350px"
                  align="center"
                  justify="center"
                >
                  <Heading>Pa gen Chèf</Heading>

                  <Text mt="15px">
                    Eksepte pou moderatè kominote yo, pa gen dirijan. Manm
                    kominote yo se lidè yo!
                  </Text>
                </Flex>
              </Flex>

              <Flex mt="100px" textAlign="center" columnGap="120px">
                <Flex
                  direction="column"
                  w="350px"
                  align="center"
                  justify="center"
                >
                  <Heading>Nou Grandi Ansanm</Heading>

                  <Text mt="15px">
                    Nou tout gen potansyel, men nou tout pa jwenn menm
                    opotinite. Nou espere ankouraje egalite epi pemet li pi
                    fasil pou Devlopè Ayisyen yo aprann youn de lot atravè
                    evènman kominote nou yo dirije.
                  </Text>
                </Flex>

                <Flex
                  direction="column"
                  w="350px"
                  align="center"
                  justify="center"
                >
                  <Heading>Totalman Ouvè</Heading>

                  <Text mt="15px">
                    Platfòm nou ak zouti nou yo open-source, epi devlopè volontè
                    nou yo ouvè a piblik la. Se manm nou yo ki enfliyanse ak
                    vote sou desizyon nou yo.{" "}
                  </Text>
                </Flex>
              </Flex>

              <DrippinDown goDown={fullpageApi && fullpageApi.moveSectionDown()} />
            </Flex>

            <Flex
              className="section fp-noscroll"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Heading fontSize="32px">Rejwenn Nou!</Heading>

              <Text mt="15px">
                N ap tann ou pou nou rive grandi a on pwen kote nou bezwen kreye
                plis kominote nan sektè teknoloji a
              </Text>

              <Flex
                mt="50px"
                textAlign="center"
                columnGap="120px"
                align="center"
                justify="center"
                px="30px"
              >
                <SocialMediaBox
                  platformIcon={FaTwitter}
                  description="Sou Twitter, nou swiv tout devlopè Ayisyen nou jwenn, nou pwopilse Twit yo, nou fè anons epi nou kreye podcast avèk Twitter Spaces."
                  link="https://twitter.com/HaiDevs"
                />

                <SocialMediaBox
                  platformIcon={FaDiscord}
                  description="Sou Discord, nou enteraji sou plizyè sijè teknolojik, nou vote sou desizyon enpotan kominote a, nou kreye epi patisipe nan challenge, ak anpil lot aktivite anko."
                  link="https://discord.gg/tDVzKz45"
                />
              </Flex>
            </Flex>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Home;
