import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from "../components/index"
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer {...pageProps} />
  </>
}

export default MyApp
