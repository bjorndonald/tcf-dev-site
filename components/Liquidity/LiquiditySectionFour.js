import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function LiquiditySectionFour () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.liquiditySectionFour',
  //         start: 'top 150px',
  //         end: 'bottom +=100px',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.liquiditySectionFour .gaspSlideLeft',
  //       { x: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from(
  //       '.liquiditySectionFour .gaspSlideRight',
  //       { x: 50, opacity: 0 },
  //       'start'
  //     )
  // }, [tl])
  return (
    <div className='liquiditySectionFour py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 col-md-6 gaspSlideLeft mb-4'>
            <div className='tradingBasicV'>
              {/* <Image src="/images/branding-suite.jpg" alt="Branding Suite" width={540} height={405} /> */}
              <div className='placeholder-image'></div>
            </div>
          </div>
          <div className='col-12 col-md-6 gaspSlideRight d-flex align-items-center'>
            <div className='tradingBasicHP'>
              <h2>Branding Suite</h2>
              <p>
                Plans are equipped with automated backoffice systems, branded
                MT5 labels and traders analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
