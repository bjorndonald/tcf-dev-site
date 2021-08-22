import React, { Fragment } from 'react'
import TradingBasicSectionFour from '../components/TradingBasic/TradingBasicSectionFour'
import TradingBasicSectionOne from '../components/TradingBasic/TradingBasicSectionOne'
import TradingBasicSectionThree from '../components/TradingBasic/TradingBasicSectionThree'
import TradingBasicSectionTwo from '../components/TradingBasic/TradingBasicSectionTwo'
import MetaTag from './../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function tradingBasic () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag title='Trading Basic Page' />
      {/* <TradingBasicSectionOne tl={hc_tl} /> */}
      {/* <TradingBasicSectionTwo tl={hc_tl} /> */}
      <TradingBasicSectionThree tl={hc_tl} />
      <TradingBasicSectionFour tl={hc_tl} />
    </Fragment>
  )
}
