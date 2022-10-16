import { styled } from '../../styles';

export const Container = styled('main', {
  width: '100%',
  maxWidth: 1400,
});

export const Content = styled('div', {
  margin: '200px auto 0',
  width: '75%',
});

export const Heading = styled('section', {
  '& h3': {
    color: '$green_300',
    fontWeight: 400,
    fontSize: '1rem',
  },

  '& h1': {
    color: '$gray_300',
    fontSize: '2rem',
    fontFamily: '$sans',
    margin: '14px 0 10px 0',
    
    '@media (min-width: 700px)': {
      fontSize: '3.5rem',
    },

    '@media (min-width: 950px)': {
      fontSize: '4.1rem',
    }
  },
  
  '& h2': {
    color: '$gray_400',
    fontSize: '1.6rem',
    fontFamily: '$sans',

    '@media (min-width: 700px)': {
      fontSize: '3rem',
    },

    '@media (min-width: 950px)': {
      fontSize: '4rem',
    }
  },
  
  '& h4': {
    maxWidth: 650,
    color: '$gray_400',
    fontSize: '0.85rem',
    fontWeight: 400,
    fontFamily: '$sans',
    lineHeight: 1.7,
    margin: '18px 0 40px',
    textAlign: 'justify',
    
    '@media (min-width: 700px)': {
      fontSize: '1rem',
      textAlign: 'left',
    },

    '& span': {
      fontFamily: '$sans'
    }
  },

  '& button': {
    padding: '16px 20px',

    '@media (min-width: 700px)': {
      padding: '20px 32px',
    },
  }
});