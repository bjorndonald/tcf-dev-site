import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { useRouter } from 'next/router'

export default function CryptoSectionOne () {
  const router = useRouter()

  useEffect(() => {
    return () => {}
  }, [])
  // useEffect(() => {
  //   tl.to('.cryptoSectionOne', {
  //     opacity: 1,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  //     .to(
  //       '.cryptoSectionOne h1',
  //       { x: 0, opacity: 1, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     // .from(
  //     //   '.cryptoSectionOne h2',
  //     //   { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //     //   '>-0.5'
  //     // )
  //     .to(
  //       '.cryptoSectionOne .cryptoTextWrap .btn',
  //       { x: 0, opacity: 1, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  // }, [tl])
  return (
    <div className='cryptoSectionOne py-5 d-flex align-items-center '>
      <div className='background'></div>
      <canvas id='BtcUsdChart'></canvas>
      <div className='container d-flex flex-column align-items-center justify-content-between'>
        <div className='row py-5 flex-column align-items-center justify-content-between'>
          <h1>
            Trade the most popular <br />
            digital currencies
          </h1>

          <div className='row mt-5 flex-column align-items-center justify-content-between'>
            <h2 className='mb-4'>Buy & Sell Crypto In Seconds!</h2>
            <div className='cryptoTextWrap'>
              <input placeholder='Enter Email' type='text' />
              <a href='' className='btn btn-moon'>
                <span>To The Moon</span>
                <i className='fa fa-rocket m-1' aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
