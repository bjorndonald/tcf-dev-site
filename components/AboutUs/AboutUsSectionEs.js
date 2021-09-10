import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})

export default function AboutUsSectionEs () {
  // useEffect(() => {
  //     gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".aboutUsSectionEs",
  //           start: "top 150px",
  //           end: "bottom center",
  //           scrub: 4,
  //           pin:true
  //         }
  //     })
  //     .add('start')
  //     .from(".aboutUsSectionEs h2", { y: 50, opacity : 0 }, 'start')
  //     .from(".aboutUsSectionEs .owlEs", { y: 50, opacity : 0 }, 'start');
  // }, [tl]);
  return (
    <div className='aboutUsSectionEs  d-flex align-items-center '>
      <div className='container'>
        <div className='row'>
          <div className='col-12 pb-5'>
            <h2>Ecosystem</h2>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className=' owlEs col-12 col-md-6'>
            <OwlCarousel
              className='owl-theme aboutSlider'
              items={1}
              lazyLoad={true}
              nav={true}
            >
              <div className='item aboutSliderOne'>
                <div className='aboutSliderC'>
                  <h3>TC.Crypto</h3>
                  <p>
                    Buy and sell cryptocurrencies with our top tier liquidity,
                    getting you in and out of the market with minimal slippage.
                  </p>
                  <a target='_blank' href='https://tccrypto.io/'>
                    LEARN MORE
                  </a>
                </div>
              </div>
              {/* TC.Fund
Connecting retail traders to backers to provide them with start up capital.
LEARN MORE */}
              <div className='item aboutSliderTwo'>
                <div className='aboutSliderC'>
                  <h3>TC.Fund</h3>
                  <p>
                    Connecting retail traders to backers to provide them with
                    start up capital.
                  </p>
                  <a
                    target='_blank'
                    href='https://help.traderscentralfund.com/en/'
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
              {/* TC.Bridge
Our very own tailor-made brokerage provides industry beating spreads for proprietary and retail traders
LEARN MORE */}
              <div className='item aboutSliderThree'>
                <div className='aboutSliderC'>
                  <h3>TC.Bridge</h3>
                  <p>
                    Our very own tailor-made brokerage provides industry beating
                    spreads for proprietary and retail traders.
                  </p>
                  <a
                    target='_blank'
                    href='https://help.traderscentralfund.com/en/collections/3060993-broker-information'
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
              {/* TC.Capital
Providing liquidity to over 80 funds allowing anyone to start their own prop firm.
LEARN MORE */}
              <div className='item aboutSliderFour'>
                <div className='aboutSliderC'>
                  <h3>Prime Bridge</h3>
                  <p>
                    Providing liquidity to over 80 funds allowing anyone to
                    start their own prop firm.
                  </p>
                  <a target='_blank' href='https://traderscentral.capital/'>
                    LEARN MORE
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
