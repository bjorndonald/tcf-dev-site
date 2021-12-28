import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import OneTime from './OneTime'
import InfoIcon from '../../icons/InfoIcon'
import { useEffect } from 'react'

function OneTimeSection (props) {
  const [cadOriginalText, setCadOriginalText] = useState('85')
  const [cadText, setCadText] = useState('68')
  const [cadCurrency, setCadCurrency] = useState('68')
  const [cadCurrencyOriginal, setCadCurrencyOriginal] = useState('85')
  const [leverage, setLeverage] = useState('1:6')
  const activate = e => {
    $(e.target)
      .parent()
      .find('a')
      .removeClass('active')
    $(e.target).addClass('active')
  }

  useEffect(() => {
    // const cashify = new Cashify({
    //   base: 'CAD',
    console.log('sslsl', props.currencies)
    //   rates: props.currencies
    // })
    // const converted = cashify.convert(parseFloat(cadText), {
    //   from: 'CAD',
    //   to: props.currency,
    //   BigJs: Big
    // })
    if (props.currencies) {
      var converted = 0
      var convertedOriginal = 0

      converted = parseFloat(cadText) * props.currencies[props.currency]
      console.log('sslsl', props.currencies[props.currency])
      convertedOriginal =
        parseFloat(cadOriginalText) * props.currencies[props.currency]

      // // // const convertedOriginal = cashify.convert(parseFloat(cadOriginalText), {
      // // //   from: 'CAD',
      // // //   to: props.currency,
      // // //   BigJs: Big
      // // // })
      setCadCurrency(converted.toFixed(1))
      setCadCurrencyOriginal(convertedOriginal.toFixed(1))
    }
    return () => {}
  }, [props.currency, cadText])

  return (
    <Fragment>
      <p className='mb-4 subtitle' style={{ textAlign: 'center' }}>
        Pay once, pass challenge & get funded
      </p>

      <div className='row funding-prices'>
        <div className='col-12 text-center mb-5 '>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 48</Tooltip>}>
            <a
              onClick={e => {
                setCadOriginalText('60')
                setCadText('48')
                activate(e)
              }}
              className='btnCad85 btn btn-outline-dark mx-1'
            >
              USD 5,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 68</Tooltip>}>
            <a
              onClick={e => {
                setCadOriginalText('85')
                setCadText('68')
                activate(e)
              }}
              className='btnCad170 btn btn-outline-dark mx-1 active'
            >
              USD 10,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 128</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('170')
                setCadText('128')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 25,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 227</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('302')
                setCadText('227')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 50,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 382</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('545')
                setCadText('382')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 100,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 634</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('905')
                setCadText('634')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 200,000
            </a>
          </OverlayTrigger>
        </div>
      </div>

      <div className='col-12 row mx-0 justify-content-center'>
        <OneTime cadOriginalText={cadCurrencyOriginal} currency={props.currency} cadText={cadCurrency} />
      </div>
    </Fragment>
  )
}

export default OneTimeSection
