import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function LiquiditySectionThree () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.liquiditySectionThree',
  //         start: 'top 150px',
  //         end: 'bottom +=100px',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.liquiditySectionThree .gaspSlideLeft',
  //       { x: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from(
  //       '.liquiditySectionThree .gaspSlideRight',
  //       { x: 50, opacity: 0 },
  //       'start'
  //     )
  // }, [tl])
  return (
    <div className='liquiditySectionThree py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row  d-flex align-items-stretch'>
          <div className='col-12 col-md-6 gaspSlideLeft d-flex align-items-center'>
            <div className='tradingBasicHP '>
              <h2>Personalized Portal</h2>
              <p>
                The personalized portal allows you to manage all your traders
                and process their tasks.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6 gaspSlideRight mt-4'>
            <div className='tradingBasicI'>
              {/* <div className='placeholder-image'></div> */}
              <img src='/images/liquidity/Two.jpg' alt='' />
              {/* <Image src="/images/personalized-portal.jpg" alt="Personalized Portal" width={540} height={405} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
