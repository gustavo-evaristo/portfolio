import { styled } from '../../styles'; 

export const Container = styled('header', {
  width: '100%',
  margin: '0 auto',
  padding: '10px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  top: '0',
  position: 'fixed',
  backgroundColor: '$blue_800',
  transition: '0.8s',

  
  variants: {
    shadow: {
      withShadow: {
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
      },

      withoutShadown: {
        boxShadow: 'none',
      }

    },

    display: {
      show: {
        top: 0,
      },

      hidden: {
        top: '-150px',
      }
    }
  },

  '& img': {
    width: 72,
    height: 72,
  },

});

export const Content = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  cursor: 'pointer',


  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },

  '@-moz-keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },

  '@-webkit-keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },

  '@-o-keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },

  '@-ms-keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },

  '& ul': {
    display: 'flex',
    gap: '1.75rem',
    listStyle : 'none',

    '$bp2': {
      display: 'none',
    },
    
    '& li': {
      color: '$gray_300',
      fontSize: '0.75rem',
      transition: '0.2s',
      animation: 'fadeIn 5s',
      '-webkit-animation': 'fadeIn 5s',
      '-moz-animation': 'fadeIn 5s',
      '-o-animation': 'fadeIn 5s',
      '-ms-animation': 'fadeIn 5s',

      '&:hover': {
        color: '$green_300',
      },

      '& span': {
        color: '$green_300',
      }
    }
  },
});