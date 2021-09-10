import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function HelpCenterSectionThree () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".helpCenterSectionThree",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".helpCenterSectionThree .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //   .from(".helpCenterSectionThree .bigCard", { x: -50, opacity : 0, duration: 0.8 },">-0", 'start')
  //   .from(".helpCenterSectionThree .smallCardOne", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionThree .smallCardTwo", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionThree .smallCardThree", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');
  // }, [tl]);

  return (
    <div className='helpCenterSectionThree py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-5'>
              <h2>Latest Updates</h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='row col-lg-12 article '>
            <div className='col-12 col-md-6 px-2'>
              <div className='placeholder-image'></div>
            </div>

            <div className='col-12 col-md-6 px-2 pl-5 d-flex justify-content-center flex-column align-items-center text-center'>
              <h1>Article Title</h1>
              <p>
                Exploring the history of forex trading <br />
                and how it shapes our world today.
              </p>
            </div>
          </div>

          <div className='row col-lg-12 article '>
            <div className='col-12 col-md-6 px-2'>
              <div className='placeholder-image'></div>
            </div>

            <div className='col-12 col-md-6 px-2 pl-5 d-flex justify-content-center flex-column align-items-center text-center'>
              <h1>Article Title</h1>
              <p>
                Learn the different terminologies,
                <br />
                understand its history and become
                <br />
                an expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
