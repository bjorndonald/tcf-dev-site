import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function LiquiditySectionOne () {
  // useEffect(() => {
  //   tl.from('.liquiditySectionOne', {
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  //     .from(
  //       '.liquiditySectionOne .liquiditySectionOneVideo',
  //       { opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>0'
  //     )
  //     .from(
  //       '.liquiditySectionOne h1',
  //       { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.liquiditySectionOne h2',
  //       { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.liquiditySectionOne p',
  //       { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.liquiditySectionOne a',
  //       { x: -100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  // }, [tl])
  return (
    <div className='liquiditySectionOne py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 d-flex align-items-center justify-content-center liquiditySectionOneL'>
            <div className='heading d-flex flex-column align-items-center'>
              {/* <h1>TraderCentral Capital</h1> */}
              <h1>Start your Prop Fund in 24 hours</h1>
              <p className='my-3' style={{ textAlign: 'center' }}>
                Suite of products to help
                <br />
                boost your financial positioning
              </p>
              <div className='button mt-3'>
                <a className=' btn btn-black px-3 ' href='#'>
                  Sign-up
                </a>
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-md-6 liquiditySectionOneR align-right">
            <div className="liquiditySectionOneVideo">
              <video loop={true} autoPlay="autoplay" muted={true}>
                <source src="/videos/liquidityOne.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
