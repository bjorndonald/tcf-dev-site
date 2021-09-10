import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'

export default function ContactSection () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.sectionContactUs',
  //         start: 'top center',
  //         end: 'bottom bottom',
  //         scrub: 1,
  //         pin: true
  //       }
  //     })
  //     .add('start')
  //     .from(
  //       '.sectionContactUs .sectionTitleWrap',
  //       { y: -50, opacity: 0 },
  //       'start'
  //     )
  //     .from('.sectionContactUs .gaspSlideLeft', { x: -50, opacity: 0 }, 'start')
  //     .from('.sectionContactUs .gaspSlideRight', { x: 50, opacity: 0 }, 'start')
  // }, [tl])
  return (
    <div className='sectionContactUs py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contactUsH py-5 sectionTitleWrap'>
              <h2>Let&apos;s get you funded</h2>
            </div>
          </div>

          <div className='col-md-12 d-flex justify-content-center gaspSlideRight'>
            <div className='contactUsFormWrapper p col-md-6'>
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
                  <select className='fCountry custom-select-box'>
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
                  <p className='d-flex align-items-center justify-content-center'>
                    <label className='checkbox-container mr-2'>
                      <input type='checkbox' values='yes' />
                      <span className='checkmark'></span>
                    </label>
                    {/* <input type='checkbox' value='yes' />  */}
                    <span>Send me helpful info.</span>
                  </p>
                </div>
                <div className='fieldWrap'>
                  <p>
                    By clicking &quot;Get started&quot;, you agree to
                    Traderscentral <br />
                    Terms of Use and Privacy Policy.
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
