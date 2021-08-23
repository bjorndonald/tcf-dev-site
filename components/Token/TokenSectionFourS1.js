import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

export default function TokenSectionFourS1 ({ tl }) {
  useEffect(() => {
    document.querySelectorAll('.tokenSectionSlRight .item').forEach(item => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: '20% center',
          scrub: true
        },
        duration: 0.8,
        opacity: 1,
        onComplete: function () {
          $(this).removeClass('mainAnimatedClass')
        }
      })

      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: '80% center',
          end: 'bottom center',
          scrub: true
        },
        duration: 0.8,
        opacity: 0.2,
        onComplete: function () {
          $(this).addClass('mainAnimatedClass')
        }
      })
    })
  }, [tl])
  return (
    <div className='tokenSectionFour tokenSectionSl py-5'>
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>Choose your TC Tags</h1>
        <div className='row py-5'>
          <div className='col-6 mb-4 '>
            <div className='tokenSectionSlLeft stickyContent'>
              <div className='cytI text-right'>
                <sup>Choose your</sup> TC TAGS{' '}
                <Image
                  src='/images/choose-your-tc-tags.png'
                  alt='TC TAGS'
                  width={40}
                  height={57}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-6'>
            <div className='tokenSectionSlRight'>
              <div className='tokenSectionSlT_top'></div>
              <ul>
                <li className='item item1'>Myllionaire</li>
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
                <li className=' item18'>Mrose</li>
              </ul>
              <div className='tokenSectionSlT_bottom'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
