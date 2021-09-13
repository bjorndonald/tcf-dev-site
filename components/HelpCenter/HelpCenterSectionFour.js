import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'

const data = {
  one: <img src='/images/basics/basicsOne.jpg' alt='' />,
  two: <img src='/images/basics/basicsTwo.jpg' alt='' />,
  three: <img src='/images/basics/basicsThree.jpg' alt='' />,
  four: <img src='/images/basics/basicsFour.jpg' alt='' />
}

export default function HelpCenterSectionFour () {
  const [image, setImage] = useState(
    <img src='/images/basics/basicsOne.jpg' alt='' />
  )
  const activate = e => {
    $(e.target)
      .parent()
      .find('h3')
      .removeClass('active')
    $(e.target).addClass('active')
    setImage(data[$(e.target).attr('id')])
  }
  // useEffect(() => {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".helpCenterSectionFour",
  //         start: "top 150px",
  //         end: "bottom center",
  //         scrub: 4,
  //         pin:true
  //       }
  //     })
  //     .add('start')
  //     .from(".helpCenterSectionFour .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //     .from(".helpCenterSectionFour .cardOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
  //     .from(".helpCenterSectionFour .cardTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //     .from(".helpCenterSectionFour .cardThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');
  // }, [tl]);
  return (
    <div className='helpCenterSectionFour py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center '>
              <h2>Discover the trader in you</h2>
            </div>
          </div>
        </div>

        <div
          style={{ margin: 'auto' }}
          className='row col-9 body d-flex align-items-center justify-content-between'
        >
          <div className='col-md-6  article-images'>{image}</div>
          <div className=' list'>
            <h3 id='one' onClick={activate} className='active'>
              1. Forex
            </h3>
            <h3 id='two' onClick={activate}>
              2. Stocks
            </h3>
            <h3 id='three' onClick={activate}>
              3. Crypto
            </h3>
            <h3 id='four' onClick={activate}>
              4. Meme
            </h3>
            <h4>Culture</h4>
            <h4>Investing</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
