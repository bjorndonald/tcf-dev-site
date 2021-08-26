import React, { Fragment } from 'react'
import MetaTag from './../components/MetaTag'
import ArchiveSectionOne from './../components/Archive/ArchiveSectionOne'
import ArchiveSectionTwo from './../components/Archive/ArchiveSectionTwo'
import ArchiveSectionOne2 from './../components/Archive/ArchiveSectionOne2'
import ArchiveSectionTwo2 from '../components/Archive/ArchiveSectionTwo2'
import ArchiveSectionThree from './../components/Archive/ArchiveSectionThree'
import ArchiveSectionFour from '../components/Archive/ArchiveSectionFour'
import ArchiveSectionFive from '../components/Archive/ArchiveSectionFive'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function archive () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag title='Archive Page' />
      <ArchiveSectionOne tl={hc_tl} />
      {/* <ArchiveSectionTwo tl={hc_tl} />
      <ArchiveSectionOne2 tl={hc_tl} />
      <ArchiveSectionTwo2 tl={hc_tl} />
      <ArchiveSectionThree tl={hc_tl} />
      <ArchiveSectionFour tl={hc_tl} />
      <ArchiveSectionFive tl={hc_tl} /> */}
    </Fragment>
  )
}
