import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'

export default function TradingBasicSectionFour () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".tradingBasicSectionFour",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".tradingBasicSectionFour .gaspSlideLeft", { x: -50, opacity : 0 }, 'start')
  //   .from(".tradingBasicSectionFour .gaspSlideRight", { x: 50, opacity : 0 }, 'start');
  // }, [tl]);
  return (
    <div className='tradingBasicSectionFour py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 col-md-6 mb-4 gaspSlideLeft'>
            <div className='tradingBasicI'>
              <Image
                src='/images/trading-basicDbfy2.jpg'
                alt='Daily bites to fill your belly'
                width={540}
                height={404}
              />
            </div>
          </div>
          <div className='col-12 col-md-6 d-flex align-items-center mb-4 gaspSlideRight'>
            <div className='tradingBasicHP '>
              <h2>Daily bites to fill your belly</h2>
              <p>Sign up to our newsletter to get updates about new episodes</p>
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
        </div>
      </div>
    </div>
  )
}
