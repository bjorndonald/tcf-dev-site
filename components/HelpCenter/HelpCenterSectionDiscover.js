import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'
import Link from 'next/link';

const seeAlso = [
 
  {
    see: {
        title: 'Stocks',
        image: '/images/essentials/essential-stock.png',
        buttonText: 'See Stocks Essentials',
        link: '/essentials/stocks',
    },
},
{
  see: {
      title: 'Crypto',
      image: '/images/essentials/essential-crypto.png',
      buttonText: 'See Crypto Essentials',
      link: '/essentials/crypto',
  },
},
{
  see: {
      title: 'Forex',
      image: '/images/essentials/essential-forex.png',
      buttonText: 'See Forex Essentials',
      link: '/essentials/forex',
  },
},
]

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

        <div className='row justify-content-center align-items-center discover-section'>
            {seeAlso.map((pos, i) => (
              <div

                className='col-md-4 mb-5'
                key={i}
              >
                <div className='text-center'>
                  <Link
                    href={pos.see.link}>
                    <a>
                      <img
                        className='rounded-circle mx-auto'
                        alt="..."
                        src={pos.see.image}
                      />
                    </a>
                  </Link>
                </div>
                <div className='text-center mt-3 mb-5'>
                <h2>{pos.see.title}</h2>
              </div>
                <div className='button text-center'>
                  <Link
                    href={pos.see.link}>
                    <a
                      rel='noopener noreferrer'
                      className='btn btn-black'
                    >
                      {pos.see.buttonText}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}
