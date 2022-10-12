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
  zIndex: 100,

  
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

  '& ul': {
    display: 'flex',
    gap: '1.75rem',
    
    '& li > a': {
      color: '$gray_300',
      fontSize: '0.75rem',
      transition: '0.2s',

      '&:hover': {
        color: '$green_300',
      },

      '& span': {
        color: '$green_300',
      }
    }
  },
});