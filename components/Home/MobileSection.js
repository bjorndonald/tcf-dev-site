import React, { useEffect } from 'react'
import { gsap, Power3 } from 'gsap/dist/gsap'
import Image from 'next/image'
import { connect } from 'react-redux'

function MobileSection (props) {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.sectionMobile',
  //         start: 'center center',
  //         end: 'bottom top',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .to('.sectionTwoContent-1', 1, { opacity: 0 }, 'start')
  //     .from('.sectionTwoContent-2', 1, { opacity: 0 }, 'start')
  //     .from('.box3', 1, { x: -400 }, 'start')
  //     .from('.sectionTwoNav-2 ', 1, { opacity: 0 }, 'start')
  //     .from(
  //       '.sectionTwoContent-2 .sectionTwoContentLine div',
  //       1,
  //       { y: 66, ease: Power3.easeOut },
  //       'start'
  //     )
  //     .from(
  //       '.sectionTwoContent-2 p',
  //       1,
  //       { y: 20, opacity: 0, ease: Power3.easeOut },
  //       'start'
  //     )
  //     .add('start')
  //     .to('.sectionTwoContent-2', 2, { opacity: 0 }, 'start')
  //     .from('.sectionTwoContent-3', 2, { opacity: 0 }, 'start')
  //     .from('.box4', 2, { x: -400 }, 'start')
  //     .from('.sectionTwoNav-3 ', 2, { opacity: 0 }, 'start')
  //     .from(
  //       '.sectionTwoContent-3 .sectionTwoContentLine div',
  //       2,
  //       { y: 66, ease: Power3.easeOut },
  //       'start'
  //     )
  //     .from(
  //       '.sectionTwoContent-3 p',
  //       2,
  //       { y: 20, opacity: 0, ease: Power3.easeOut },
  //       'start'
  //     )
  // }, [])
  return (
    <div className='sectionMobile'>
      <div className='sectionTwo d-flex align-items-center'>
        <div className='container '>
          <div className='row d-flex align-items-stretch'>
            <div className='col-12 col-md-6 images'>
              <div className='mobImg'>
                <div className='fixedBox'>
                  {/* <Image
                    src='/images/iphone_skeleton.png'
                    width={420}
                    // className='image-skeleton'
                    height={832.5}
                    alt='Image'
                  /> */}
                  <video
                    loop={true}
                    playsInline
                    className='image'
                    autoPlay='autoplay'
                    muted={true}
                  >
                    <source src='/images/Landing.3gb' type='video/3gb' />
                    <source src='/images/Landing.webm' type='video/webm' />
                  </video>
                </div>
                <div className='box box2'></div>
                <div className='box box3'></div>
                <div className='box box4'></div>
              </div>
            </div>
            <div className='col-12 col-md-6 descriptions'>
              <div
                className='sectionTwoContentWrap'
                // style={{ marginLeft: '12rem' }}
              >
                <div className='sectionTwoContent sectionTwoContent-1 d-flex flex-column justify-content-center'>
                  <h2>
                    Explore our features
                    {/* <div className="sectionTwoContentLine sectionTwoContentLineThree">
                                    <div className="sectionTwoContentLineThreeInner">Profile</div>
                                </div> */}
                  </h2>
                  <p> A better trading experience</p>
                  <div className='button'>
                    <a
                      style={{ fontWeight: 'bold' }}
                      href='https://fund.traderscentral.com/sign-up'
                      className='btn btn-white'
                      target='portal'
                    >
                      Free Trial
                    </a>
                  </div>
                </div>
              </div>
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
  timeline: state.config.timeline,
  loading: state.config.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileSection)
