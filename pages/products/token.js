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

function token (props) {
  props.clearTimeline()
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()
  props.setTimeline(hc_tl)
  // console.log(hc_tl)
  useEffect(() => {
    // props.setTimeline(hc_tl)
    return () => {
      props.clearTimeline()
    }
  }, [])

  return props.loading ? null : (
    <Fragment>
      <MetaTag title='Token page' />
      {/* <TokenSectionOne tl={hc_tl} />
      <TokenSectionTwo tl={hc_tl} />

      <TokenSectionFourS1 tl={hc_tl} />
      <TokenSectionThree tl={hc_tl} />

      <TokenSectionFive tl={hc_tl} />
      <TokenSectionFaq tl={hc_tl} /> */}
      <TokenSectionOne />
      <TokenSectionTwo />

      <TokenSectionFourS1 />
      <TokenSectionThree />

      <TokenSectionFive />
      <TokenSectionFaq />
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
  questions: state.config.questions,
  timeline: state.config.timeline,
  loading: state.config.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(token)
