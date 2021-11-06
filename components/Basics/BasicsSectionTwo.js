import React from 'react'
//
function BasicsSectionTwo () {
  return (
    <div className='basicsSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <h2>Essentials</h2>
          <h4>Ready to learn how it works?</h4>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <img src='' alt='' />
            <span>Click to view</span>
          </div>
          <div className='col-md-3'>
            <img src='' alt='' />
            <span>Click to view</span>
          </div>
          <div className='col-md-3'>
            <img src='' alt='' />
            <span>Click to view</span>
          </div>
        </div>
        <div className='row'>
          <Faq />
        </div>
        <div className='button'>
          <a href='' className='btn btn-black'>
            See
          </a>
        </div>
      </div>
    </div>
  )
}

export default BasicsSectionTwo
