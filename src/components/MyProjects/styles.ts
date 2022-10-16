import { styled } from '../../styles';

export const Container = styled('section', {
  marginTop: 200,
  display: 'flex',
  flexDirection: 'column',
  
  '@media (min-width: 1000px)': {
    paddingLeft: 32,
  },

  '& div:nth-child(2)': {
    marginTop: 48,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    '@media (min-width: 700px)': {
      justifyContent: 'flex-start',
    },

    '& img': {
      width: 75,
      height: 75,
      objectFit: 'cover',
      filter: 'brightness(50%)',
      transition: '0.5s ease',
      marginBottom: -5,

      '@media (min-width: 450px)': {
        width: 100,
        height: 100,
      },

      '@media (min-width: 700px)': {
        width: 125,
        height: 125,
      },

      '@media (min-width: 870px)': {
        width: 150,
        height: 150,
      },

      '@media (min-width: 1024px)': {
        width: 175,
        height: 175,
      },

      '@media (min-width: 1200px)': {
        width: 200,
        height: 200,
      },

      '@media (min-width: 1380px)': {
        width: 250,
        height: 250,
      },
            
      '&:hover': {
        filter: 'brightness(100%)',
      }
    }
  },
});
