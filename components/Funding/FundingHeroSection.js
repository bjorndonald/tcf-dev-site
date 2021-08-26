import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import { connect } from 'react-redux'

function FundingHeroSection (props) {
  // useEffect(() => {
  //   props.timeline
  //     .to('.fundingSectionOne', {
  //       opacity: 1,
  //       duration: 0.8,
  //       delay: 0.8,
  //       ease: 'easeIn'
  //     })
  //     .from(
  //       '.fundingSectionOne h1',
  //       { x: '+=50', opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0'
  //     )
  //     .from(
  //       '.fundingSectionOne h2',
  //       { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.fundingSectionOne img',
  //       { y: 50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  // }, [])

  return (
    <div className='fundingSectionOne py-5 d-flex align-items-center '>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className=' text-center  py-5 '>
              {/* <h2>Funding in 24 hours</h2> */}
              <Image
                style={{ width: '80%' }}
                className='py-4'
                src='/images/funding-hero.png'
                alt='Trader Central Fund'
                width={2732}
                height={1626}
              />
              <h1>Funding in 24 hours</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(FundingHeroSection)
