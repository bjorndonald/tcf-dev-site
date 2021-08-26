import React, { Fragment } from 'react'
import MetaTag from './../../components/MetaTag'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import CryptoSectionOne from '../../components/Crypto/CryptoSectionOne'
import CryptoSectionTwo from '../../components/Crypto/CryptoSectionTwo'
import CryptoSectionThree from '../../components/Crypto/CryptoSectionThree'
import CryptoSectionFour from '../../components/Crypto/CryptoSectionFour'
import CryptoSectionFive from '../../components/Crypto/CryptoSectionFive'

export default function crypto () {
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag title='Crypto page' />
      <CryptoSectionOne />
      <CryptoSectionTwo />
      <CryptoSectionThree />
      <CryptoSectionFour />
      <CryptoSectionFive />
    </Fragment>
  )
}
