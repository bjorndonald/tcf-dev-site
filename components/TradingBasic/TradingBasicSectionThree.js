import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import dynamic from 'next/dynamic'

export default function TradingBasicSectionThree () {
  // useEffect(() => {
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: '.tradingBasicSectionThree',
  //         start: 'top 150px',
  //         end: 'bottom center',
  //         scrub: true,
  //         pin: true
  //       }
  //     })
  //     .add('start'),
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
  //     'start'
  // }, [tl])
  return (
    <div className='tradingBasicSectionThree py-5 d-flex align-items-center '>
      <div className='container'>
        <div className='row pt-5  header-section'>
          <div className='col-12 header-section'>
            <div className=' text-center'>
              <h2>Discover the trader in you</h2>
            </div>
          </div>
        </div>

        <div className='row mt-5 pt-5 d-flex justify-content-center tradingBasicCCB'>
          <div className='d-flex basic-content align-items-center  gaspSlideLeft'>
            <div className=' smallCard smallCardOne smallCard1  align-items-center '>
              {/* <Image
                className="card-img-right flex-auto d-none d-md-block"
                src="/images/wgyImg-01.jpg"
                data-holder-rendered="true"
                alt="Forex Market" 
                width={300}
                height={124.8}
              /> */}
              <div className='image col-md-2'>
                <img src='/images/basics/basicsOne.jpg' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className="cardNum">1.</div> */}
                    <h5 className='card-title'>Forex Market</h5>
                    <p className='card-text'>
                      Exploring the history of forex trading <br />
                      and how it shapes our world today
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=' smallCard smallCardOne  smallCard1  align-items-center '>
              {/* <Image
                className='card-img-right flex-auto d-none d-md-block'
                src='/images/wgyImg-02.jpg'
                data-holder-rendered='true'
                alt='Crypto currencies'
                width={300}
                height={124.8}
              /> */}
              <div className='image col-md-2'>
                <img src='/images/basics/basicsTwo.jpg' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className='cardNum'>2.</div> */}
                    <h5 className='card-title'>Cryptocurrencies</h5>
                    <p className='card-text'>
                      Learn the different terminologies, <br />
                      understand its history and become <br />
                      an expert
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=' smallCard smallCardOne smallCard1 align-items-center'>
              {/* <Image
                className='card-img-right flex-auto d-none d-md-block'
                src='/images/wgyImg-03.jpg'
                data-holder-rendered='true'
                alt='Meme Culture Investing'
                width={300}
                height={124.8}
              /> */}
              <div className='image col-md-2'>
                <img src='/images/basics/basicsThree.jpg' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className='cardNum'>3.</div> */}
                    <h5 className='card-title'>Meme Culture</h5>
                    <p className='card-text'>
                      Understand how Twitter and Reddit have <br />
                      fueled a new trading (cult) strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='smallCard smallCardOne smallCard1 align-items-center '>
              {/* <Image
                className='card-img-right flex-auto d-none d-md-block'
                src='/images/wgyImg-04.jpg'
                data-holder-rendered='true'
                alt='Psychology and Risk'
                width={300}
                height={124.8}
              /> */}
              <div className='image col-md-2'>
                <img src='/images/basics/basicsFour.jpg' alt='' />
              </div>
              <div className='col-md-6'>
                <div className='d-flex align-items-end'>
                  <div className='card-body-four-line'>
                    {/* <div className='cardNum'>4.</div> */}
                    <h5 className='card-title'>Stocks</h5>
                    <p className='card-text'>
                      From the trading pits & floors to Fintech
                      <br />
                      &nbsp;apps, learn and understand the stock <br />
                      market
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
