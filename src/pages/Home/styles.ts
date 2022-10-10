import { styled } from '../../styles';

export const Container = styled('main', {
  width: '100%',
  maxWidth: 1400,
  paddingBottom: 100
});

export const Content = styled('div', {
  margin: '200px auto 0',
  width: '69%',
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

export const Abount = styled('section', {

  marginTop: 320,
  paddingLeft: 32,
  display: 'flex',
  flexDirection: 'column',

  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: 20,

    '& h3': {
      color: '$green_300',
      fontWeight: 400,
  
      '& span': {
        fontFamily: '&sans',
        color: '$gray_300',
        fontSize: '1.5rem',
        fontWeight: 500,
      }
    },

    '& hr': {
      width: '30vw',
      border: '0.5px solid $blue_600',
      marginTop: 5,
    }
  },

});

export const ShadowImage = styled('div', {
  width: 300,
  height: 300,
  position: 'absolute', 
  right: '16vw',
  marginTop: '6vh',
  borderRadius: 6,
  border: '2px solid $green_300',
  zIndex: -1,
  transition: '0.3s',
});

export const AboutDescription = styled('div', {
  marginTop: 32,

  '& p': {
    color: '$gray_400',
    fontFamily: '$sans',
    fontSize: '1rem',
    lineHeight: 1.7,
    textAlign: 'justify',
    paddingRight: 42,
  },

  '& div > img': {
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: 6,
  },

  '& div:hover': {
    [`& ${ShadowImage}`]: {
      transform: 'translate(-5px, -5px)',
    },
  },
  
});