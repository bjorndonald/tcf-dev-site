import React from 'react'

function signUpSectionOne () {
  return (
    <div className='signUpSectionOne'>
      <div className='text-center'>
        <h1>Lets get started</h1>
      </div>

      <div className='page-options'>
        <div className='page-option'>
          <img src='/images/signup/funding.png' alt='' />
          <div className='column'>
            <h4>Funding</h4>
            <a className='btn btn-black'>
              I want to get funded in 24 hours
              <svg
                width='197'
                height='357'
                viewBox='0 0 197 357'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1='176.777'
                  y1='179.411'
                  x2='19.7992'
                  y2='336.388'
                  stroke='white'
                  stroke-width='28'
                  stroke-linecap='round'
                />
                <line
                  x1='176.978'
                  y1='176.777'
                  x2='20.0002'
                  y2='19.799'
                  stroke='white'
                  stroke-width='28'
                  stroke-linecap='round'
                />
              </svg>
            </a>
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
