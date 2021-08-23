import Head from 'next/head'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/tcf-fonts.css'
import '../public/css/tcf-styles.css'
import '../public/css/font-awesome.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './../public/css/liquidity.scss'
import './../public/css/aboutus.scss'
import './../public/css/blog.scss'
import './../public/css/crypto.scss'
import './../public/css/token.scss'

import { Fragment } from 'react'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
