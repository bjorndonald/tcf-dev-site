import React from 'react'
import VideoControls from './VideoControls'

function CustomersSectionOne () {
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
          <div className='placeholder-div'>
            <div className='play-button'>
              <i className='fa fa-play-circle'></i>
            </div>
          </div>
        </div>

        <div className='row video-slider'>
          <div className='next-button'>
            <i className='fa fa-play-circle'></i>
          </div>
          <div className='prev-button'>
            <i className='fa fa-play-circle'></i>
          </div>
          <div className='slider'>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersSectionOne
