import { type AppType } from 'next/app'

import { api } from '../utils/api'

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default api.withTRPC(MyApp)
