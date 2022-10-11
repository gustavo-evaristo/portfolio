import { styled } from '../../styles';

export const Container = styled('section', {
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