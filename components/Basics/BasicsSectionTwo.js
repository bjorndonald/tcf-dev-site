import React from 'react'
import CryptoFaq from './CryptoFaq'
import ForexFaq from './ForexFaq'
import StockFaq from './StockFaq'

function BasicsSectionTwo (props) {
  return (
    <div className='basicsSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <h2>Essentials</h2>
          <h4>Ready to learn how it works?</h4>
        </div>

        <div className='row'>
          <div className='column'>
            <img src='/images/basic/basicImg1.PNG' alt='' />
            {/* <div className='purple-box'></div> */}
            <span>Click to view</span>
          </div>
          <div className='column'>
            <img src='/images/basic/basicImg2.PNG' alt='' />
            <span>Click to view</span>
          </div>
          <div className='column'>
            <img src='/images/basic/basicImg3.PNG' alt='' />
            <span>Click to view</span>
          </div>
        </div>
        <div className='row'>
          {props.url.includes('forex') ? (
            <ForexFaq />
          ) : props.url.includes('crypto') ? (
            <CryptoFaq />
          ) : props.url.includes('stocks') ? (
            <StockFaq />
          ) : null}
        </div>

        <div className='button'>
          <a href='' className='btn btn-black'>
            See Essential Articles
          </a>
        </div>
      </div>
    </div>
  )
}

export default BasicsSectionTwo
