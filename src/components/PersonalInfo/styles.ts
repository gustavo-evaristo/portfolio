import { styled } from '../../styles';

export const ContentSocial = styled('section', {
  width: 100,
  padding: '0 20px',
  position: 'fixed',
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',
  
  '& svg, span': {
    cursor: 'pointer',
    color: '$gray_300',
    fontSize: 20,
    transition: '0.3s',
    
    '&:hover': {
      color: '$green_300',
      transform: 'translate(0, -5px)',
    }
  }
});

export const ContentMail = styled(ContentSocial, {
  right: 0,
  left: 'auto',
  
  '& a': {
    'writingMode': 'vertical-rl',
    'textOrientation': 'mixed',
    color: '$gray_300',
    textDecoration: 'none',
    fontSize: '0.80rem',
    fontWeight: 300,
    cursor: 'pointer',
    transition: '0.3s',

    '&:hover': {
      color: '$green_300',
    }
  }
});

export const Divisor = styled('hr', {
  border: '0.5px solid $gray_300',
  height: 80,
});
