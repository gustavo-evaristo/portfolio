import { styled } from '../../styles';

export const Container = styled('section', {
  marginTop: 200,
  paddingLeft:  140,
  flexDirection: 'column',

  '& div:first-child': {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    marginBottom: 40,

    '& h3': {
      color: '$green_300',
      fontWeight: 400,
      
      '& span': {
        fontFamily: '$sans',
        color: '$gray_300',
        fontSize: '1.7rem',
        fontWeight: 700,
      }
    },

    '& hr': {
      width: '22vw',
      border: '0.5px solid $blue_600',
      marginTop: 5,
    },
  },

  '& div:nth-child(2)': {
    display: 'flex',
    
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 28,
      width: '70%',

      '& h3': {
        color: '$gray_300',
        fontSize: '1.2rem',
        fontFamily: '$sans',
        transition: '0.3s',
        fontWeight: 500,
        
        '& span': {
          color: '$green_300',
          fontSize: '1.2rem',
          fontFamily: '$sans',
        }
      },
      
      '& span': {
        color: '$gray_400',
        fontSize: '0.8rem',
        marginTop: 8,
        marginBottom: 24,
      },
      
      '& ul > li' : {
        color: '$gray_400',
        fontSize: '0.9rem',
        marginBottom: 12,
        lineHeight: 1.5,
      },

      '& svg': {
        fontSize: 10,
        color: '$green_300',
        transform: 'rotate(90deg)',
        marginRight: 8,
      }
    }
  },

});

export const WorkList = styled('li', {
  color: '$gray_400',
  fontSize: '0.85rem',
  lineHeight: 3,
  padding: '0 20px',
  transition: '0.5s',
  cursor: 'pointer',
  borderLeft: '2px solid $blue_600',

  variants: {
    border: {
      active: {
        borderColor: '$green_300',
        color: '$green_300'
      },

      notActive: {},
    }
  },

  '&:hover': {
    color: '$green_300',
    backgroundColor: '$blue_700'
  }

});