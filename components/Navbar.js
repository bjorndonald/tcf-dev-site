import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar () {
  /*const [scrollTop, setScrollTop] = useState(false);
  const handleScrollTop = () => {
    if (window.scrollY > 77) {
      setScrollTop(true);
    } else if (window.scrollY < 77) {
      setScrollTop(false);
    }
  };*/

  useEffect(() => {
    // window.addEventListener("scroll", handleScrollTop);
    // return () => {
    //   window.removeEventListener("scroll", handleScrollTop);
    // };

    $(function () {
      $(document).on('scroll', function () {
        var $nav = $('.navbar-fixed-top')
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
      })

      $('.navOpen').on('click', function () {
        $('.menu-overlay').css('width', '100%')
      })

      $('.navClose').on('click', function () {
        $('.menu-overlay').css('width', '0')
      })

      $('.mobileMenuList .mobileMenuListChild').on('click', function () {
        $('.mobileMenuListSub', this).toggleClass('mobileMenuListSubShow')
      })
    })
  })

  return (
    // <div
    //   className={
    //     "fixed-top bg-white nav__container navbar-fixed-top " +
    //     (scrollTop ? "scrolled" : "")
    //   }
    // >
    <div className={'fixed-top bg-white nav__container navbar-fixed-top '}>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link href='/'>
            <a className='navbar-brand'>
              {' '}
              <Image
                src='/images/logo.png'
                alt='Traders Central Fund Logo'
                width={200}
                height={51.02}
              />
            </a>
          </Link>
          <div className='menu-fullS menu-overlay'>
            <div className='menu-overlay-cBtn text-right my-4'>
              <button
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
              </button>
            </div>

            <ul className='mobileMenuList'>
              <li className='mobileMenuListChild'>
                <a className='mobileMenuListChildA' href='#'>
                  Products
                </a>
                <ul className='mobileMenuListSub mobileMenuListSubI'>
                  <li>
                    <Link href='/products/funding'>
                      <a
                        href='/products/funding'
                        className='mobileMenuListSubIA'
                      >
                        <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                          <div className='mobileMenuListSubImg'>
                            <Image
                              className=''
                              src='/images/piggy.png'
                              alt='Card image cap'
                              width={259.19}
                              height={190.15}
                            />
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
                      <a href='/products/token' className='mobileMenuListSubIA'>
                        <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                          <div className='mobileMenuListSubImg'>
                            <Image
                              className='mobileMenuListSubImg'
                              src='/images/token.png'
                              alt='Card image cap'
                              width={259.19}
                              height={190.15}
                            />
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
                    <a
                      className='mobileMenuListSubIA'
                      href='https://tccrypto.io/'
                    >
                      <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                        <div className='mobileMenuListSubImg'>
                          <Image
                            className='mobileMenuListSubImg'
                            src='/images/bitcoin.png'
                            alt='Card image cap'
                            width={259.19}
                            height={190.15}
                          />
                        </div>
                        <div className='mobileMenuListSubiC d-flex align-items-center'>
                          <div>
                            <h2>Crypto</h2>
                            <p>Buy and sell crypto in seconds!</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link href='/products/liquidity'>
                      <a
                        className='mobileMenuListSubIA'
                        href='/products/liquidity'
                      >
                        <div className='mobileMenuListSubiW d-flex align-items-stretch'>
                          <div className='mobileMenuListSubImg'>
                            <Image
                              className='mobileMenuListSubImg'
                              src='/images/laquidty.png'
                              alt='Card image cap'
                              width={259.19}
                              height={190.15}
                            />
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
                <a className='mobileMenuListChildA' href='#'>
                  Learn
                </a>
                <ul className='mobileMenuListSub'>
                  <li>
                    <Link href='/archive'>
                      <a className='mobileMenuListSubA'>Archive</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/trading-basic'>
                      <a className='mobileMenuListSubA'>Trading Basic</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='mobileMenuListChild'>
                <a className='mobileMenuListChildA' href='#'>
                  Who We Are
                </a>
                <ul className='mobileMenuListSub'>
                  <li>
                    <Link href='/about-us'>
                      <a className='mobileMenuListSubA'>About Us</a>
                    </Link>
                  </li>
                  {/* <li><Link href="/station"><a className="mobileMenuListSubA">Station</a></Link></li> */}
                  <li>
                    <Link
                      href='https://www.centralstation.blog/'
                      targe='_blank'
                    >
                      <a className='mobileMenuListSubA'>Station</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='mobileMenuListS'>
                <Link href='/help-center'>
                  <a className='mobileMenuListSA'>Help Center</a>
                </Link>
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
            <span className=''>
              <i className='fa fa-bars' aria-hidden='true'></i>
            </span>
          </button>

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
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <a
                      className='box-dropdown-item'
                      href='https://tccrypto.io/'
                    >
                      <div className='card'>
                        <div className='card-body'>
                          <h2>Crypto</h2>
                          <p>Buy and sell crypto in seconds!</p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <Link href='/products/liquidity'>
                      <a className='box-dropdown-item' href='liquidity'>
                        <div className='card'>
                          <div className='card-body'>
                            <h2>Liquidity</h2>
                            <p>Start your prop fund in 24 hours</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='nav-item dropdown dropdown-inline'>
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
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLinkTwo'
                >
                  <li>
                    <Link href='/archive'>
                      <a className='dropdown-item'>Archive</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/trading-basic'>
                      <a className='dropdown-item'>Trading Basic</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='nav-item dropdown dropdown-inline'>
                <a
                  className='nav-link m-2 dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLinkThree'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Who We Are
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLinkThree'
                >
                  <li>
                    <Link href='/about-us'>
                      <a className='dropdown-item'>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.centralstation.blog/'
                      target='_blank'
                    >
                      <a className='dropdown-item'>Station</a>
                    </Link>
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
              href='https://dash.traderscentral.fund/login'
              target='_blank'
              className='btn me-2 m-2'
            >
              Login
            </a>
            <a
              href='https://dash.traderscentral.fund/login'
              target='_blank'
              className='btn btn-black px-5'
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
