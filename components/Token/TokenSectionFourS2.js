import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function TokenSectionThree () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.tokenSectionThree',
  //         start: 'top 150px',
  //         end: 'bottom center',
  //         scrub: 2,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.tokenSectionThree .gaspSlideLeft',
  //       { x: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from(
  //       '.tokenSectionThree .gaspSlideRight',
  //       { x: 50, opacity: 0 },
  //       'start'
  //     )
  // }, [tl])
  return (
    <div className='tokenSectionThree tokenSectionaCOE d-flex align-items-center '>
      <div className='container'>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 col-md-6 mb-4 gaspSlideRight'>
            <div className='tradingBasicI'>
              {/* <Image
                src='/images/comp_4.gif'
                alt='A currency for our ecosystem'
                width={540}
                height={405}
              /> */}
              <div className='placeholder-image'></div>
            </div>
          </div>
          <div className='col-12 col-md-6 d-flex align-items-center  mb-4 gaspSlideLeft'>
            <div className='tradingBasicHP '>
              <h2 style={{ textAlign: 'center' }}>
                Shake and start <br />
                your streaks
              </h2>
              <p style={{ textAlign: 'center' }}>
                It's simple, login and shake
                <br /> your phone for discounts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
