import "@fontsource/manrope/variable.css"

import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { DefaultSeo } from "next-seo"
import { SEO } from "../next-seo.config";
import { useRouter } from "next/router"

export const theme = extendTheme({
  fonts: {
    body: "ManropeVariable, sans-serif",
    heading: "ManropeVariable, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#000",
        color: '#fff',
      },

      // We'll credit fullPage.js via the Readme
      // This is an open-source project
      '.fp-watermark': {
        display: 'none'
      },

      // To hide the default focus outline on elements that are keyboard focusable
      // We'll figure out a better way to support accessibility
      '*:focus': {
        shadow: 'none !important',
      },
    }
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const {route} = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO}
        title="&copy;"
        titleTemplate="%s | Haitian Developer "
        canonical={`https://haidevs.alawonn.com${route}`}
        additionalMetaTags={[
          {
              name: "description",
              content: "HaiDevs - Haitian Developers", 
          },
          {
              name: "google",
              content: "notranslate", // To avoid google suggesting translation
          },
        ]}
        additionalLinkTags={[
          {
              rel: "shortcut icon",
              href: "/favicon.ico?v1",
              type: "image/x-icon",
          },
        ]}
        languageAlternates={[  // Option in between <head></head> tags
          {
              hrefLang: "en-US",
              href: "https://haidevs.alawonn.com/en-US",
          },
          {
              hrefLang: "ht",
              href: "https://haidevs.alawonn.com/ht",
          },
          {
              hrefLang: "es",
              href: "https://haidevs.alawonn.com/es",
          },
      ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
