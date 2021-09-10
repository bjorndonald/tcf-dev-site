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
import Head from 'next/head'
import FaqsSectionOne from '../components/Faqs/FaqsSectionOne'
import FaqsSectionTwo from '../components/Faqs/FaqsSectionTwo'

export default function faqs () {
  return (
    <Fragment>
      <MetaTag title='FAQs Page' />
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
      <FaqsSectionOne />
      <FaqsSectionTwo />
    </Fragment>
  )
}
