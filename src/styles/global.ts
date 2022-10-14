import { globalCss } from './index';

export const globalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
  },

  a: {
    textDecoration: 'none',
  },

  ul: {
    listStyle: 'none',
  },

  '*': {
    padding: 0,
    margin: 0,
    fontFamily: '$mono',
    boxSizing: 'border-box',
    scrollbarColor: 'red',
    userSelect: 'none'
  },

  body: {
    backgroundColor: '$blue_800',
    '-webkit-font-smoothing': 'antialiased',
  },

  '::-webkit-scrollbar': {
    width: 6,
    borderRadius: 12
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent'
  },
  
  '::-webkit-scrollbar-thumb': {
    borderRadius: 20,
    background: '$gray_400'
  },

});