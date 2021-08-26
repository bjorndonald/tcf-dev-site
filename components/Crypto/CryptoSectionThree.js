import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function CryptoSectionThree () {
  // useEffect(() => {
  //   tl.to('.cryptoSectionThree', {
  //     opacity: 1,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  // }, [tl])
  return (
    <div className='cryptoSectionThree py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h1 className=''>Get started with the digitally economy</h1>
            <div className='row'>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/bitcoin.svg' alt='' />
                <p className=''>Bitcoin</p>
                <span className=''>$46,567.00</span>
                <span className='green '>+5.46%</span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/ethereum.svg' alt='' />
                <p className=''>Ethereum</p>
                <span className=''>$3,239.87</span>
                <span className='green '>+7.13%</span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/dogecoin.svg' alt='' />
                <p className=''>Dogecoin</p>
                <span className=''>$0.28</span>
                <span className='green '>+6%</span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/bitcoin-cash.svg' alt='' />
                <p className=''>Bitcoin Cash</p>
                <span className=''>$631.26</span>
                <span className='green '>+4.49%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
