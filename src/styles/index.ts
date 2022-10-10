import { createStitches } from '@stitches/react';

export const { config, styled, globalCss, getCssText, createTheme, theme, css } = createStitches({
  theme: {
    colors: {
      gray_100: '#fff',
      gray_200: '#e6f1ff',
      gray_300: '#ccd6f6',
      gray_400: '#8892b0',

      green_100: 'rgba(100,255,218,0.1)',
      green_300: '#64ffda',

      blue_300: '#57cbff',
      blue_600: '#233554',
      blue_700: '#112240',
      blue_800: '#0a192f',
    },

    fonts: {
      mono: 'Roboto Mono',
      sans: 'Inter',
    },
  }
});