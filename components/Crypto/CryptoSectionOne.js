import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { useRouter } from 'next/router'
import $ from 'jquery'

export default function CryptoSectionOne () {
  const [email, setEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    return () => {}
  }, [])
  // useEffect(() => {
  //   tl.to('.cryptoSectionOne', {
  //     opacity: 1,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  //     .to(
  //       '.cryptoSectionOne h1',
  //       { x: 0, opacity: 1, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     // .from(
  //     //   '.cryptoSectionOne h2',
  //     //   { x: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //     //   '>-0.5'
  //     // )
  //     .to(
  //       '.cryptoSectionOne .cryptoTextWrap .btn',
  //       { x: 0, opacity: 1, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
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
    <div className='cryptoSectionOne py-5 d-flex align-items-center '>
      <div className='background'></div>
      <canvas id='BtcUsdChart'></canvas>
      <div className='container d-flex flex-column align-items-center justify-content-between'>
        <div className='row py-5 flex-column align-items-center justify-content-between'>
          <h1>
            Trade the most popular <br />
            digital currencies
          </h1>

          <div className='row mt-5 flex-column align-items-center justify-content-between'>
            <h2 className='mb-4'>Buy & Sell Crypto In Seconds!</h2>
            <form onSubmit={e => e.preventDefault()} className='cryptoTextWrap'>
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
        </div>
      </div>
    </div>
  )
}
