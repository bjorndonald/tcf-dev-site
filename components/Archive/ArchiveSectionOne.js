import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function ArchiveSectionOne () {
  // useEffect(() => {
  //   tl.from(".archiveSectionOne", {opacity: 0, duration: 0.8,  ease:'easeIn'})
  //   .from(".archiveSectionOne h1", {x: 100,opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
  //   .from(".archiveSectionOne p", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
  // }, [tl]);
  return (
    <div className='archiveSectionOne pt-5 d-flex align-items-center '>
      <div className='container'>
        <div className='row '>
          <div className='col-12'>
            <h1 style={{ opacity: 1 }}>Stay updated with TC Bites</h1>
            {/* <p>Why Stop Learning, Checkout old video from our vault.</p> */}
          </div>
        </div>
        <div className=' row filters  justify-content-center align-items-center'>
          <a href='' className='btn btn-black mx-3'>
            Forex
          </a>
          <a href='' className='btn btn-black mx-3'>
            Crypto
          </a>
          <a href='' className='btn btn-black mx-3'>
            Stock
          </a>
          <a href='' className='btn btn-black mx-3'>
            All
          </a>
        </div>

        <div className='row articles col-10 ' style={{ margin: 'auto' }}>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>Top 5 Crypto News</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>What is Arbitrage</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>Top 5 Crypto News</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>What is Arbitrage</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>Top 5 Crypto News</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>What is Arbitrage</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>Top 5 Crypto News</h2>
          </div>
          <div className='col-md-6 article'>
            <div className='placeholder-image'></div>
            <h2>What is Arbitrage</h2>
          </div>
        </div>
        <div className='row buttons justify-content-center '>
          <a href='' className='btn btn-black'>
            More Bites
          </a>
        </div>
      </div>
    </div>
  )
}
