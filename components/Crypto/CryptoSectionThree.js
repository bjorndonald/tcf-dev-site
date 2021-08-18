import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionThree ({ tl }) {
  useEffect(() => {
    tl.from('.cryptoSectionThree', {
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
    <div className='cryptoSectionThree py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h2>Get started with the digitally economy</h2>
            <div className='row'>
              <div className='col-md-4 flex-column align-items-center'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
