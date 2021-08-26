import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function LiquiditySectionFive () {
  //
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.liquiditySectionFive',
  //         start: 'top 150px',
  //         end: 'bottom +=100px',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.liquiditySectionFive .gaspSlideLeft',
  //       { x: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from(
  //       '.liquiditySectionFive .gaspSlideRight',
  //       { x: 50, opacity: 0 },
  //       'start'
  //     )
  // }, [tl])
  return (
    <div className='liquiditySectionFive py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 col-md-6 gaspSlideRight d-flex align-items-center'>
            <div className='tradingBasicHP'>
              <h2>Confidential & secure</h2>
              <ul className='csuList'>
                <li>
                  Partner funds identities are secured by nondisclosure
                  agreements
                </li>
                <li>
                  Partner funds traders data are secured with state-of-the-art
                  encryption
                </li>
                <li>Over 80 prop funds use TC Capital{"'"}s liquidity</li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6 gaspSlideLeft mb-4'>
            <div className='tradingBasicV'>
              {/* <Image src="/images/confidential-secure-to-use.jpg" alt="Confidential & secure to use" width={540} height={405} /> */}
              <div className='placeholder-image'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
