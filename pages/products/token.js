import React, { Fragment } from 'react'
import MetaTag from './../../components/MetaTag'
import TokenSectionOne from './../../components/Token/TokenSectionOne'
import TokenSectionTwo from './../../components/Token/TokenSectionTwo'
import TokenSectionThree from '../../components/Token/TokenSectionThree'
import TokenSectionFourS1 from '../../components/Token/TokenSectionFourS1'
import TokenSectionFourS2 from '../../components/Token/TokenSectionFourS2'
import TokenSectionFive from '../../components/Token/TokenSectionFive'
import TokenSectionFaq from '../../components/Token/TokenSectionFaq'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function token () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag title='Token page' />
      <TokenSectionOne tl={hc_tl} />
      <TokenSectionTwo tl={hc_tl} />

      <TokenSectionFourS1 tl={hc_tl} />
      <TokenSectionThree tl={hc_tl} />
      {/* <TokenSectionFourS2 tl={hc_tl} /> */}
      <TokenSectionFive tl={hc_tl} />
      <TokenSectionFaq tl={hc_tl} />
    </Fragment>
  )
}
