import { styled } from '@styles/stitches.config'

const Input = styled('input', {
  minWidth: 300,

  padding: '$2 $2',
  marginX: '$1',

  color: '$blackA12',
  backgroundColor: '$whiteA1',
  border: '2px solid',
  borderRadius: '$2',
  borderColor: '$gray5',
  outline: 'transparent solid 2px',

  fontSize: '$2',
  fontWeight: '$medium',

  '&:focus': {
    borderColor: '$blue9'
  },

  variants: {
    size: {
      small: {
        padding: '$1 $2'
      },
      large: {
        padding: '$3 $2'
      }
    }
  }
})

export const FormControl = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$2',

  '& > span': {
    marginBottom: '$1'
  }
})

export default Input
