import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'

export default function TradingBasicSectionThree ({ tl }) {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.tradingBasicSectionThree',
          start: 'top 150px',
          end: 'bottom center',
          scrub: true,
          pin: true
        }
      })
      .add('start'),
      // .from(
      //   '.tradingBasicSectionThree .sectionTitleWrap',
      //   { y: -50, opacity: 0, duration: 0.8 },
      //   'start'
      // )
      // .from(
      //   '.tradingBasicSectionThree .smallCard1',
      //   { x: 0, opacity: 1, duration: 0.8 },
      //   'start'
      // )
      // .from(
      //   '.tradingBasicSectionThree .smallCard2',
      //   { x: 0, opacity: 1, duration: 0.8 },
      //   'start'
      // )
      // .from(
      //   '.tradingBasicSectionThree .smallCard3',
      //   { x: 0, opacity: 1, duration: 0.8 },
      //   'start'
      // )
      // .from(
      //   '.tradingBasicSectionThree .smallCard4',
      //   { x: 0, opacity: 1, duration: 0.8 },
      //   'start'
      // )
      // .from('.tradingBasicSectionThree .smallCard5', {
      //   x: 0,
      //   opacity: 0,
      //   duration: 0.8
      // }),
      'start'
  }, [tl])
  return (
    <div className='tradingBasicSectionThree py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row pt-5 mt-5'>
          <div className='col-12'>
            <div className=' text-center'>
              <h2>Discover the trader in you.</h2>
            </div>
          </div>
        </div>

        <div className='row mt-5 pt-5 d-flex justify-content-center tradingBasicCCB'>
          <div className='col-12 col-lg-8 gaspSlideLeft'>
            <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-3'>
              {/* <Image
                className="card-img-right flex-auto d-none d-md-block"
                src="/images/wgyImg-01.jpg"
                data-holder-rendered="true"
                alt="Forex Market" 
                width={300}
                height={124.8}
              /> */}
              <div className='placeholder-image'>
                <span>See</span>
              </div>
              <div className='card-body ml-2 d-flex align-items-stretch '>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className="cardNum">1.</div> */}
                    <h5 className='card-title'>Forex Market</h5>
                    <p className='card-text'>
                      Exploring the history of forex trading and how it shapes
                      our world today
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-3'>
              {/* <Image
                className='card-img-right flex-auto d-none d-md-block'
                src='/images/wgyImg-02.jpg'
                data-holder-rendered='true'
                alt='Crypto currencies'
                width={300}
                height={124.8}
              /> */}
              <div className='placeholder-image'>
                <span>See</span>
              </div>
              <div className='card-body  d-flex align-items-stretch '>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className='cardNum'>2.</div> */}
                    <h5 className='card-title'>Cryptocurrencies</h5>
                    <p className='card-text'>
                      Learn the different terminoligies, understand its history
                      and become an expert
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-3'>
              {/* <Image
                className='card-img-right flex-auto d-none d-md-block'
                src='/images/wgyImg-03.jpg'
                data-holder-rendered='true'
                alt='Meme Culture Investing'
                width={300}
                height={124.8}
              /> */}
              <div className='placeholder-image'>
                <span>See</span>
              </div>
              <div className='card-body  d-flex align-items-stretch '>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className='cardNum'>3.</div> */}
                    <h5 className='card-title'>Meme Culture Investing</h5>
                    <p className='card-text'>
                      Understand how twiter and reddit have fuelled a new
                      trading (cult) stratey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-3'>
              {/* <Image
                className='card-img-right flex-auto d-none d-md-block'
                src='/images/wgyImg-04.jpg'
                data-holder-rendered='true'
                alt='Psychology and Risk'
                width={300}
                height={124.8}
              /> */}
              <div className='placeholder-image'>
                <span>See</span>
              </div>
              <div className='card-body  d-flex align-items-stretch '>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className='cardNum'>4.</div> */}
                    <h5 className='card-title'>Psychology & Risk</h5>
                    <p className='card-text'>
                      Study and understand the mental process underlying our
                      responses to risky situations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
