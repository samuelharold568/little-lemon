import { extendTheme } from '@chakra-ui/react';
import '@fontsource/rasa/400.css';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const chakraTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        letterSpacing: '1.5px',
      },
      '.leaflet-container': {
        height: '90%',
        width: '90%',
        position: 'absolute',
      },
      '.slide': {
        overflow: 'hidden',
      },
      '.slide-track': {
        animation: 'scroll 40s linear infinite',
      },
      '@keyframes scroll': {
        '0%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(calc(-250px * 4))',
        },
      },
    },
  },
  fonts: {
    heading: 'rasa',
  },
  breakpoints,
});

export default chakraTheme;
