import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import { gsap } from 'gsap/dist/gsap'

export default function FundingSectionFour () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".fundingSectionFour",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 1,
  //       pin:true
  //     }
  //   })
  //   .add("start")
  //   .from(".fundingSectionFour .sectionTitleWrap", { x: 50, opacity : 0 }, "start")
  //   .from(".fundingSectionFour .gaspSlideRight", { x: -50, opacity : 0 }, "start");

  // }, [tl]);
  return (
    <div className='fundingSectionFour py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-5'>
              <h2>Everything you need to know</h2>
              <p>Relevant information regarding your preffered plan</p>
            </div>
          </div>
          <div className='col-12 gaspSlideRight'>
            <div className='row mt-5 justify-content-center'>
              <h4 className='m-2'>Trading Rules</h4>
              <h4 className='m-2'>Position Size Guide</h4>
              <h4 className='m-2'>Capital Growth</h4>
              <h4 className='m-2'>Withdrawals</h4>
            </div>

            <div className='row mt-5'>
              <div className='col-md-6 col-12 p-3'>
                <div className='placeholder-image'>
                  <span>See</span>
                </div>
              </div>
              <div className='col-md-6 col-12 p-3'>
                <div className='placeholder-image'>
                  <span>See</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
