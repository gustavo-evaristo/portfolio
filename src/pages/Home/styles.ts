import { styled } from '../../styles';

export const Container = styled('main', {
  width: '100%',
  maxWidth: 1400,
  paddingBottom: 100
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

export const Porjects = styled('section', {
  marginTop: 200,
  paddingLeft: 32,
  display: 'flex',
  flexDirection: 'column',

  '& div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: 20,

    '& h3': {
      color: '$green_300',
      fontWeight: 400,
  
      '& span': {
        fontFamily: '$sans',
        color: '$gray_300',
        fontSize: '1.6rem',
        fontWeight: 600,
      }
    },

    '& hr': {
      width: '22vw',
      border: '0.5px solid $blue_600',
      marginTop: 5,
    }
  },

  '& div:last-child': {
    marginTop: 48,
    display: 'flex',
    flexWrap: 'wrap',

    '& img': {
      width: 250,
      height: 250,
      objectFit: 'cover',
      filter: 'brightness(50%)',
      transition: '0.5s ease',
      marginBottom: -5,
            
      '&:hover': {
        filter: 'brightness(100%)',
      }
    }
  }

});