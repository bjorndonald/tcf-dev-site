import React from 'react'
import Link from 'next/link'

export default function Footer () {
  return (
    <div className='site-footer pt-5 bg-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4 footer-col-three mb-5'>
            <h2>
              Decentralising
              <br />
              finance for all
            </h2>
          </div>
          {/* <div className='col-12 col-md-6 footer-col-one'>
            <ul className='listCL mb-5'>
              <li>
                <a href='https://goo.gl/maps/h1cZNStEjVvK6cMRA' target='_blank'>
                  <i className='fa fa-map-marker' aria-hidden='true'></i> Canada
                </a>
              </li>
              <li>
                <a href='https://t.me/Traderscentralchatroom' target='_blank'>
                  <i className='fa fa-comment' aria-hidden='true'></i> English
                </a>
              </li>
            </ul>
          </div> */}

          <div className='col-12 col-md-8 mb-3 footer-col-two'>
            <div className='d-flex links-line justify-content-between'>
              <div className='linkList mb-5'>
                <p>Products</p>
                <ul>
                  <li>
                    <Link href='/products/funding'>
                      <a>Funding</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/token'>
                      <a>Token</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/crypto'>
                      <a>Crypto</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/liquidity'>
                      <a>Liquidity</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='linkList mb-5'>
                <p>Learn</p>
                <ul>
                  {/* <li>
                    <Link href='/archive'>
                      <a>Bites</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href='/trading-basic'>
                      <a>Basics</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='linkList mb-5'>
                <p>About Us</p>
                <ul>
                  <li>
                    <Link href='/about-us'>
                      <a>Model</a>
                    </Link>
                  </li>
                  <li>
                    <a href='https://bit.ly/2X9xdjC'>Blog</a>
                  </li>
                </ul>
              </div>
              <div className='linkList mb-5'>
                <ul>
                  <li>
                    <a
                      href='https://www.instagram.com/traderscentralfund/?utm_source=ig_profile_share&igshid=1h8hs678
fgu04
'
                    >
                      <i className='fa fa-instagram' aria-hidden='true'></i>{' '}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/TradersCPF/'>
                      <i className='fa fa-facebook' aria-hidden='true'></i>{' '}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/TradersCentral'>
                      <i className='fa fa-twitter' aria-hidden='true'></i>{' '}
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a href='https://youtube.com/channel/UCXnnh-fnrMW2R_HMWFC_6dA'>
                      <i className='fa fa-youtube-play' aria-hidden='true'></i>{' '}
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a href='https://t.me/Traderscentralchatroom'>
                      <i className='fa fa-telegram' aria-hidden='true'></i>{' '}
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-md-6 socials footer-col-four '></div>
          <div className='col-md-6 d-flex align-items-end justify-content-end'>
            <p>© 2021, Traders Central Inc. All Rights Reserved.</p>
          </div>
        </div>

        <div className='row footer-bottom pt-3 pb-2 '>
          <div className='col-12'>
            <p style={{ fontSize: 'small', textAlign: 'justify' }}>
              We provide funding services to traders through several affiliates.
              Our referral/introductory funding product is offered by Traders
              Central Fund Corp, which is a Canadian entity with registration
              no. BC1281254 connects traders and brokers to backers for funding
              trading accounts. Our introductory crypto spot trading and
              liquidity services product is offered by Prime Bridge Security,
              LLC, a St. Vincent and Grenadines entity with registration no 959
              LLC. It provides a technology platform to facilitate online
              purchasing and selling of digital currencies, digital assets, and
              legal tender or fiat currency (crypto to crypto, crypto to fiat,
              and fiat to crypto trading). Trading contains substantial risk.
              There is a potential of losing some or all of an amount invested.
              The value in your funded account can increase or decrease. Past
              performance is not necessarily indicative of future results. View
              legal
              <a
                style={{ fontSize: 'small', textDecoration: 'underline' }}
                href='https://legal.traderscentral.com'
              >
                {' '}
                library
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
