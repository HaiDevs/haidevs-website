import "@fontsource/manrope/variable.css"

import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

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
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
