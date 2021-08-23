import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionTwo ({ tl }) {
  useEffect(() => {
    tl.from('.cryptoSectionTwo', {
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: 'easeIn'
    })
      .from(
        '.cryptoSectionTwo .pOne',
        { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0'
      )
      .from(
        '.cryptoSectionTwo h1',
        { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
      .from(
        '.cryptoSectionTwo .pTwo',
        { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
      .from(
        '.cryptoSectionTwo a',
        { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
  }, [tl])
  return (
    <div className='cryptoSectionTwo py-5 d-flex align-items-center'>
      <div className='container h-10'>
        <div className='row justify-content-between'>
          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/bar-chart.svg' alt='' />
            <h4>Portfolios</h4>

            <p>
              Buy and sell popular digital currencies, keep track of them in the
              one place.
            </p>
          </div>

          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/responsive.svg' alt='' />
            <h4>Accessibility</h4>
            <p>
              24/7 trading platform accessible worldwide, compatible with
              multiple devices.
            </p>
          </div>

          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/security.svg' alt='' />
            <h4>Vault Protection</h4>
            <p>
              For added security, store your funds in a vault with time delayed
              withdrawals.
            </p>
          </div>

          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/trophy.svg' alt='' />
            <h4>Top Tier Liquidity</h4>
            <p>
              Order books with top tier liquidity, allowing users to easily
              exchange many other digital assets with minimal slippage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
