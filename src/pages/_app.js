import Header from '@/sections/Navigation'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
