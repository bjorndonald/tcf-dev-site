import React, { useState } from 'react'
import CryptoFaq from './CryptoFaq'
import ForexFaq from './ForexFaq'
import StockFaq from './StockFaq'
import Link from 'next/link'

function BasicsSectionTwo (props) {
  const [page, setPage] = useState(null)
  return (
    <div className='basicsSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        {/* <div className='row'>
          <h2>Essentials</h2>
          <h4>Ready to learn how it works?</h4>
        </div> */}

        {/* <div className='row'>
          <a
            className='tc-column'
            target='_blank'
            rel='noopener noreferrer'
            href={'/essentials/forex'}
          >
            <div className='column' style={{ cursor: 'pointer' }}>
              <img src='/images/basic/basicImg1.PNG' alt='' />
             
              <a
                href={'/essentials/forex'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Click to view</span>
              </a>
            </div>
          </a>
          <a
            className='tc-column'
            target='_blank'
            rel='noopener noreferrer'
            href={'/essentials/stocks'}
          >
            <div className='column' style={{ cursor: 'pointer' }}>
              <img src='/images/basic/basicImg2.PNG' alt='' />
              <a
                href={'/essentials/stocks'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Click to view</span>
              </a>
            </div>
          </a>
          <a
            className='tc-column'
            target='_blank'
            rel='noopener noreferrer'
            href={'/essentials/crypto'}
          >
            <div className='column' style={{ cursor: 'pointer' }}>
              <img src='/images/basic/basicImg3.PNG' alt='' />
              <a
                href={'/essentials/crypto'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Click to view</span>
              </a>
            </div>
          </a>
        </div> */}

        <div className='row'>
          <div
            className='image'
            style={{
              backgroundImage: `url(/images/basic/basicImg1.PNG)`,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover'
            }}
          ></div>

          <h3>Forex</h3>
          <ForexFaq />
          <div className='button'>
            <a
              href={'/essentials/forex'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-black'
            >
              See Forex Essentials
            </a>
          </div>

          <div
            className='image'
            style={{
              backgroundImage: `url(/images/basic/basicImg2.PNG)`,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              marginTop: '5rem'
            }}
          ></div>
          <h3>Stocks</h3>
          <StockFaq />
          <div className='button'>
            <a
              href={'/essentials/stocks'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-black'
            >
              See Stock Essentials
            </a>
          </div>
          <div
            className='image'
            style={{
              backgroundImage: `url(/images/basic/basicImg3.PNG)`,
              backgroundPosition: 'bottom',
              backgroundSize: 'cover',
              marginTop: '5rem'
            }}
          ></div>
          <h3>Crypto</h3>
          <CryptoFaq />
          <div className='button'>
            <a
              href={'/essentials/crypto'}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-black'
            >
              See Crypto Essentials
            </a>
          </div>
        </div>
        {/* <Link
              href={{
                pathname: 'essentials',
                query: {
                  page: page
                }
              }}
              as={'essentials'}
              className='btn btn-black'
            > */}
        {/* </Link> */}
      </div>
    </div>
  )
}

export default BasicsSectionTwo
