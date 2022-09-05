import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  // fonts: {
  //   body: "Manrope, sans-serif",
  //   heading: "Manrope, sans-serif",
  // },
  styles: {
    global: {
      body: {
        bg: "#000",
      },

      // To hide the default focus outline on elements that are keyboard focusable
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
