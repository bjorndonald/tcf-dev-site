import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function TokenSectionTwo () {
  const [video, setVideo] = useState(true)
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".tokenSectionTwo",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 5,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".tokenSectionTwo", {opacity : 0  }, 'start');
  // }, [tl]);

  function videoShow () {
    // $('.tokenSectionTwo img').hide()
    // $('.tokenSectionTwo iframe').show()
    setVideo(true)
  }

  return (
    <div className='tokenSectionTwo  d-flex align-items-center '>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className='text-center'>
              {video ? (
                <iframe
                  src='https://www.youtube.com/embed/A9PO_I_j97g?autoplay=1'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
              ) : (
                <img
                  src='/images/tokenVid.jpg'
                  style={{ cursor: 'pointer' }}
                  onClick={videoShow}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
