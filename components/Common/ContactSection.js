import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'

export default function ContactSection ({ tl }) {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.sectionContactUs',
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1,
          pin: true
        }
      })
      .add('start')
      .from(
        '.sectionContactUs .sectionTitleWrap',
        { y: -50, opacity: 0 },
        'start'
      )
      .from('.sectionContactUs .gaspSlideLeft', { x: -50, opacity: 0 }, 'start')
      .from('.sectionContactUs .gaspSlideRight', { x: 50, opacity: 0 }, 'start')
  }, [tl])
  return (
    <div className='sectionContactUs py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contactUsH py-5 sectionTitleWrap'>
              <h2>Let&apos;s get you funded</h2>
            </div>
          </div>
          <div className='col-md-6 gaspSlideLeft'>
            <Image
              src='/images/ContactUsCardImage.png'
              alt='Image'
              width={1645}
              height={930}
            />
          </div>
          <div className='col-md-6 gaspSlideRight'>
            <div className='contactUsFormWrapper p'>
              <form>
                <div className='emailWrap fieldWrap'>
                  <input
                    type='email'
                    className='fEmail'
                    placeholder='Email Address'
                  />
                </div>
                <div className='passWrap fieldWrap'>
                  <input
                    type='password'
                    className='fPass'
                    placeholder='Password'
                  />
                </div>
                <div className='countryWrap fieldWrap'>
                  {/* <div className='arrow-down'></div> */}
                  <select className='fCountry '>
                    <option>Country</option>
                    <option>Option Two</option>
                    <option>Option three</option>
                  </select>
                </div>
                <div className='submitWrap fieldWrap'>
                  <input
                    type='submit'
                    className='btn btnSubmit'
                    value='Get Started'
                  />
                </div>
                <div className='yesCheckBox fieldWrap'>
                  <p>
                    <input type='checkbox' value='yes' /> Send me helpfull info.
                  </p>
                </div>
                <div className='fieldWrap'>
                  <p>
                    By clicking &quot;Get started&quot;, you agree to
                    Traderscentral Terms of Use and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
