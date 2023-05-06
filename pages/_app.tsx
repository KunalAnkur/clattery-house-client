import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from "../components/index"
import { DefaultSeo } from 'next-seo';
import { config } from "../next-seo.config"
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo {...config} />
    <Navbar />
    <Component {...pageProps} />
    <Footer {...pageProps} />
  </>
}

export default MyApp
