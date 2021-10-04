import React from 'react'

function signUpSectionOne () {
  return (
    <div className='signUpSectionOne'>
      <div className='text-center'>
        <h1>Lets get started</h1>
      </div>

      <div className='page-options'>
        <div className='page-option'>
          <img src='/images/signup/landing.png' alt='' />
          <div className='column'>
            <h4>Funding</h4>
            <a className='btn btn-black'>I want to get funded in 24 hours</a>
          </div>
        </div>
        <div className='page-option'>
          <img src='/images/signup/crypto.png' alt='' />
          <div className='column'>
            <h4>Crypto</h4>
            <a className='btn btn-black'>I want to trade cryptocurrencies</a>
          </div>
        </div>
        <div className='page-option'>
          <img src='/images/signup/liquidity.png' alt='' />
          <div className='column'>
            <h4>Liquidity</h4>
            <a className='btn btn-black'>I want to start a prop fund</a>
          </div>
        </div>
        <div className='page-option'>
          <img src='/images/signup/tools.png' alt='' />
          <div className='column'>
            <h4>Funding</h4>
            <a className='btn btn-black'>I want to access trading software</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signUpSectionOne
