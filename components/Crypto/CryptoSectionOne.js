import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionOne ({ tl }) {
  useEffect(() => {
    tl.from('.cryptoSectionOne', {
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: 'easeIn'
    })
      .from(
        '.cryptoSectionOne .pOne',
        { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0'
      )
      .from(
        '.cryptoSectionOne h1',
        { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
      .from(
        '.cryptoSectionOne .pTwo',
        { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
      .from(
        '.cryptoSectionOne a',
        { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
  }, [tl])
  return (
    <div className='cryptoSectionOne py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5 flex-column align-items-center justify-content-between'>
          <h1>
            Trade the most popular <br />
            digital currencies
          </h1>

          <div className='row flex-column align-items-center justify-content-between'>
            <h3>Buy & Sell Crypto In Seconds!</h3>
            <div className='cryptoTextWrap'>
              <input type='text' />
              <a href='' className='btn btn-moon'>
                To The Moon
                <i class='fas fa-rocket'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
