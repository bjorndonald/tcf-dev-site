import React from 'react'
import Faq from './Faq'
import _ from 'lodash'
import { useRouter } from 'next/dist/client/router'
import { withRouter } from 'next/router'
import { essentials, stocks, forex } from './pagedata'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

function EssentialsSectionOne (props) {
  const router = useRouter()

  useEffect(() => {
    console.log(props.page)
    return () => {}
  }, [])
  return (
    <div className='essentialsSectionOne'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-7'>
            <h1>
              {props.page === 'crypto'
                ? 'Crypto'
                : props.page === 'stocks'
                ? 'Stocks'
                : props.page === 'forex'
                ? 'Forex'
                : null}{' '}
              Essentials
            </h1>
            <h4>The must-know basics to become successful in {props.page}</h4>
          </div>
          <div className='col-md-4'>
            <img src='/images/essentials/header.PNG' alt='' />
          </div>
        </div>
        <div className='row'>
          {props.url.includes('crypto')
            ? essentials.map((essential, index) => (
                <>
                  <h2>{essential.title}</h2>
                  {essential.body}
                </>
              ))
            : props.url.includes('stocks')
            ? stocks.map((stock, index) => (
                <>
                  <h2>{stock.title}</h2>
                  {stock.body}
                </>
              ))
            : props.url.includes('forex')
            ? forex.map((fx, index) => (
                <>
                  <h2>{fx.title}</h2>
                  {fx.body}
                </>
              ))
            : null}{' '}
        </div>
      </div>
    </div>
  )
}

export default EssentialsSectionOne
