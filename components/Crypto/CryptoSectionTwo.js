import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionTwo () {
  // useEffect(() => {
  //   tl.from('.cryptoSectionTwo', {
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  // }, [tl])
  return (
    <div className='cryptoSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center'>
            <img src='/images/crypto/bar-chart.svg' alt='' />
            <h4>Portfolios</h4>

            <p>
              Buy and sell popular digital currencies, keep track of them in the
              one place.
            </p>
          </div>

          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center'>
            <img src='/images/crypto/responsive.svg' alt='' />
            <h4>Accessibility</h4>
            <p>
              24/7 trading platform accessible worldwide, compatible with
              multiple devices.
            </p>
          </div>

          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center'>
            <img src='/images/crypto/security.svg' alt='' />
            <h4>Vault Protection</h4>
            <p>
              For added security, store your funds in a vault with time delayed
              withdrawals.
            </p>
          </div>

          <div className='card shadow-sm col-md-2 d-flex flex-column align-items-center'>
            <img src='/images/crypto/trophy.svg' alt='' />
            <h4>Top Tier Liquidity</h4>
            <p>
              Order books with top
              <br />
              tier liquidity, allowing
              <br />
              users to easily
              <br />
              exchange many other
              <br />
              digital assets with
              <br />
              minimal slippage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
