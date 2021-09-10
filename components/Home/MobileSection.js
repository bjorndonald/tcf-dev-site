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
            {/* <div className='col-12 col-md-2 d-flex align-items-center p-0'>
              <div className='sectionTwoList'>
                <div
                  style={{ opacity: 1 }}
                  className='sectionTwoNav sectionTwoNavFix sectionTwoNavF'
                >
                  <ul>
                    <li>
                      <i className='fa fa-arrow-up' aria-hidden='true'></i>
                    </li>
                    <li className='active'>Manage</li>
                    <li>Connect</li>
                    <li>Learn</li>
                    <li>
                      <i className='fa fa-arrow-down' aria-hidden='true'></i>
                    </li>
                  </ul>
                </div>
                <div
                  style={{ opacity: 0, display: 'none' }}
                  className='sectionTwoNav sectionTwoNav-2 '
                >
                  <ul>
                    <li>
                      <i className='fa fa-arrow-up' aria-hidden='true'></i>
                    </li>
                    <li>Manage</li>
                    <li className='active'>Connect</li>
                    <li>Learn</li>
                    <li>
                      <i className='fa fa-arrow-down' aria-hidden='true'></i>
                    </li>
                  </ul>
                </div>
                <div
                  style={{ opacity: 0, display: 'none' }}
                  className='sectionTwoNav sectionTwoNav-3'
                >
                  <ul>
                    <li>
                      <i className='fa fa-arrow-up' aria-hidden='true'></i>
                    </li>
                    <li>Manage</li>
                    <li>Connect</li>
                    <li className='active'>Learn</li>
                    <li>
                      <i className='fa fa-arrow-down' aria-hidden='true'></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
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
                  <img src='/images/home/mobileSection.png' alt='Image' />
                </div>
                <div className='box box2'>
                  {/* <Image
                    src='/images/mob-2.png'
                    width={424}
                    height={832.5}
                    alt='Image'
                  /> */}
                  {/* <img style={{}} src='/images/mob-2.png' alt='Image' /> */}
                </div>
                <div className='box box3'>
                  {/* <Image
                    src='/images/mob-3.png'
                    width={424}
                    height={832.5}
                    alt='Image'
                  /> */}
                  {/* <img style={{}} src='/images/mob-3.png' alt='Image' /> */}
                </div>
                <div className='box box4'>
                  {/* <Image
                    src='/images/mob-4.png'
                    width={424}
                    height={832.5}
                    alt='Image'
                  /> */}
                  {/* <img style={{}} src='/images/mob-4.png' alt='Image' /> */}
                </div>
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
                  <p>Let's get you to the moon!</p>
                  <div className='button'>
                    <a href='' className='btn btn-white'>
                      Get Started
                    </a>
                  </div>
                </div>

                <div
                  style={{ opacity: 0 }}
                  className='sectionTwoContent sectionTwoContent-2 d-flex flex-column justify-content-center'
                >
                  <h2>
                    <div className='sectionTwoContentLine sectionTwoContentLineOne'>
                      <div className='sectionTwoContentLineOneInner '>
                        Socials Function
                      </div>
                    </div>
                    {/* <div className="sectionTwoContentLine sectionTwoContentLineTwo">
                                    <div className="sectionTwoContentLineTwoInner">Portfolio With Ease</div>
                                </div>
                                <div className="sectionTwoContentLine sectionTwoContentLineThree">
                                    <div className="sectionTwoContentLineThreeInner">Message</div>
                                </div> */}
                  </h2>
                  <p>
                    Send, Receive, and Redeem TCT whilst sharing your next
                    trading set-ups with your friends, all the while meeting
                    other TC traders!
                  </p>
                </div>

                <div
                  style={{ opacity: 0 }}
                  className='sectionTwoContent sectionTwoContent-3 d-flex flex-column justify-content-center'
                >
                  <h2>
                    <div className='sectionTwoContentLine sectionTwoContentLineOne'>
                      <div className='sectionTwoContentLineOneInner'>
                        Endless Customisation
                      </div>
                    </div>
                    {/* <div className="sectionTwoContentLine sectionTwoContentLineTwo">
                                    <div className="sectionTwoContentLineTwoInner">Portfolio With Ease</div>
                                </div>
                                <div className="sectionTwoContentLine sectionTwoContentLineThree">
                                    <div className="sectionTwoContentLineThreeInner">Setting</div>
                                </div> */}
                  </h2>
                  <p>
                    Change your username, manage your referrals, and upload your
                    KYC with ease in the settings area.
                  </p>
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
