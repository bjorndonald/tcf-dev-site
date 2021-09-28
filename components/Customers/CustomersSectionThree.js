import React, { Fragment, useState } from 'react'

import Lightbox from 'react-awesome-lightbox'

function CustomersSectionThree () {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  const prev = () => {
    var leftPos = $('.withdrawals-slider .slider').scrollLeft()
    console.log(leftPos)
    $('.withdrawals-slider .slider').animate(
      {
        scrollLeft:
          leftPos -
          ($('.withdrawals-slider .slider .slide').outerWidth() +
            $(document).width() / 50)
      },
      200
    )
  }

  const fullScreen = () => {
    setShow(false)
  }

  const withdrawals = [
    {
      image: <img src='/images/withdrawals/1.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/1.png' />
    },
    {
      image: <img src='/images/withdrawals/2.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/2.png' />
    },
    {
      image: <img src='/images/withdrawals/3.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/3.png' />
    },
    {
      image: <img src='/images/withdrawals/4.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/4.png' />
    },
    {
      image: <img src='/images/withdrawals/5.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/5.png' />
    },
    {
      image: <img src='/images/withdrawals/6.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/6.png' />
    },
    {
      image: <img src='/images/withdrawals/7.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/7.png' />
    },
    {
      image: <img src='/images/withdrawals/8.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/8.png' />
    },
    {
      image: <img src='/images/withdrawals/9.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/9.png' />
    },
    {
      image: <img src='/images/withdrawals/10.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/10.png' />
    },
    {
      image: <img src='/images/withdrawals/11.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/11.png' />
    },
    {
      image: <img src='/images/withdrawals/12.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/12.png' />
    },
    {
      image: <img src='/images/withdrawals/13.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/13.png' />
    },
    {
      image: <img src='/images/withdrawals/14.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/14.png' />
    },
    {
      image: <img src='/images/withdrawals/15.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/15.png' />
    },
    {
      image: <img src='/images/withdrawals/16.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/16.png' />
    },
    {
      image: <img src='/images/withdrawals/17.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/17.png' />
    },
    {
      image: <img src='/images/withdrawals/18.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/18.png' />
    },
    {
      image: <img src='/images/withdrawals/19.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/19.png' />
    },
    {
      image: <img src='/images/withdrawals/20.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/20.png' />
    },
    {
      image: <img src='/images/withdrawals/21.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/21.png' />
    },
    {
      image: <img src='/images/withdrawals/22.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/22.png' />
    },
    {
      image: <img src='/images/withdrawals/23.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/23.png' />
    },
    {
      image: <img src='/images/withdrawals/24.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/24.png' />
    },
    {
      image: <img src='/images/withdrawals/25.png' />,
      url: <Lightbox onClose={fullScreen} image='/images/withdrawals/25.png' />
    }
  ]

  const next = () => {
    var leftPos = $('.withdrawals-slider .slider').scrollLeft()
    $('.withdrawals-slider .slider').animate(
      {
        scrollLeft:
          leftPos +
          ($('.withdrawals-slider .slider .slide').outerWidth() +
            $(document).width() / 50)
      },
      200
    )
  }
  //
  return (
    <Fragment>
      {show ? withdrawals[index].url : null}
      <div className='customersSectionThree'>
        <div className='container'>
          <div className='row'>
            <h2>Trader Withdrawals</h2>
          </div>
          <div className='row withdrawals-slider'>
            <div onClick={next} className='next-button'>
              <i className='fa fa-play-circle'></i>
            </div>
            <div onClick={prev} className='prev-button'>
              <i className='fa fa-play-circle'></i>
            </div>
            <div className='slider'>
              {withdrawals.map((item, index) => (
                <div
                  className='slide'
                  onClick={() => {
                    setIndex(index)
                    setShow(true)
                  }}
                >
                  {item.image}
                </div>
              ))}
              {/* <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div> */}
            </div>
          </div>
          <div className='row'>
            <h4>
              Visit our{' '}
              <a href='https://t.me/Traderscentralchatroom' target='telegram'>
                Telegram Community
              </a>{' '}
              to <br />
              view more trader withdrawals
            </h4>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CustomersSectionThree
