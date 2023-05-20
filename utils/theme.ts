import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '61.25em',
    xl: '80em',
    '2xl': '96em',
  },
  fonts: {
    heading: 'GT Walsheim, sans-serif',
    body: 'GT Walsheim, sans-serif',
  },
  textStyles: {
    paragraph: {
      lineHeight: '1.4',
      letterSpacing: '0.1px',
      color: 'rgba(36, 38, 41, 1)',
    },
  },
  styles: {
    global: {
      'html, body': {
        // minWidth: 980,
        // minHeight: 768,
        backgroundColor: '#000000',
      },
    },
  },
  colors: {
    notification: {
      error: 'coral.700',
      errorHover: '#8E1D0D',
    },
    dashboard: {
      badge: '#DF0000',
    },
    blue: {
      800: '#000A11',
      700: '#002744',
      600: '#004477',
      500: '#0061AA',
      400: '#007EDD',
      300: '#1199FF',
      200: '#44AFFF',
      100: '#77C5FF',
    },
    orange: {
      800: '#763000',
      700: '#A84400',
      600: '#D85700',
      500: '#FF6700',
      400: '#FF8B37',
      300: '#FFA669',
      200: '#FFCDAB',
    },
    neutral: {
      900: '#000000',
      800: '#171717',
      700: '#2E2E2E',
      600: '#454545',
      400: '#5C5C5C',
      300: '#737373',
      200: '#8A8A8A',
      100: '#FFFFFF',
    },
    coral: {
      800: '#8C2314',
      700: '#B82E1B',
      600: '#E03D26',
      500: '#E66553',
      400: '#EC8D80',
      300: '#F3B5AC',
      200: '#F9DDD9',
    },
    green: {
      800: '#20544A',
      700: '#2E796A',
      600: '#3C9E8A',
      500: '#50BDA7',
      400: '#75CBBA',
      300: '#9AD9CC',
      200: '#BFE7DF',
      100: "#44B78B",
    },
    chestnut: {
      1000: '#AD7B33',
      800: '#AD7B33',
      700: '#CA9549',
      600: '#D5AC71',
      500: '#E1C398',
      400: '#ECDABF',
      300: '#FFFAF3',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        color: 'neutral.100',
      },
      variants: {
        solid: {
          bg: 'blue.500',
          _hover: {
            bg: 'blue.600',
          },
          _disabled: {
            bg: 'neutral.100',
            color: 'neutral.700',
            border: 2,
            borderStyle: 'solid',
            borderColor: 'neutral.400',
            _hover: {
              bg: 'neultral.300',
            },
          },
        },
        outline: {
          border: 2,
          borderColor: 'blue.500',
          borderStyle: 'solid',
          textColor: 'blue.500',
        },
        link: {
          color: 'blue.400',
        },
        ghost: {
          bg: 'neutral.100',
          color: 'neutral.700',
          border: 2,
          borderStyle: 'solid',
          borderColor: 'neutral.400',
          _hover: {
            bg: 'neultral.300',
          },
        },
        text: {
          fontWeight: 'normal',
          color: 'blue.500',
          bg: 'transparent',
        },
      },
    },
  },
});
