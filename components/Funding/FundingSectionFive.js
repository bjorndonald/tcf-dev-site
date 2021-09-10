import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import { gsap } from 'gsap/dist/gsap'

export default function FundingSectionFive () {
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
    <div
      style={{ marginTop: '20vh' }}
      className='sectionContactUs py-5 d-flex align-items-center heightHv'
    >
      <div className='container'>
        <div className='row flex-column align-items-center'>
          <div className='col-12'>
            <div className='contactUsH py-5 sectionTitleWrap'>
              <h2>Let&apos;s get you funded</h2>
            </div>
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
                    Send me helpful info.
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
