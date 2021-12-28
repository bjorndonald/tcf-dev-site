import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import OneTime from './OneTime'
import InfoIcon from '../../icons/InfoIcon'

function OneTimeSection () {
  const [cadOriginalText, setCadOriginalText] = useState('85')
  const [cadText, setCadText] = useState('68')
  const [leverage, setLeverage] = useState('1:6')
  const activate = e => {
    $(e.target)
      .parent()
      .find('a')
      .removeClass('active')
    $(e.target).addClass('active')
  }
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
        <OneTime cadOriginalText={cadOriginalText} cadText={cadText} />
      </div>
    </Fragment>
  )
}

export default OneTimeSection
