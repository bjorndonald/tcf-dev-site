import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function TokenSectionFive () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.tokenSectionFive',
  //         start: 'top 150px',
  //         end: 'bottom center',
  //         scrub: 4,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from('.tokenSectionFive .gaspSlideLeft', { x: -50, opacity: 0 }, 'start')
  //     .from('.tokenSectionFive .gaspSlideRight', { x: 50, opacity: 0 }, 'start')
  // }, [tl])
  return (
    <div className='tokenSectionFive '>
      <div className='d-flex align-items-center heightHv'>
        <div className='container'>
          <div className='row  d-flex align-items-stretch'>
            <div className='col-12 mb-4 gaspSlideLeft'>
              <div className='tradingBasicI'>
                <video loop={true} autoPlay='autoplay' playsInline muted={true}>
                  <source src='/videos/tokenVideo.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* <div className="col-12 col-md-6 d-flex align-items-center mb-4 gaspSlideRight">
              <div className="tradingBasicHP ">
                <h2>Ready to learn how it works?</h2>
                <p>Read the FAQ below</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
