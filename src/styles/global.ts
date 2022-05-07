import { globalCss } from './stitches.config'

export const getGlobalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    border: 'none',
    boxSizing: 'border-box'
  },

  body: {
    fontFamily: '$default',
    backgroundColor: '$gray1',
    lineHeight: 1.5,
    minHeight: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  h1: {
    fontSize: '$7'
  },

  h2: {
    fontSize: '$6'
  },

  h3: {
    fontSize: '$5'
  },

  h4: {
    fontSize: '$4'
  },

  p: {
    fontSize: '$3',
    marginBottom: '$2'
  }
})
