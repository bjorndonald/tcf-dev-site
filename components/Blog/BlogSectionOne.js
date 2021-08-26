import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'

export default function BlogSectionOne () {
  // useEffect(() => {
  //   tl.from('.blogSectionOne', {
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  // }, [tl])
  return (
    <div className='blogSectionOne py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        {/* <div className='row pt-5 top-title'>
          <div className='col-12'>
            <div className=' text-center'>
              <h2>Discover the trader in you.</h2>
            </div>
          </div>
        </div> */}

        <div
          style={{ marginTop: '2rem' }}
          className='row py-5 flex-column align-items-center justify-content-between'
        >
          <h1 style={{ marginBottom: '3rem' }} className=''>
            All you need to know.
          </h1>

          <div className='row flex-column align-items-center justify-content-between'>
            {/* <h3>Buy & Sell Crypto In Seconds!</h3>
            <div className='cryptoTextWrap'>
              <input type='text' />
              <a href='' className='btn btn-moon'>
                To The Moon
                <i class='fas fa-rocket'></i>
              </a>
            </div> */}

            <div className='col-12 col-lg-12 py-4 gaspSlideLeft relative'>
              <div className='cord'>
                <div className='tip'></div>
              </div>
              <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-5'>
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
                      <h5 className='card-title'>Title for blogpost</h5>
                      <p className='card-text'>
                        Here we can read the preview text of a <br />
                        blogpost which will show some of the <br />
                        content available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-5'>
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
                      <h5 className='card-title'>Title for blogpost</h5>
                      <p className='card-text'>
                        Here we can read the preview text of a <br />
                        blogpost which will show some of the <br />
                        content available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-5'>
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
                      <h5 className='card-title'>Title for blogpost</h5>
                      <p className='card-text'>
                        Here we can read the preview text of a <br />
                        blogpost which will show some of the <br />
                        content available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' smallCard smallCardOne smallCard1 card align-items-center flex-md-row mb-5'>
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
                      <h5 className='card-title'>Title for blogpost</h5>
                      <p className='card-text'>
                        Here we can read the preview text of a <br />
                        blogpost which will show some of the <br />
                        content available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='button mt-3'>
              <div className='d-flex align-items-center justify-content-center'>
                <a className=' btn btn-black px-3 ' href='#'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
