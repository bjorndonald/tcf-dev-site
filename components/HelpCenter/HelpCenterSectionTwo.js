import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'

export default function HelpCenterSectionTwo () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".helpCenterSectionTwo",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".helpCenterSectionTwo .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxFour", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');

  // }, [tl]);

  return (
    <div className='helpCenterSectionTwo py-5 d-flex align-items-center heightHv'>
      <div className='container '>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2>Q&A's by product</h2>
            </div>
          </div>
        </div>
        <div
          style={{ margin: 'auto' }}
          className='row col-11 eyntkBoxs d-flex align-items-stretch justify-content-center'
        >
          <div className='col-10 col-md-5 '>
            <div className='eyntkBox eyntkBoxOne'>
              <h3 className='mb-4'>Fund</h3>
              {/* <Image
                src='/images/piggy.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>
                Learn how to get <br />
                funded in 24 hrs
              </p>
            </div>
          </div>

          <div className='col-10 col-md-5 '>
            <div className='eyntkBox eyntkBoxTwo'>
              <h3 className='mb-4'>Crypto</h3>
              {/* <Image
                src='/images/token.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>
                How to get
                <br />
                started with our
                <br />
                spot cryptos
              </p>
            </div>
          </div>

          <div className='col-10 col-md-5 '>
            <div className='eyntkBox eyntkBoxThree'>
              <h3 className='mb-4'>Tokens</h3>
              {/* <Image
                src='/images/bitcoin.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>
                Help with sending,
                <br />
                receiving and
                <br />
                redeeming
              </p>
            </div>
          </div>

          <div className='col-10 col-md-5 '>
            <div className='eyntkBox eyntkBoxFour'>
              <h3 className='mb-4'>Liquidity</h3>
              {/* <Image
                src='/images/laquidty.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>
                Prop fund
                <br />
                startup help
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
