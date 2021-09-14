import React, { Fragment } from 'react'
import MetaTag from './../../components/MetaTag'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CryptoSectionOne from '../../components/Crypto/CryptoSectionOne'
import CryptoSectionTwo from '../../components/Crypto/CryptoSectionTwo'
import CryptoSectionThree from '../../components/Crypto/CryptoSectionThree'
import CryptoSectionFour from '../../components/Crypto/CryptoSectionFour'
import CryptoSectionFive from '../../components/Crypto/CryptoSectionFive'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function crypto () {
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag
        title='TC Crypto | Traders Central'
        description={`TC Crypto: Buy and Sell Cryptocurrencies within seconds. Sign up for Free and get started instantly. `}
      />
      <Head>
        <script
          src='https://code.jquery.com/jquery-3.2.1.min.js'
          integrity='sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4='
          crossorigin='anonymous'
        ></script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
          integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
          integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
          crossOrigin='anonymous'
        ></script>
        <script src='https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js'></script>
        {/* <script src='https://cdn.jsdelivr.net/npm/chart.js'></script> */}
        {/* <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script> */}
        <script src='/js/script.js'></script>
        <script src='/js/home.js'></script>
        <script src='/js/crypto.js'></script>
      </Head>
      <CryptoSectionOne />
      <CryptoSectionTwo />
      <CryptoSectionThree />
      <CryptoSectionFour />
      <CryptoSectionFive />
    </Fragment>
  )
}
