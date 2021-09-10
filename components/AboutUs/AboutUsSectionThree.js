import React from 'react'

function AboutUsSectionThree () {
  return (
    <div className='aboutUsSectionThree d-flex align-items-center '>
      <div className='container '>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2>Our commitments</h2>
            </div>
          </div>
        </div>
        <div
          style={{ margin: 'auto' }}
          className='row col-12 eyntkBoxs d-flex align-items-stretch justify-content-center'
        >
          <div className='col-10 col-md-5 d-flex justify-content-center'>
            <div className='eyntkBox eyntkBoxOne'>
              <div className='background'>
                <img src='/images/about/aboutOne.jpg' alt='' />
              </div>
              <h3 className='mb-4'>Equity over equality</h3>
              {/* <Image
                src='/images/piggy.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>
                Traders central was <br />
                designed for everyone.
              </p>
            </div>
          </div>

          <div className='col-10 col-md-5 d-flex justify-content-center'>
            <div className='eyntkBox eyntkBoxTwo'>
              <div className='background'>
                <img src='/images/about/aboutTwo.jpg' alt='' />
              </div>
              <h3 className='mb-4'>Customer obsessed</h3>
              {/* <Image
                src='/images/piggy.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>We listen and understand</p>
            </div>
          </div>

          <div className='col-10 col-md-5 d-flex justify-content-center'>
            <div className='eyntkBox eyntkBoxThree'>
              <div className='background'>
                <img src='/images/about/aboutThree.jpg' alt='' />
              </div>
              <h3 className='mb-4'>Safety and Security</h3>
              {/* <Image
                src='/images/piggy.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>We build safeguards and educate our users</p>
            </div>
          </div>

          <div className='col-10 col-md-5 d-flex justify-content-center'>
            <div className='eyntkBox eyntkBoxFour'>
              <div className='background'>
                <img src='/images/about/aboutFour.jpg' alt='' />
              </div>
              <h3 className='mb-4'>Disrupting status quos</h3>
              {/* <Image
                src='/images/piggy.png'
                alt='Image'
                width={225}
                height={165.38}
              /> */}
              <p>We exist to make systems better.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSectionThree
