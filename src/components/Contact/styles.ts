import { styled } from '../../styles';

export const Container = styled('section', {
  width: '100%',
  marginTop: 200,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',

  '& span': {
    color: '$green_300',
    fontWeight: 400,
    fontSize: '0.85rem',
  },
  
  '& h3': {
    color: '$gray_300',
    fontSize: '3rem',
    fontFamily: '$sans',
    margin: '12px 0 16px',
  },
  
  '& h4': {
    color: '$gray_400',
    fontSize: '1rem',
    lineHeight: 1.5,
    fontFamily: '$sans',
    width: 600,
    fontWeight: 400,
    marginBottom: 50,
  },
  
  '& footer': {
    marginTop: 240,
    paddingBottom: 32,
    
    '& h5': {
      fontWeight: 400,
      color: '$gray_400',
    }
  }
});