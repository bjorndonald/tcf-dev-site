import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
export default function ArchiveSectionTwo2 () {
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".archiveSectionTwo2",
  //       start: "top 250px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .from(".archiveSectionTwo2 .row", { x: 150, opacity : 0 });
  // }, [tl]);
  return (
    <div className='archiveSectionTwo2 pt-5 d-flex align-items-center overFlowH'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 owSliderW'>
            <OwlCarousel
              className='owSlider owSliderTA owl-carousel owl-theme'
              items={2}
              loop={false}
              lazyLoad={true}
              nav={true}
              margin={10}
              responsive={{
                0: { items: 1 },
                767: { items: 2 },
                1000: { items: 3 }
              }}
            >
              <div className='owSliderbox owSliderOne owSliderTATwo'>
                <a className='card' href='#'>
                  <div>
                    <h2>Round-Ups</h2>
                    <p>Explore archive &gt;</p>
                  </div>
                </a>
              </div>

              <div className='owSliderbox'>
                <a className='card' href='#'>
                  <h3>Investin 101{':'} Investing Basics for Beginners</h3>
                  <div className='auther'>By Andrew Goldman</div>
                  <p>
                    Want to invest like a pro? Learn the basics of investing
                    from us and we&apos;ll have you on the road to investing in
                    no time
                  </p>
                </a>
              </div>

              <div className='owSliderbox'>
                <a className='card' href='#'>
                  <h3>Investin 101{':'} Investing Basics for Beginners</h3>
                  <div className='auther'>By Andrew Goldman</div>
                  <p>
                    Want to invest like a pro? Learn the basics of investing
                    from us and we&apos;ll have you on the road to investing in
                    no time
                  </p>
                </a>
              </div>

              <div className='owSliderbox'>
                <a className='card' href='#'>
                  <h3>Investin 101{':'} Investing Basics for Beginners</h3>
                  <div className='auther'>By Andrew Goldman</div>
                  <p>
                    Want to invest like a pro? Learn the basics of investing
                    from us and we&apos;ll have you on the road to investing in
                    no time
                  </p>
                </a>
              </div>

              <div className='owSliderbox'>
                <a className='card' href='#'>
                  <h3>Investin 101{':'} Investing Basics for Beginners</h3>
                  <div className='auther'>By Andrew Goldman</div>
                  <p>
                    Want to invest like a pro? Learn the basics of investing
                    from us and we&apos;ll have you on the road to investing in
                    no time
                  </p>
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
