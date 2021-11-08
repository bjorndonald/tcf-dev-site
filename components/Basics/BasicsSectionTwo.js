import React from 'react'
import Faq from './Faq'

function BasicsSectionTwo () {
  return (
    <div className='basicsSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <h2>Essentials</h2>
          <h4>Ready to learn how it works?</h4>
        </div>

        <div className='row'>
          <div className='column'>
            <div className='purple-box'></div>
            <span>Click to view</span>
          </div>
          <div className='column'>
            <div className='purple-box'></div>
            <span>Click to view</span>
          </div>
          <div className='column'>
            <div className='purple-box'></div>
            <span>Click to view</span>
          </div>
        </div>
        <div className='row'>
          <Faq />
        </div>

        <div className='button'>
          <a href='' className='btn btn-black'>
            See Crypto Esentials
          </a>
        </div>
      </div>
    </div>
  )
}

export default BasicsSectionTwo
