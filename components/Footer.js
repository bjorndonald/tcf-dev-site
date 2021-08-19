import React from 'react'
import Link from 'next/link'

export default function Footer () {
  return (
    <div className='site-footer pt-5 bg-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 footer-col-three mb-5'>
            <h2>
              Decentralising
              <br />
              funding for all
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

          <div className='col-12 col-md-6 mb-3 footer-col-two'>
            <div className='d-flex justify-content-between'>
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
                    <a href='https://tccrypto.io/'>Crypto</a>
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
                  <li>
                    <Link href='/archive'>
                      <a>Bites</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/trading-basic'>
                      <a>Basics</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='linkList mb-5'>
                <p>Who We Are</p>
                <ul>
                  <li>
                    <Link href='/about-us'>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/station'>
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 footer-col-four mb-5'>
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
                  <i className='fa fa-facebook' aria-hidden='true'></i> Facebook
                </a>
              </li>
              <li>
                <a href='https://twitter.com/TradersCentral'>
                  <i className='fa fa-twitter' aria-hidden='true'></i> Twitter
                </a>
              </li>

              <li>
                <a href='https://twitter.com/TradersCentral'>
                  <i className='fa fa-youtube-play' aria-hidden='true'></i>{' '}
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='row footer-bottom pt-3 pb-2 '>
          <div className='col-12'>
            <p>© 2021, Traders Central Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
