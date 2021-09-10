import React, { Fragment, useEffect } from 'react'
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
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../../store/actions/configActions'
import Head from 'next/head'

function token (props) {
  // props.clearTimeline()
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()
  // props.setTimeline(hc_tl)
  // console.log(hc_tl)
  useEffect(() => {
    // props.setTimeline(hc_tl)
    return () => {
      // props.clearTimeline()
    }
  }, [])

  return props.loading ? null : (
    <Fragment>
      <MetaTag
        description={`"Traders Central Token (TCT) is the virtual currency used within the TC Ecosystem. 
Claim your TCTs daily and redeem for discounts or share with your friends."`}
        title='Traders Central Token | Traders Central'
      />
      {/* <TokenSectionOne tl={hc_tl} />
      <TokenSectionTwo tl={hc_tl} />

      <TokenSectionFourS1 tl={hc_tl} />
      <TokenSectionThree tl={hc_tl} />

      <TokenSectionFive tl={hc_tl} />
      <TokenSectionFaq tl={hc_tl} /> */}
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
      <TokenSectionOne />
      <TokenSectionTwo />

      <TokenSectionThree />
      <TokenSectionFaq />
      <TokenSectionFive />
    </Fragment>
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
  // questions: state.config.questions,
  // timeline: state.config.timeline,
  // loading: state.config.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(token)
