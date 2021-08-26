import React, { Fragment, useEffect } from 'react'
import HelpCenterSectionFive from '../components/HelpCenter/HelpCenterSectionFive'
import HelpCenterSectionFour from '../components/HelpCenter/HelpCenterSectionFour'
import HelpCenterSectionOne from '../components/HelpCenter/HelpCenterSectionOne'
import HelpCenterSectionThree from '../components/HelpCenter/HelpCenterSectionThree'
import HelpCenterSectionTwo from '../components/HelpCenter/HelpCenterSectionTwo'
import MetaTag from './../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../store/actions/configActions'

function helpCenter (props) {
  // props.clearTimeline()
  // gsap.registerPlugin(ScrollTrigger)
  // let hc_tl = gsap.timeline()
  // props.setTimeline(hc_tl)
  // // console.log(hc_tl)
  // useEffect(() => {
  //   // props.setTimeline(hc_tl)
  //   return () => {
  //     props.clearTimeline()
  //   }
  // }, [])
  console.log(props.loading)

  return (
    <Fragment>
      <MetaTag title='Help Center' />
      <HelpCenterSectionOne />
      <HelpCenterSectionTwo />
      <HelpCenterSectionThree />
      <HelpCenterSectionFour />
      <HelpCenterSectionFive />
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setTimeline: timeline => {
    dispatch(setTimeline(timeline))
  },
  clearTimeline: timeline => {
    dispatch(clearTimeline(timeline))
  }
})

const mapStateToProps = state => ({
  timeline: state.config.timeline,
  loading: state.config.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(helpCenter)
