import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../../store/actions/configActions'

function TokenSectionOne (props) {
  // useEffect(() => {
  //   props.timeline
  //     .from('.tokenSectionOne', {
  //       opacity: 0,
  //       duration: 0.8,
  //       delay: 0.8,
  //       ease: 'easeIn'
  //     })
  //     .from(
  //       '.tokenSectionOne .pOne',
  //       { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0'
  //     )
  //     .from(
  //       '.tokenSectionOne h1',
  //       { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.tokenSectionOne .pTwo',
  //       { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.tokenSectionOne a',
  //       { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  // }, [])
  return (
    <div className='tokenSectionOne py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className=' text-center helpCenterSectionOneTitle py-5'>
              {/* <p className='pOne'>Trader Central Token</p> */}
              <h1>Send and Redeem in Seconds</h1>
              <p className='pTwo my-5'>
                Stack up, share discounts, get cash back
              </p>
              <a
                className=' btn btn-black px-3 py-1'
                href='https://dash.traderscentral.fund/sign-up'
                target='_blank'
                style={{ opacity: '1', transform: 'translate(0px, 0px)' }}
              >
                Get your first TCT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  timeline: state.config.timeline
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenSectionOne)
