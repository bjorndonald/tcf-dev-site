import React, { Fragment } from 'react'
import MetaTag from './../components/MetaTag'
// import AboutUsSectionDttiy from '../components/AboutUs/AboutUsSectionDttiy'
// import AboutUsSectionEs from '../components/AboutUs/AboutUsSectionEs'
// import AboutUsSectionJotc from '../components/AboutUs/AboutUsSectionJotc'
import BlogSectionOne from '../components/Blog/BlogSectionOne'
import BlogSectionTwo from '../components/Blog/BlogSectionTwo'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'

export default function blog () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag
        title='Trading Blog - Best Trading Tips on Forex, Stocks & Crypto | Traders Central'
        description={`Want to level up in your trading career? Discover various trading 
concepts and tips from our Blog.`}
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
      <BlogSectionOne tl={hc_tl} />
      <BlogSectionTwo tl={hc_tl} />
    </Fragment>
  )
}
