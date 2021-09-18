import React, { useState } from 'react'
import VideoControls from './VideoControls'
import $ from 'jquery'
import { placeholder_images, videos } from './videos'

function CustomersSectionOne () {
  const [index, setIndex] = useState(0)
  const prev = () => {
    var leftPos = $('.video-slider .slider').scrollLeft()
    console.log(leftPos)
    $('.video-slider .slider').animate(
      {
        scrollLeft:
          leftPos -
          ($('.video-slider .slider .slide').outerWidth() +
            $(document).width() / 50)
      },
      200
    )
  }

  const next = () => {
    var leftPos = $('.video-slider .slider').scrollLeft()
    $('.video-slider .slider').animate(
      {
        scrollLeft:
          leftPos +
          ($('.video-slider .slider .slide').outerWidth() +
            $(document).width() / 50)
      },
      200
    )
  }

  const changeVideo = index => {
    setIndex(index)
  }

  return (
    <div className='customersSectionOne'>
      <div className='container'>
        <div className='row'>
          <h1 className='section-title'>
            Over 60,000 people <br />
            trust us worldwide
          </h1>
        </div>

        <div id='video-section' className='row video-section'>
          {videos[index]}
          <div className='play-button'></div>
        </div>

        <div className='row video-slider'>
          <div onClick={next} className='next-button'>
            <i className='fa fa-play-circle'></i>
          </div>
          <div onClick={prev} className='prev-button'>
            <i className='fa fa-play-circle'></i>
          </div>
          <div className='slider'>
            {placeholder_images.map((item, index) => (
              <div className='slide' onClick={() => changeVideo(index)}>
                <i className='fa fa-play-circle'></i>
                {item.image}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersSectionOne
