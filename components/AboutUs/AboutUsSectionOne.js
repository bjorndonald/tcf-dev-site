import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function AboutUsSectionOne () {
  const router = useRouter()
  // useEffect(() => {
  //   tl.from(".aboutUsSectionOne", {opacity: 0, duration: 0.8,  ease:'easeIn'})
  //   .from(".aboutUsSectionOne h1", {x: -100,opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
  //   .from(".aboutUsSectionOne .aboutUsSectionOneImg", {x: 100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
  // }, [tl]);
  return (
    <div className='aboutUsSectionOne d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='aboutUsSectionOneTitle '>
              <h1 className=''>Decentralising finance for all</h1>
            </div>
          </div>

          <div className='col-12'>
            <div className='aboutUsSectionOneImg'>
              <img
                src='/images/aboutUsImage.jpg'
                alt='Decentralising Finance For All'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
