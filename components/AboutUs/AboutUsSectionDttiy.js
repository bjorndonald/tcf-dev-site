import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function AboutUsSectionDttiy ({ tl }) {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.aboutUsSectionDttiy',
          start: 'top 150px',
          end: 'bottom center',
          scrub: 4,
          pin: true
        }
      })
      .add('start')
      .from(
        '.aboutUsSectionDttiy .gaspSlideLeft',
        { x: -50, opacity: 0 },
        'start'
      )
      .from(
        '.aboutUsSectionDttiy .gaspSlideRight',
        { x: 50, opacity: 0 },
        'start'
      )
  }, [tl])
  return (
    <div className='aboutUsSectionDttiy py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row d-flex align-items-center '>
          <div className='col-12 col-md-6 gaspSlideLeft'>
            <div className='aboutUsSectionDttiyImg text-center '>
              <Image
                src='/images/iphone_skeleton.png'
                alt='Discover the trader in you'
                width={330}
                height={600}
              />
            </div>
          </div>
          <div className='col-12 col-md-6 gaspSlideRight'>
            <div className='sectionTitleWrap mb-5 '>
              <h2>
                A look into
                <br />
                our model
              </h2>
              <p>
                How Traders Central Fund <br />
                makes money
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
