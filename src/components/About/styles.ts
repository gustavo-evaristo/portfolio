import { styled } from '../../styles';

export const Container = styled('section', {
  marginTop: 320,
  paddingLeft: 32,
  display: 'flex',
  flexDirection: 'column',
});

export const Description = styled('div', {
  marginTop: 32,
  width: '100%',
  display: 'flex',
  flexWrap: 'nowrap',

  '@media (max-width: 1024px)': {
    flexWrap: 'wrap',
    flexDirection: 'column-reverse',

    '& p': {
      marginTop: 24,
    },
  },

  '& p': {
    color: '$gray_400',
    fontFamily: '$sans',
    fontSize: '1rem',
    lineHeight: 1.7,
    paddingRight: 42,
  },

  '& span': {
    color: '$green_300'
  },
  
  '& img': {
    alignSelf: 'flex-start',
    width: 350,
    height: 350,
    objectFit: 'cover',
    borderRadius: 6,
  },

});

export const ContentSkills = styled('ul', {
  width: 400,
  marginTop: 20,
  columns: 2,
  color: '$gray_400',
  fontSize: '0.80rem',
  lineHeight: 2,
  cursor: 'default',
  
  '& li': {
    transition: '0.5s',
  },

  '& li:hover': {
    color: '$green_300'
  },

  '& svg': {
    color: '$green_300',
    fontSize: 6,
    transform: 'rotate(90deg)',
    marginRight: 10,
  }
});