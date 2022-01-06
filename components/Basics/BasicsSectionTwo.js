import React, { useState } from 'react'
import CryptoFaq from './CryptoFaq'
import ForexFaq from './ForexFaq'
import StockFaq from './StockFaq'

function BasicsSectionTwo (props) {
  const [page, setPage] = useState(null)
  return (
    <div className='basicsSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <h2>Essentials</h2>
          <h4>Ready to learn how it works?</h4>
        </div>

        <div className='row'>
          <div
            className='column'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              console.log(page)
              if (page === 'forex') setPage(null)
              else setPage('forex')
            }}
          >
            <img src='/images/basic/basicImg1.PNG' alt='' />
            {/* <div className='purple-box'></div> */}
            <span>Click to view</span>
          </div>
          <div
            className='column'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (page === 'stocks') setPage(null)
              else setPage('stocks')
            }}
          >
            <img src='/images/basic/basicImg2.PNG' alt='' />
            <span>Click to view</span>
          </div>
          <div
            className='column'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (page === 'crypto') setPage(null)
              else setPage('crypto')
            }}
          >
            <img src='/images/basic/basicImg3.PNG' alt='' />
            <span>Click to view</span>
          </div>
        </div>

        <div className='row'>
          {page === 'forex' ? (
            <ForexFaq />
          ) : page === 'crypto' ? (
            <CryptoFaq />
          ) : page === 'stocks' ? (
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
