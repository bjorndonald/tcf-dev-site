import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'

export default function TradingBasicSectionOne () {
  // useEffect(() => {
  //   tl.from(".tradingBasicSectionOne", {opacity: 0, duration: 0.8,  ease:'easeIn'})
  //   .from(".tradingBasicSectionOne h1", {x: -100,opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
  //   .from(".tradingBasicSectionOne p", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5")
  //   .from(".tradingBasicSectionOne a", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
  // }, [tl]);
  return (
    <div className='tradingBasicSectionOne py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 col-md-6  d-flex align-items-center'>
            <div className=''>
              <h1>Discover The Trader In You</h1>
              <p>
                New ways to learn who you are as a trader we can all be traders,
                our time is now!
              </p>
              <a
                className=' btn btn-black px-3 py-1'
                target='_blank'
                href='https://dash.traderscentral.fund/sign-up'
              >
                Start the class
              </a>
            </div>
          </div>

          <div className='col-12 col-md-6 align-right'></div>
        </div>
      </div>
    </div>
  )
}
