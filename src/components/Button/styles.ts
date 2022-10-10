import {styled} from '../../styles';

export const Container = styled('button', {
  padding: '12px 18px',
  backgroundColor: 'transparent',
  border: '1.2px solid $green_300',
  borderRadius: 6,
  color: '$green_300',
  fontSize: '0.8rem',
  transition: '0.2s',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$green_100'
  }
});
