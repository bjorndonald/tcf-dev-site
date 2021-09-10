import React, { Fragment, useEffect } from 'react'
import MetaTag from './../../components/MetaTag'
import ContactSection from '../../components/Common/ContactSection'
import FundingHeroSection from './../../components/Funding/FundingHeroSection'
import FundingSectionTwo from './../../components/Funding/FundingSectionTwo'
import FundingSectionThree from './../../components/Funding/FundingSectionThree'
import FundingSectionFour from '../../components/Funding/FundingSectionFour'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import FundingSectionFive from '../../components/Funding/FundingSectionFive'
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../../store/actions/configActions'

function funding (props) {
  // props.clearTimeline()
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()
  // props.setTimeline(hc_tl)

  // useEffect(() => {
  //   return () => {
  //     props.clearTimeline()
  //   }
  // }, [])

  return (
    <div>
      <MetaTag
        description={`Traders Central Fund connects traders to backers to get funded in less 
than 24 hours. Choose between our Monthly and One Time Fee Model.`}
        title='Traders Central Fund - Decentralizing Retail Funding | Traders Central'
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
      <FundingHeroSection />
      <FundingSectionTwo />
      <FundingSectionThree />
      <FundingSectionFour />
      <FundingSectionFive />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTimeline: timeline => {
    dispatch(setTimeline(timeline))
  },
  clearTimeline: () => {
    dispatch(clearTimeline())
  }
})

const mapStateToProps = state => ({
  questions: state.config.questions,
  timeline: state.config.timeline,
  loading: state.config.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(funding)
