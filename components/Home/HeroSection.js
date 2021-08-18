import React, { useEffect } from 'react'
import { gsap, Power4 } from 'gsap'

export default function HeroSection ({ tl }) {
  useEffect(() => {
    tl.to('.sectionOne', {
      opacity: 1,
      duration: 0.8,
      delay: 0.8,
      ease: Power4.easeIn
    })
      .from(
        '.HomeHeroVideo',
        { x: '+=50', opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0'
      )
      .from(
        '.sectionOne h1',
        { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
      .from(
        '.sectionOne p',
        { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
      .from(
        '.sectionOne a',
        { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
        '>-0.5'
      )
  }, [tl])

  return (
    <div className='sectionOne d-flex align-items-center py-5'>
      <div className='wrapper '>
        <div className='row py-5 d-flex align-items-stretch'>
          <div className='col-12 col-md-6  d-flex align-items-center'>
            <div className='hero-heading'>
              <h1 className=''>Designed for everyone</h1>
              <p className=''>
                Suite of products to help boost your <br />
                financial positioning
              </p>
              <a
                className=' btn btn-black px-3 py-1'
                href='https://dash.traderscentral.fund/login'
                target='_blank'
              >
                Sign-up
              </a>
            </div>
          </div>

          <div className='col-12 col-md-6  align-right'>
            <div className='HomeHeroVideo'>
              <video loop={true} autoPlay='autoplay' muted={true}>
                <source src='/videos/home_header_a-new.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
