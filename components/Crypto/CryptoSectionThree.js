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
            <h1 className=''>Get started with the digitally economy</h1>
            <div className='row'>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/bitcoin.svg' alt='' />
                <p className='my-2'>Bitcoin</p>
                <span className='my-2'>$46,567.00</span>
                <span className='green my-2'>+5.46%</span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/ethereum.svg' alt='' />
                <p className='my-2'>Ethereum</p>
                <span className='my-2'>$3,239.87</span>
                <span className='green my-2'>+7.13%</span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/dogecoin.svg' alt='' />
                <p className='my-2'>Dogecoin</p>
                <span className='my-2'>$0.28</span>
                <span className='green my-2'>+6%</span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/bitcoin-cash.svg' alt='' />
                <p className='my-2'>Bitcoin Cash</p>
                <span className='my-2'>$631.26</span>
                <span className='green my-2'>+4.49%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
