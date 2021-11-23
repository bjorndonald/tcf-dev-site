import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import { useRouter } from 'next/router'

export default function CryptoSectionFive () {
  const router = useRouter()
  const [email, setEmail] = useState('')
  // useEffect(() => {
  //   tl.from('.cryptoSectionThree', {
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  // }, [tl])
  const onSubmit = () => {
    console.log($('#email-info').serializeArray())
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(String(email).toLowerCase())) {
      $.ajax({
        url: 'https://api.apispreadsheets.com/data/18118/',
        type: 'post',

        data: $('#email-info').serializeArray(),
        success: function () {
          setEmail('')
          router.push('https://trade.tccrypto.io/signup')
        },
        error: function (err) {
          console.log(err)
        }
      })
    } else {
      console.log('Email is not in correct format.')
    }
  }

  function onEnter (e) {
    // e.preventDefault()
    console.log(e.keyCode)
    if (e.keyCode == 13) {
      onSubmit()
    }
  }

  return (
    <div className='cryptoSectionFive d-flex align-items-center'>
      <div className='container d-flex justify-content-center'>
        <div className='row py-5 flex-column align-items-center justify-content-between'>
          <h1>
            Sign Up to Buy & Sell Crypto In <br />
            Seconds And Secure Your Way <br />
            To digital currencies
            <img src='/images/crypto/ios-rocket.png' alt='' />
          </h1>
          <hr />

          <div className='row flex-column align-items-center justify-content-between'>
            <form
              onSubmit={e => e.preventDefault()}
              className='cryptoTextWrap'
              id='email-info'
            >
              <input
                type='text'
                name='email'
                value={email}
                onKeyDown={onEnter}
                onChange={event => setEmail(event.target.value)}
                placeholder='Enter Email'
              />
              <a onClick={onSubmit} className='btn btn-moon'>
                <span>To The Moon</span>
                <i className='fa fa-rocket m-1' aria-hidden='true'></i>
              </a>
            </form>
          </div>
          <div className='row mt-3 justify-content-center'>
            <a
              href=' https://legal.traderscentral.com/prime-bridge-llc/untitled/terms-of-use'
              className='link'
            >
              Policies
            </a>
            <a href='https://trade.tccrypto.io/login' className='link'>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
