import React, { Fragment } from 'react'
import TradingBasicSectionFour from '../components/TradingBasic/TradingBasicSectionFour'
import TradingBasicSectionOne from '../components/TradingBasic/TradingBasicSectionOne'
import TradingBasicSectionThree from '../components/TradingBasic/TradingBasicSectionThree'
import TradingBasicSectionTwo from '../components/TradingBasic/TradingBasicSectionTwo'
import MetaTag from '../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'

export default function tradingBasic () {
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag
        title='Trading Basics - Learn The Fundamentals of Trading | Traders Central'
        description={`Learn the Fundamentals of Forex, Crypto & Stock Trading and discover 
the trader in you by unleashing your true potential.`}
      />
      <Head>
        <script
          src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
          integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
          crossOrigin='anonymous'
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
        {/* <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script> */}
        <script src='/js/script.js'></script>
      </Head>
      {/* <TradingBasicSectionOne tl={hc_tl} /> */}
      {/* <TradingBasicSectionTwo tl={hc_tl} /> */}
      <TradingBasicSectionThree />
      <TradingBasicSectionFour />
    </Fragment>
  )
}
