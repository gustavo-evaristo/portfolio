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
  '& span': {
    color: '$green_300',
    fontWeight: 400,
    fontSize: '1rem',
  },

  '& h1': {
    color: '$gray_300',
    fontSize: '4.1rem',
    fontFamily: '$sans',
    margin: '14px 0 10px 0',
  },
  
  '& h2': {
    color: '$gray_400',
    fontSize: '4.1rem',
    fontFamily: '$sans',
  },
  
  '& h4': {
    maxWidth: 650,
    color: '$gray_400',
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: '$sans',
    lineHeight: 1.7,
    margin: '18px 0 40px',

    '& span': {
      fontFamily: '$sans'
    }
  },

  '& button': {
    padding: '20px 32px',
  }
});