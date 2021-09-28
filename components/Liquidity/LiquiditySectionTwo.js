import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function LiquiditySectionTwo () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.liquiditySectionTwo',
  //         start: 'top 150px',
  //         end: 'bottom +=100px',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.liquiditySectionTwo .gaspSlideLeft',
  //       { x: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from(
  //       '.liquiditySectionTwo .gaspSlideRight',
  //       { x: 50, opacity: 0 },
  //       'start'
  //     )
  // }, [tl])
  return (
    <div className='liquiditySectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row  d-flex align-items-stretch'>
          <div className='col-12 col-md-6 gaspSlideLeft mb-4'>
            <div className='tradingBasicV'>
              {/* <Image src="/images/the-backbone-for-prop-funds.png" alt="The Backbone for Prop Funds" width={540} height={441} /> */}
              {/* <div className='placeholder-image'></div> */}
              <img src='/images/liquidity/One.jpg' alt='' />
            </div>
          </div>
          <div className='col-12 col-md-6 gaspSlideRight d-flex align-items-center'>
            <div className='tradingBasicHP'>
              <h2>The Backbone for Prop Funds</h2>
              <p>
                For ambitious founders around the world, we make starting a
                local fund as simple, borderless and programable as the rest of
                the internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
