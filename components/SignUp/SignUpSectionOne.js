import React from 'react'
import RightCaret from './RightCaret'
import Link from 'next/link'
import Image from 'next/image'

function signUpSectionOne () {
  return (
    <div className='signUpSectionOne'>
      <nav className='signup'>
        <Link href='/'>
          <a className='navbar-brand navClose'>
            <Image
              src='/images/logo.png'
              alt='Traders Central Fund Logo'
              width={200}
              height={51.02}
            />
          </a>
        </Link>
      </nav>
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
              <RightCaret />
            </a>
          </div>
        </div>
        <div className='page-option'>
          <img src='/images/signup/crypto.png' alt='' />
          <div className='column'>
            <h4>Crypto</h4>
            <a className='btn btn-black'>
              I want to trade cryptocurrencies <RightCaret />
            </a>
          </div>
        </div>
        <div className='page-option'>
          <img src='/images/signup/liquidity.png' alt='' />
          <div className='column'>
            <h4>Liquidity</h4>
            <a className='btn btn-black'>
              I want to start a prop fund in 24 hours <RightCaret />
            </a>
          </div>
        </div>
        <div className='page-option'>
          <img src='/images/signup/tools.png' alt='' />
          <div className='column'>
            <h4>Funding</h4>
            <a className='btn btn-black'>
              I want to access trading software <RightCaret />
            </a>
          </div>
        </div>
      </div>

      {/* <div className='link-row'>
        <Link href='/home' className='link'>
          <a>Back to Hompage</a>
        </Link>
      </div> */}
    </div>
  )
}

export default signUpSectionOne
