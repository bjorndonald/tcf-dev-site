import React, { useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function NavBar () {
  const router = useRouter()
  console.log(router.pathname)

  /*const [scrollTop, setScrollTop] = useState(false);
  const handleScrollTop = () => {
    if (window.scrollY > 77) {
      setScrollTop(true);
    } else if (window.scrollY < 77) {
      setScrollTop(false);
    }
  };*/

  return (
    // <div
    //   className={
    //     "fixed-top bg-white nav__container navbar-fixed-top " +
    //     (scrollTop ? "scrolled" : "")
    //   }
    // >
    <div
      className={
        router.pathname == '/products/funding'
          ? 'fixed-top nav__container navbar-fixed-top bg-white top-menu'
          : 'fixed-top nav__container navbar-fixed-top top-menu'
      }
    >
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link href='/'>
            <a className='navbar-brand navClose'>
              {' '}
              <Image
                src='/images/logo.png'
                alt='Traders Central Fund Logo'
                width={200}
                height={51.02}
              />
            </a>
          </Link>
          <div className='menu-fullS menu-overlay shadow-sm'>
            <div className='menu-overlay-cBtn text-right my-4'></div>

            <ul className='mobileMenuList'>
              <li className='mobileMenuListChild'>
                <a className='mobileMenuListChildA'>
                  <span>Products</span>
                </a>
                <ul className='mobileMenuListSub mobileMenuListSubI'>
                  <li>
                    <Link href='/products/funding'>
                      <a
                        href='/products/funding'
                        className='mobileMenuListSubIA navClose'
                      >
                        <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                          <div className='mobileMenuListSubImg d-flex justify-content-center'>
                            <video
                              loop={true}
                              playsInline
                              className='image'
                              autoPlay='autoplay'
                              muted={true}
                            >
                              <source
                                src='/images/home/boxOne_white.mp4'
                                type='video/mp4'
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div className='mobileMenuListSubiC d-flex align-items-center'>
                            <div>
                              <h2>Funding</h2>
                              <p>
                                The easiest way for forex traders to get funded.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/token'>
                      <a
                        href='/products/token'
                        className='mobileMenuListSubIA navClose'
                      >
                        <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                          <div className='mobileMenuListSubImg'>
                            <video
                              loop={true}
                              playsInline
                              className='image'
                              autoPlay='autoplay'
                              muted={true}
                            >
                              <source
                                src='/images/home/boxTwo_white.mp4'
                                type='video/mp4'
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div className='mobileMenuListSubiC d-flex align-items-center'>
                            <div>
                              <h2>Token</h2>
                              <p>
                                TCT - virtual currency with in our ecosystem.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products/crypto'
                      className='mobileMenuListSubIA'
                      // href='https://tccrypto.io/'
                    >
                      <div className='mobileMenuListSubiW d-flex align-items-stretch navClose'>
                        <div className='mobileMenuListSubImg'>
                          <img
                            src='/images/home/boxFour_white.gif'
                            alt=''
                            className='image'
                          />
                        </div>
                        <div className='mobileMenuListSubiC d-flex align-items-center'>
                          <div>
                            <h2>Crypto</h2>
                            <p>Buy and sell crypto in seconds!</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/liquidity'>
                      <a
                        className='mobileMenuListSubIA navClose'
                        href='/products/liquidity'
                      >
                        <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                          <div className='mobileMenuListSubImg'>
                            <video
                              loop={true}
                              playsInline
                              className='image'
                              autoPlay='autoplay'
                              muted={true}
                            >
                              <source
                                src='/images/home/boxThree_white.mp4'
                                type='video/mp4'
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div className='mobileMenuListSubiC d-flex align-items-center'>
                            <div>
                              <h2>Liquidity</h2>
                              <p>Start your prop fund in 24 hours</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='mobileMenuListChild'>
                <a className='mobileMenuListChildA'>
                  <span>Learn</span>
                </a>
                <ul className='mobileMenuListSub'>
                  {/* <li>
                    <Link href='/archive'>
                      <a className='mobileMenuListSubA navClose'>Bites</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href='/trading-basics'>
                      <a className='mobileMenuListSubA navClose'>Basics</a>
                    </Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link href='/essentials'>*/}
                  {/*    <a className='mobileMenuListSubA navClose'>Essentials</a>*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                </ul>
              </li>
              <li className='mobileMenuListChild'>
                <a className='mobileMenuListChildA'>
                  <span>About</span>
                </a>
                <ul className='mobileMenuListSub'>
                  <li>
                    <Link href='/about-us'>
                      <a className='mobileMenuListSubA navClose'>Model</a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/customers'>
                      <a className='mobileMenuListSubA navClose'>
                        Our Customers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/tc-cares'>
                      <a className='mobileMenuListSubA navClose'>Cares</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/affiliate'>
                      <a
                        target='affiliate'
                        href=' https://affiliates.traderscentral.com/'
                        className='mobileMenuListSubA navClose'
                      >
                        Affiliate Program
                      </a>
                    </Link>
                  </li>
                  {/* <li><Link href="/station"><a className="mobileMenuListSubA navClose">Station</a></Link></li> */}
                  <li>
                    {/* <Link
                      href='https://bit.ly/2X9xdjC'
                      // href='/blog'
                      targe='_blog'
                    > */}
                    <a
                      target='_blog'
                      href='https://bit.ly/2X9xdjC'
                      className='mobileMenuListSubA navClose'
                    >
                      Blog
                    </a>
                    {/* </Link> */}
                  </li>
                </ul>
              </li>
              <li className='mobileMenuListS'>
                <Link href='/help-center'>
                  <a className='mobileMenuListSA navClose'>
                    <span>Help Center</span>
                  </a>
                </Link>
              </li>
              <li className='registration-section'>
                <div className='registration'>
                  <div className='button'>
                    <a
                      href={
                        router.pathname == '/products/crypto'
                          ? 'https://trade.tccrypto.io/signup'
                          : 'https://fund.traderscentral.com/get-started'
                      }
                      className='btn btn-black'
                      target='_blank'
                    >
                      Get Started
                    </a>
                    {/*  */}
                  </div>
                  <a
                    href='https://fund.traderscentral.com/login'
                    className='link'
                    style={{ textAlign: 'center' }}
                  >
                    Login
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <button
            className='navbar-toggler navOpen'
            type='button'
            data-bs-toggle='collapsea'
            data-bs-target='#navbarSupportedContenta'
            aria-controls='navbarSupportedContenta'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <a className='menu-bars'>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </button>

          {/* <button
            className='navbar-toggler navClose'
            type='button'
            data-bs-toggle='collapsea'
            data-bs-target='#navbarSupportedContenta'
            aria-controls='navbarSupportedContenta'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className=''>
              <i className='fa fa-times' aria-hidden='true'></i>
            </span>
          </button> */}

          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown2"
            aria-controls="navbarNavDropdown2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className='collapse navbar-collapse ' id='navbarNavDropdown'>
            <ul className='navbar-nav topNavLink'>
              <li className='nav-item dropdown NavFourBox'>
                <a
                  className='nav-link m-2 dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLinkOne'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Products
                </a>
                <ul
                  className='dropdown-menu d-flex justify-content-center'
                  aria-labelledby='navbarDropdownMenuLinkOne'
                >
                  <li>
                    <Link href='/products/funding'>
                      <a className='box-dropdown-item'>
                        <div className='card'>
                          <div className='card-body'>
                            <h2>Funding</h2>
                            <p>
                              The easiest way for forex traders to get funded.
                            </p>
                            <p
                              className='mt-4'
                              style={{ textAlign: 'right', color: '#fff' }}
                            ></p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/products/token'>
                      <a className='box-dropdown-item'>
                        <div className='card'>
                          <div className='card-body'>
                            <h2>Token</h2>
                            <p>TCT - virtual currency with in our ecosystem.</p>
                            <p
                              className='mt-4'
                              style={{ textAlign: 'right', color: '#fff' }}
                            ></p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/products/crypto'>
                      <a className='box-dropdown-item'>
                        <div className='card'>
                          <div className='card-body'>
                            <h2>Crypto</h2>
                            <p>Buy and sell crypto in seconds!</p>
                            <p
                              className='mt-4'
                              style={{ textAlign: 'right', color: '#fff' }}
                            ></p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href='/products/liquidity'>
                      <a
                        className='box-dropdown-item'
                        // href='/products/liquidity'
                      >
                        <div className='card'>
                          <div className='card-body'>
                            <h2>Liquidity</h2>
                            <p>Start your prop fund in 24 hours</p>
                            <p
                              className='mt-4'
                              style={{ textAlign: 'right', color: '#fff' }}
                            ></p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='nav-item dropdown bubble-bg dropdown-inline'>
                <a
                  className='nav-link m-2 dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLinkTwo'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Learn
                </a>
                <ul
                  className='dropdown-menu white-background d-flex align-items-center justify-content-center'
                  aria-labelledby='navbarDropdownMenuLinkTwo'
                >
                  {/* <li>
                    <Link href='/archive'>
                      <a className='dropdown-item'>Bites</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href='/trading-basics'>
                      <a className='dropdown-item'>Basics</a>
                    </Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link href='/essentials'>*/}
                  {/*    <a className='dropdown-item'>Essentials</a>*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                </ul>
              </li>

              <li className='nav-item dropdown bubble-bg dropdown-inline'>
                <a
                  className='nav-link m-2 dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLinkThree'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  About
                </a>
                <ul
                  className='dropdown-menu white-background wider-background center-dropdown'
                  aria-labelledby='navbarDropdownMenuLinkThree'
                >
                  <li>
                    <Link href='/about-us'>
                      <a className='dropdown-item navClose'>Model</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/customers'>
                      <a className='dropdown-item navClose'>Our Customers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/tc-cares'>
                      <a className='dropdown-item navClose'>Cares</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/affiliate'>
                      <a
                        target='affiliate'
                        href=' https://affiliates.traderscentral.com/'
                        className='dropdown-item navClose'
                      >
                        Affiliate Program
                      </a>
                    </Link>
                  </li>
                  <li>
                    {/* <Link
                      href='https://bit.ly/2X9xdjC'
                      // href='/blog'
                      target='_blog'
                    > */}
                    <a
                      target='_blog'
                      href='https://bit.ly/2X9xdjC'
                      className='dropdown-item navClose'
                    >
                      Blog
                    </a>
                    {/* </Link> */}
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <Link href='/help-center'>
                  <a className='nav-link m-2'>Help Center</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='navbar-text text-end topNavLinkRight d-none d-lg-block  d-xl-block'>
            <a
              href='https://fund.traderscentral.com/login'
              target='_blank'
              className='btn me-2 m-2'
            >
              Login
            </a>
            <a
              href={
                router.pathname == '/products/crypto'
                  ? 'https://trade.tccrypto.io/signup'
                  : 'https://fund.traderscentral.com/get-started'
              }
              target='_blank'
              className='btn btn-black get-started'
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
