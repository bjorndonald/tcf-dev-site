import React, { useEffect } from 'react'
import { gsap, Power4 } from 'gsap'
import { connect } from 'react-redux'

function HeroSection (props) {
  // useEffect(() => {
  //   console.log(props.timeline)
  //   props.timeline
  //     .to('.sectionOne', {
  //       opacity: 1,
  //       duration: 0.8,
  //       delay: 0.8,
  //       ease: Power4.easeIn
  //     })
  //     .from(
  //       '.HomeHeroVideo',
  //       { x: '+=50', opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0'
  //     )
  //     .from(
  //       '.sectionOne h1',
  //       { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.sectionOne p',
  //       { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.sectionOne a',
  //       { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  // }, [])

  return (
    <div className='sectionOne d-flex align-items-center'>
      <div className='wrapper '>
        <div className='row  d-flex '>
          <div className='col-12 col-md-6  d-flex align-items-center'>
            <div className='hero-heading'>
              <h1 className=''>Designed for everyone</h1>
              <p className=''>
                Suite of products to help boost your <br />
                financial positioning
              </p>
              <a
                className=' btn btn-black'
                href='https://fund.traderscentral.com/sign-up'
                target='_blank'
              >
                Sign-up
              </a>
            </div>
          </div>

          <div className='col-12 col-md-6  align-right'>
            <div className='HomeHeroVideo'>
              <img src='/images/home/homeOne.jpg' alt='' />
              {/* <video loop={true} autoPlay='autoplay' muted={true}>
                <source src='/videos/home_header_a-new.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection)
