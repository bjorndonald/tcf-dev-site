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
                <span id='bitcoinPriceBox' className=''></span>
                <span id='bitcoinPriceChangeBox' className='green '></span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/ethereum.svg' alt='' />
                <p className=''>Ethereum</p>
                <span id='ethereumPriceBox' className=''></span>
                <span id='ethereumPriceChangeBox' className='green '></span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/dogecoin.svg' alt='' />
                <p className=''>Dogecoin</p>
                <span id='dogecoinPriceBox' className=''></span>
                <span id='dogecoinPriceChangeBox' className='green '></span>
              </div>
              <div className='col-md-3 d-flex flex-column align-items-center'>
                <img src='/images/crypto/bitcoin-cash.svg' alt='' />
                <p className=''>Bitcoin Cash</p>
                <span id='bitcoin-cashPriceBox' className=''></span>
                <span id='bitcoin-cashPriceChangeBox' className='green '></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
