import { styled } from '../../styles';

export const Container = styled('section', {
  width: '100%',
  alignSelf: 'center',
  textAlign: 'center',
  marginTop: 200,

  '& h3': {
    color: '$gray_300',
    fontSize: '1.7rem',
    fontFamily: '$sans',
    marginBottom: 12,
  },
  
  '& span': {
    color: '$green_300',
    fontSize: '0.8rem',
  }

});

export const ContentCard = styled('div', {
  margin: '40px 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 12,
});

export const CardStyled = styled('a', {
  width: '30%',
  height: 300,
  backgroundColor: '$blue_700',
  padding: '40px 30px',
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  cursor: 'pointer',

  '& div:first-child': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginBottom: 8,
    
    '& svg:first-child': {
      fontSize: 38,
      color: '$green_300',
    },
    
    '& svg:last-child': {
      fontSize: 20,
      color: '$gray_300',
      cursor: 'pointer',
      
      '&:hover': {
        color: '$green_300',
      }
    },
  },

  '& h4': {
    color: '$gray_300',
    fontSize: '1.1rem',
    fontFamily: '$sans',
    textAlign: 'left',
    marginBottom: 10,
    transition: '0.3s',
  },
  
  '& h5': {
    color: '$gray_400',
    fontSize: '0.9rem',
    fontFamily: '$sans',
    textAlign: 'left',
    fontWeight: 500,
    lineHeight: 1.5
  },
  
  '& ul': {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    alignSelf: 'flex-start',
    alignItems: 'flex-end'
  },
  
  '& ul li': {
    color: '$gray_400',
    fontSize: '0.75rem',
    fontFamily: '$sans',
    marginRight: 8,
  },


  '&:hover': {
    '& h4': {
      color: '$green_300'
    }
  }
});