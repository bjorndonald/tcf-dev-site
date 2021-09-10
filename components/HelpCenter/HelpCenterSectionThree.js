import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'
import Link from 'next/link'

export default function HelpCenterSectionThree (props) {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".helpCenterSectionThree",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".helpCenterSectionThree .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //   .from(".helpCenterSectionThree .bigCard", { x: -50, opacity : 0, duration: 0.8 },">-0", 'start')
  //   .from(".helpCenterSectionThree .smallCardOne", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionThree .smallCardTwo", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionThree .smallCardThree", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');
  // }, [tl]);
  console.log(props.articles[0])

  return (
    <div className='helpCenterSectionThree py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-5'>
              <h2>Latest Updates</h2>
            </div>
          </div>
        </div>

        <div className='row justify-content-center'>
          {/* <div className='row col-lg-12 article '>
            <div className=' left'>
              <div className='placeholder-image'></div>
            </div>

            <div className=' right d-flex justify-content-center flex-column align-items-center text-center'>
              <h1>Article Title</h1>
              <p>
                Exploring the history of forex trading <br />
                and how it shapes our world today.
              </p>
            </div>
          </div> */}

          {props.articles.slice(0, 2).map(article => (
            <div className='row col-12 article '>
              <div className=' left col-md-4'>
                <div className='image'>{article.image}</div>
              </div>

              <div className='right col-md-4 justify-content-center flex-column align-items-center text-center'>
                <a target='article' href={article.link}>
                  <h1>{article.title}</h1>
                </a>
                <p>{article.description.substr(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
