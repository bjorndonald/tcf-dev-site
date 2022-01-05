import React, { Fragment } from 'react'
import MetaTag from './../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import BasicsSectionOne from '../components/Basics/BasicsSectionOne'
import BasicsSectionTwo from '../components/Basics/BasicsSectionTwo'
import BasicsSectionThree from '../components/Basics/BasicsSectionThree'

export function getServerSideProps (context) {
  return {
    props: { url: context.req.url }
  }
}

export default function basics (props) {
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag
        title='Trading Basics - Learn The Fundamentals of Trading | Traders Central'
        description={`Learn the Fundamentals of Forex, Crypto &amp; Stock Trading and discover 
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
      <BasicsSectionOne />
      <BasicsSectionTwo {...props} />
      <BasicsSectionThree />
    </Fragment>
  )
}
