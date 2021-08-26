import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function HelpCenterSectionFour () {
  // useEffect(() => {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".helpCenterSectionFour",
  //         start: "top 150px",
  //         end: "bottom center",
  //         scrub: 4,
  //         pin:true
  //       }
  //     })
  //     .add('start')
  //     .from(".helpCenterSectionFour .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //     .from(".helpCenterSectionFour .cardOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
  //     .from(".helpCenterSectionFour .cardTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //     .from(".helpCenterSectionFour .cardThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');
  // }, [tl]);
  return (
    <div className='helpCenterSectionFour py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center '>
              <h2>Discover the trader in you</h2>
            </div>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-md-6 px-3'>
            <div className='placeholder-image'></div>
          </div>
          <div className='col-md-5 list'>
            <h1>1. Forex</h1>
            <h3>2. Stocks</h3>
            <h3>3. Crypto</h3>
            <h3>4. Meme</h3>
            <h3>Culture</h3>
            <h3>Investing</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
