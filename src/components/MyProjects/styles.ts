import { styled } from '../../styles';

export const Container = styled('section', {
  marginTop: 200,
  paddingLeft: 32,
  display: 'flex',
  flexDirection: 'column',

  '& div:nth-child(2)': {
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
  },
});
