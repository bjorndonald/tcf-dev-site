import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function AboutUsSectionJotc ({ tl }) {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.aboutUsSectionJotc',
          start: 'top 150px',
          end: 'bottom center',
          scrub: 4,
          pin: true
        }
      })
      .add('start')
      .from(
        '.aboutUsSectionJotc .gaspSlideLeft',
        { x: -50, opacity: 0 },
        'start'
      )
      .from(
        '.aboutUsSectionJotc .gaspSlideRight',
        { x: 50, opacity: 0 },
        'start'
      )
  }, [tl])
  return (
    <div className='aboutUsSectionJotc py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row d-flex align-items-center helpCenterSectionFiveOne'>
          <div className='col-12  gaspSlideLeft'>
            <div className='sectionTitleWrap mb-5 flex-column d-flex align-items-center'>
              <h2>Join Our Trading Community</h2>
              <p className='mt-2 mb-5'>
                Meeting over 4,000 traders from 175 countries
              </p>
              <div className='button'>
                <a
                  className=' btn btn-black px-3 py-1'
                  href='https://t.me/Traderscentralchatroom'
                  target='_blank'
                >
                  Accept Invite
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-6 helpCenterSectionFiveTwo gaspSlideRight">
            <div className="sectionTitleWrap text-center mb-5">
              <Image
                src="/images/aboutUsSectionJotc.jpg" 
                alt="Join Our Trading Community" 
                width={540}
                height={405}
                />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
