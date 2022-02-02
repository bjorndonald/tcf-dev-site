import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap'

export default function HelpCenterSectionTwo() {
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
          className='row col-12 eyntkBoxs d-flex align-items-stretch justify-content-center'
        >
          <Link
            href={{
              pathname: '/help-center/sections',
              query: { name: 'Fund' }
            }}
          >
            <div className='col-10 col-md-5 d-flex justify-content-center'>
              <div className='eyntkBox eyntkBoxOne' style={{ background: '#000' }}>
                {/* <div className='background'></div> */}
                <h3 className='mb-2'>Fund</h3>

                <p>
                  Learn how to get <br />
                  &nbsp;funded in 24 hrs
                </p>

                <video
                  loop={true}
                  playsInline
                  className='float-right mb-0'
                  autoPlay='autoplay'
                  muted={true}
                >
                  <source src='/videos/home/boxOne.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>
          </Link>

          <Link
            href={{
              pathname: '/help-center/crypto',
              query: { name: 'Crypto' }
            }}
          >
            <div className='col-10 col-md-5 d-flex justify-content-center'>
              <div className='eyntkBox eyntkBoxTwo' style={{ background: '#000' }}>
                {/* <div className='background'></div> */}
                <h3 className='mb-2'>Crypto</h3>

                <p>
                  How to get
                  <br />
                  &nbsp;started with our
                  <br />
                  &nbsp;spot cryptos
                </p>
                <video
                  loop={true}
                  playsInline
                  className='float-right mt-2'
                  autoPlay='autoplay'
                  muted={true}
                >
                  <source src='/videos/home/boxFour.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>
          </Link>

          <Link
            href={{
              pathname: '/help-center/articles',
              query: { name: 'Traders Central Token', parent: 'Tokens' }
            }}
          >
            <div className='col-10 col-md-5 d-flex justify-content-center'>
              <div className='eyntkBox eyntkBoxThree' style={{ background: '#000' }}>
                {/* <div className='background'></div> */}
                <h3 className='mb-2'>Tokens</h3>

                <p>
                  Help with sending,
                  <br />
                  &nbsp;receiving and
                  <br />
                  &nbsp;redeeming
                </p>
                <video
                  loop={true}
                  playsInline
                  className='float-right mt-2'
                  autoPlay='autoplay'
                  muted={true}
                >
                  <source src='/videos/home/boxTwo.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                
              </div>
            </div>
          </Link>
          <Link
            href={{
              pathname: '/help-center/liquidity',
              query: { name: 'Liquidity' }
            }}
          >
            <div className='col-10 col-md-5 d-flex justify-content-center'>
              <div className='eyntkBox eyntkBoxFour' style={{ background: '#000' }}>
                {/* <div className='background'></div> */}
                <h3 className='mb-2'>Liquidity</h3>
                {/* <Image
                src='/images/laquidty.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
                <p>
                  Prop fund
                  <br />
                  &nbsp;startup help
                </p>
                <video
                  loop={true}
                  playsInline
                  className='float-right mt-2'
                  autoPlay='autoplay'
                  muted={true}
                >
                  <source src='/videos/home/boxThree.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
               
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
