import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  '& h3': {
    color: '$green_300',
    fontWeight: 400,

    '& span': {
      fontFamily: '$sans',
      color: '$gray_300',
      fontWeight: 600,
      fontSize: '1.2rem',
      
      '@media (min-width: 450px)': {
        fontSize: '1.6rem',
      },
    }
  },

  '& hr': {
    width: '22vw',
    border: '0.5px solid $blue_600',
    marginTop: 5,
  }
});