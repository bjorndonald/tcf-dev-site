import React, { Fragment } from 'react'
import MetaTag from './../components/MetaTag'
// import AboutUsSectionDttiy from '../components/AboutUs/AboutUsSectionDttiy'
// import AboutUsSectionEs from '../components/AboutUs/AboutUsSectionEs'
// import AboutUsSectionJotc from '../components/AboutUs/AboutUsSectionJotc'
import BlogSectionOne from '../components/Blog/BlogSectionOne'
import BlogSectionTwo from '../components/Blog/BlogSectionTwo'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function blog () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag title='Blog Page' />
      <BlogSectionOne tl={hc_tl} />
      <BlogSectionTwo tl={hc_tl} />
      {/* <AboutUsSectionEs tl={hc_tl} />
      <AboutUsSectionDttiy tl={hc_tl} />
      <AboutUsSectionJotc tl={hc_tl} /> */}
    </Fragment>
  )
}
