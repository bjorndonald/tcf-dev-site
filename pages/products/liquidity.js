import React, { Fragment } from 'react'
import MetaTag from './../../components/MetaTag'
import LiquiditySectionOne from './../../components/Liquidity/LiquiditySectionOne'
import LiquiditySectionTwo from './../../components/Liquidity/LiquiditySectionTwo'
import LiquiditySectionThree from './../../components/Liquidity/LiquiditySectionThree'
import LiquiditySectionFour from './../../components/Liquidity/LiquiditySectionFour'
import LiquiditySectionFive from './../../components/Liquidity/LiquiditySectionFive'
import LiquiditySectionFaq from './../../components/Liquidity/LiquiditySectionFaq'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'

export default function liquidity () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag
        title='Prime Bridge | Traders Central'
        description={`Prime Bridge enables you to launch your Fund from anywhere in the world by eliminating all lengthy paperwork, legal complexity, and numerous fees.`}
      />
      {/* <LiquiditySectionOne tl={hc_tl} />
      <LiquiditySectionTwo tl={hc_tl} />
      <LiquiditySectionThree tl={hc_tl} />
      <LiquiditySectionFour tl={hc_tl} />
      <LiquiditySectionFive tl={hc_tl} />
      <LiquiditySectionFaq tl={hc_tl} /> */}
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
      <LiquiditySectionOne />
      <LiquiditySectionTwo />
      <LiquiditySectionThree />
      <LiquiditySectionFour />
      <LiquiditySectionFive />
      <LiquiditySectionFaq />
    </Fragment>
  )
}
