import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
      },
      '@keyframes pulse': {
        '0%, 100%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0.85,
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'xl',
      },
      sizes: {
        lg: {
          fontSize: 'md',
          px: 6,
          py: 6,
        },
      },
      variants: {
        solid: {
          bg: 'brand.600',
          color: 'white',
          _hover: {
            bg: 'brand.700',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.800',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.600',
          color: 'brand.600',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
  },
});
