import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'

export default function TradingBasicSectionTwo () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".tradingBasicSectionTwo",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".tradingBasicSectionTwo .gaspSlideLeft", { x: -50, opacity : 0 }, 'start')
  //   .from(".tradingBasicSectionTwo .gaspSlideRight", { x: 50, opacity : 0 }, 'start');

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".tradingBasicSectionTwo2",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".tradingBasicSectionTwo2 .gaspSlideLeft", { x: -50, opacity : 0 }, 'start')
  //   .from(".tradingBasicSectionTwo2 .gaspSlideRight", { x: 50, opacity : 0 }, 'start');
  // }, [tl]);
  return (
    <div>
      <div className='tradingBasicSectionTwo py-5 d-flex align-items-center heightHv'>
        <div className='container'>
          <div className='row py-5 d-flex align-items-stretch'>
            <div className='col-12 col-md-6 mb-4 gaspSlideLeft'>
              <div className='tradingBasicV'>
                <video
                  id='myVideo'
                  loop={true}
                  autoPlay='autoplay'
                  muted={true}
                >
                  <source src='/videos/comarch.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className='col-12 col-md-6 d-flex align-items-center mb-4 gaspSlideRight'>
              <div className='tradingBasicHP'>
                <h2>
                  A demystifying series to fulfill your financial desires{' '}
                </h2>
                <p>
                  From professionals to beginners, this series is made for
                  everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='tradingBasicSectionTwo2 py-5'>
        <div className='container'>
          <div className='row py-5 d-flex align-items-stretch'>
            <div className='col-12 col-md-6 d-flex align-items-center mb-4 gaspSlideLeft'>
              <div className='tradingBasicHP '>
                <h2>Daily bites to fill your belly</h2>
                <p>
                  Sign up to our newsletter to get updates about new episodes
                </p>
                <div className='formEmailEnRollWrap'>
                  <form className='formEmailEnRollF d-flex justify-content-between'>
                    <div className='fiEmailW'>
                      <input
                        tyle='email'
                        className='fEmail'
                        placeholder='Email Address'
                      />
                    </div>
                    <div className='fsubmitW'>
                      <input
                        type='submit'
                        className='btn fSubmit'
                        value='Enroll'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 mb-4 gaspSlideRight'>
              <div className='tradingBasicI'>
                <Image
                  src='/images/trading-basicDbfy.png'
                  alt='Daily bites to fill your belly'
                  width={540}
                  height={568}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
