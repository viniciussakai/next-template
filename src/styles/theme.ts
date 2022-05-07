import {
  gray,
  blue,
  red,
  whiteA,
  green,
  blackA
} from '@radix-ui/colors'

const theme = {
  colors: {
    ...whiteA,
    ...blackA,
    ...gray,
    ...blue,
    ...red,
    ...green
  },
  fonts: {
    default: 'Roboto, sans-serif'
  },
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '20px',
    5: '24px',
    6: '32px',
    7: '40px'
  },
  space: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px'
  },
  sizes: {
    1: '4px',
    2: '8px',
    3: '16px',
    4: '32px',
    5: '64px',
    6: '128px'
  },
  radii: {
    1: '2px',
    2: '4px',
    3: '8px',
    round: '9999px'
  },
  fontWeights: {
    medium: '600'
  },
  lineHeights: {},
  letterSpacings: {},
  borderWidths: {},
  shadows: {},
  zIndices: {},
  transitions: {}
}

export default theme
