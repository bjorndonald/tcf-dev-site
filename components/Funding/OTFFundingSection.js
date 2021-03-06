import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import OneTime from './OneTime'
import InfoIcon from '../../icons/InfoIcon'
import OTFFunding from './OTFFunding'
import { useEffect } from 'react'

function OTFFundingSection (props) {
  const [cadOriginalText, setCadOriginalText] = useState('252')
  const [cadText, setCadText] = useState('189')
  const [cadCurrency, setCadCurrency] = useState('189')
  const [cadCurrencyOriginal, setCadCurrencyOriginal] = useState('252')
  const [leverage, setLeverage] = useState('1:50')
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
        Pay once, get live funding
      </p>
      <div className='row funding-prices'>
        <div className='col-12 text-center mb-5 '>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 76</Tooltip>}>
            <a
              onClick={e => {
                setCadOriginalText('101')
                setCadText('76')
                setLeverage('1:50')
                activate(e)
              }}
              className='btnCad101 btn btn-outline-dark mx-1'
            >
              USD 2,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 189</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('252')
                setCadText('189')
                setLeverage('1:50')
                activate(e)
              }}
              className='btnCad252 btn btn-outline-dark mx-1 active'
            >
              USD 5,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 379</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('505')
                setCadText('379')
                setLeverage('1:50')
                activate(e)
              }}
              className='btnCad505 btn btn-outline-dark mx-1'
            >
              USD 10,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 883</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('1262')
                setCadText('883')
                activate(e)
                setLeverage('1:50')
              }}
              className='btnCad1262 btn btn-outline-dark mx-1'
            >
              USD 25,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 1767</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('2524')
                setCadText('1767')
                activate(e)
                setLeverage('1:50')
              }}
              className='btnCad2524 btn btn-outline-dark mx-1'
            >
              USD 50,000
            </a>
          </OverlayTrigger>
        </div>
      </div>
      <div className='col-12 row mx-0 justify-content-center'>
        <OTFFunding
          leverage={leverage}
          cadOriginalText={cadCurrencyOriginal}
          cadText={cadCurrency}
          currency={props.currency}
        />
      </div>
    </Fragment>
  )
}

export default OTFFundingSection
