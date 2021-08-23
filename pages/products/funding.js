import React, { Fragment } from 'react'
import MetaTag from './../../components/MetaTag'
import ContactSection from '../../components/Common/ContactSection'
import FundingHeroSection from './../../components/Funding/FundingHeroSection'
import FundingSectionTwo from './../../components/Funding/FundingSectionTwo'
import FundingSectionThree from './../../components/Funding/FundingSectionThree'
import FundingSectionFour from '../../components/Funding/FundingSectionFour'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function funding () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <div>
      <MetaTag title='Funding page' />
      <FundingHeroSection tl={hc_tl} />
      <FundingSectionTwo tl={hc_tl} />
      <FundingSectionThree tl={hc_tl} />
      <FundingSectionFour tl={hc_tl} />
      <ContactSection tl={hc_tl} />
    </div>
  )
}
