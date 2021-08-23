import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionFour ({ tl }) {
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
    <div className='cryptoSectionFour py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <h1>To the moon in three steps</h1>
        <div className='row d-flex justify-content-between'>
          <div className='card col-md-3 d-flex shadow-sm flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/signup.svg' alt='' />
            <h4 className='my-4'>Portfolios</h4>
            <p>
              Buy and sell popular digital currencies, keep track of them in the
              one place.
            </p>
          </div>

          <div className='card col-md-3 d-flex shadow-sm flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/verify.svg' alt='' />
            <h4 className='my-4'>Accessibility</h4>
            <p>
              24/7 trading platform accessible worldwide, compatible with
              multiple devices.
            </p>
          </div>

          <div className='card col-md-3 d-flex shadow-sm flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/celebration.svg' alt='' />
            <h4 className='my-4'>Vault Protection</h4>
            <p>
              For added security, store your funds in a vault with time delayed
              withdrawals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
