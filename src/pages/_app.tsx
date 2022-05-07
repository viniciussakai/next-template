import { getGlobalStyles } from '@styles/global'
import type { AppProps } from 'next/app'

getGlobalStyles()
function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
