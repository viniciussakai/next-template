import { styled } from '@styles/stitches.config'
import { blue } from '@radix-ui/colors'

export const Button = styled('button', {
  all: 'unset',

  padding: '$2 $4',
  margin: '$1',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$2',
  cursor: 'pointer',

  fontSize: '$3',
  fontWeight: '$medium',

  variants: {
    color: {
      primary: {
        backgroundColor: '$blue9',
        color: '$gray1',
        '&:hover': { backgroundColor: '$blue10' },
        '&:focus': { boxShadow: `0 0 0 2px ${blue.blue5}` }
      }
    },
    outline: {
      true: {
        backgroundColor: 'transparent'
      }
    }
  },

  compoundVariants: [
    {
      color: 'primary',
      outline: true,
      css: {
        backgroundColor: '$blue1',
        outline: '2px solid',
        outlineColor: '$blue7',
        color: '$blue11',

        '&:hover': {
          backgroundColor: '$blue1'
        }
      }
    }
  ]

})
