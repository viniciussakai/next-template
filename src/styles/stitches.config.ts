import { createStitches } from '@stitches/react'
import applicationTheme from './theme'

export const {
  styled,
  globalCss,
  createTheme,
  getCssText
} = createStitches({
  theme: applicationTheme,
  media: {
    bp1: '(min-width: 480px)'
  },
  utils: {
    marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value: any) => ({ paddingLeft: value, paddingRight: value })
  }
})
