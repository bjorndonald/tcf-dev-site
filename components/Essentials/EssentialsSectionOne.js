import React from 'react'
import Faq from './Faq'
import _ from 'lodash'
import { useRouter, withRouter } from 'next/router'
import { essentials, stocks } from './pagedata'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

function EssentialsSectionOne (props) {
  console.log(props.url)
  return (
    <div className='essentialsSectionOne'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-7'>
            <h1>
              {props.url.includes('crypto')
                ? 'Crypto'
                : props.url.includes('stock')
                ? 'Stock'
                : null}{' '}
              Essentials
            </h1>
            <h4>The must-know basics to become successful in crypto</h4>
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
            : props.url.includes('stock')
            ? stocks.map((stock, index) => (
                <>
                  <h2>{stock.title}</h2>
                  {stock.body}
                </>
              ))
            : null}{' '}
        </div>
      </div>
    </div>
  )
}

export default EssentialsSectionOne
