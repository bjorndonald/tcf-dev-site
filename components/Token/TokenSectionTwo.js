import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function TokenSectionTwo () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".tokenSectionTwo",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 5,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".tokenSectionTwo", {opacity : 0  }, 'start');
  // }, [tl]);
  return (
    <div className='tokenSectionTwo py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className='text-center'>
              <img src='/images/tokenVid.jpg' />
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/D1X5SuR-24M" title="YouTube video player" frameborder={0} allow={accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture} allowfullscreen={}></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
