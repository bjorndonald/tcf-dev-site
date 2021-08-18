import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionTwo ({ tl }) {
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
        <div className='card col-md-2'>
          <h4>Portfolios</h4>
          <p>
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </p>
        </div>

        <div className='card col-md-2'>
          <h4>Accessibility</h4>
          <p>
            24/7 trading platform accessible worldwide, compatible with multiple
            devices.
          </p>
        </div>

        <div className='card col-md-2'>
          <h4>Vault Protection</h4>
          <p>
            For added security, store your funds in a vault with time delayed
            withdrawals.
          </p>
        </div>

        <div className='card col-md-2'>
          <h4>Top Tier Liquidity</h4>
          <p>
            Order books with top tier liquidity, allowing users to easily
            exchange many other digital assets with minimal slippage.
          </p>
        </div>
      </div>
    </div>
  )
}
