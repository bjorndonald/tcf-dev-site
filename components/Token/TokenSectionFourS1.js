import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function TokenSectionFourS1 () {
  // useEffect(() => {
  //   document.querySelectorAll('.tokenSectionSlRight .item').forEach(item => {
  //     gsap.to(item, {
  //       scrollTrigger: {
  //         trigger: item,
  //         start: 'top center',
  //         end: '20% center',
  //         scrub: true
  //       },
  //       duration: 0.8,
  //       opacity: 1,
  //       onComplete: function () {
  //         $(this).removeClass('mainAnimatedClass')
  //       }
  //     })

  //     gsap.to(item, {
  //       scrollTrigger: {
  //         trigger: item,
  //         start: '80% center',
  //         end: 'bottom center',
  //         scrub: true
  //       },
  //       duration: 0.8,
  //       opacity: 0.2,
  //       onComplete: function () {
  //         $(this).addClass('mainAnimatedClass')
  //       }
  //     })
  //   })
  // }, [tl])
  return (
    <div className='tokenSectionFour tokenSectionSl'>
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>Choose your TC Tags</h1>
        <div className='row py-5' style={{ position: 'relative' }}>
          <div
            className='col-12 mb-4 d-flex justify-content-center'
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'absolute'
              // overflow: 'hidden'
              // zIndex: 300
            }}
          >
            <div className='tokenSectionSlLeft stickyContent'>
              <div
                className='cytI text-right'
                // style={{ width: 800, height: 300 }}
              >
                {/* <sup>Choose your</sup> TC TAGS{' '} */}
                {/* <Image
                  src='/images/tcTag.png'
                  alt='TC TAGS'
                  width={2002}
                  height={1147}
                /> */}
                <img
                  style={{
                    width: '40rem',
                    height: '24rem',
                    marginTop: '-5.5rem',
                    marginRight: '-1.95rem'
                  }}
                  src='/images/tcTag.png'
                  alt=''
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-12'>
            <div className='tokenSectionSlRight d-flex justify-content-center'>
              <div className='tokenSectionSlT_top'></div>
              <ul className='d-flex flex-column align-items-center'>
                <li className='item item1 active'>Myllionaire</li>
                <li className='item item2'>2ogato</li>
                <li className='item item3'>Pinky</li>
                <li className='item item4'>DarthVadar</li>
                <li className='item item5'>TrillionaireMafia</li>
                <li className='item item6'>Margo</li>
                <li className='item item7'>Asenios</li>
                <li className='item item8'>Mshan</li>
                <li className='item item9'>LeBlanc</li>
                <li className='item item10'>Jaybeeginny</li>
                <li className='item item11'>Mjmafia</li>
                <li className='item item12'>Olanrewaju</li>
                <li className='item item13'>Evanspink</li>
                <li className='item item14'>Cetral</li>
                <li className='item item15'>Margo</li>
                <li className='item item16'>Valentine</li>
                <li className='item item17'>Pulversijert</li>
                <li className='item item18'>Mrose</li>
              </ul>
              <div className='tokenSectionSlT_bottom'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
