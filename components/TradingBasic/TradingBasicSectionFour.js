import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'

export default function TradingBasicSectionFour () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.tradingBasicSectionFour',
  //         start: 'top 150px',
  //         end: 'bottom center',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.tradingBasicSectionFour .gaspSlideLeft',
  //       { x: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from(
  //       '.tradingBasicSectionFour .gaspSlideRight',
  //       { x: 50, opacity: 0 },
  //       'start'
  //     )
  // }, [tl])
  return (
    <div className='tradingBasicSectionFour  d-flex align-items-center '>
      <div className='container'>
        <div className='row flex-column d-flex align-items-center justify-content-center'>
          <h4 style={{ textAlign: 'center' }}>
            Receive new content and keep
            <br /> learning to be the best.
          </h4>

          <div className='button mt-3'>
            <a className=' btn btn-black' href='https://fund.traderscentral.com/sign-up'>
              Sign-up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
