import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionFive () {
  // useEffect(() => {
  //   tl.from('.cryptoSectionThree', {
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  // }, [tl])
  return (
    <div className='cryptoSectionFive py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row py-5 flex-column align-items-center justify-content-between'>
          <h1>
            Sign Up to Buy & Sell Crypto In <br />
            Seconds And Secure Your Way <br />
            To digital currencies
            <img src='/images/crypto/ios-rocket.png' alt='' />
          </h1>
          <hr />

          <div className='row mt-5 flex-column align-items-center justify-content-between'>
            <div className='cryptoTextWrap'>
              <input type='text' placeholder='Enter Email' />
              <a href='' className='btn btn-moon'>
                To The Moon
                <i className='fa fa-rocket m-1' aria-hidden='true'></i>
              </a>
            </div>
          </div>
          <div className='row mt-3 justify-content-center'>
            <a href='' className='btn btn-blue'>
              Policies
            </a>
            <a href='' className='btn btn-blue'>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
