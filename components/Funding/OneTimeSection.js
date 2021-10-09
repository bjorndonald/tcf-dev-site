import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import OneTime from './OneTime'
import InfoIcon from '../../icons/InfoIcon'

function OneTimeSection () {
  const [cadText, setCadText] = useState('85')
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
        Pay once, get funded
      </p>

      <div className='row funding-prices'>
        <div className='col-12 text-center mb-5 '>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 60</Tooltip>}>
            <a
              onClick={e => {
                setCadText('60')
                activate(e)
              }}
              className='btnCad85 btn btn-outline-dark mx-1'
            >
              USD 5,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 85</Tooltip>}>
            <a
              onClick={e => {
                setCadText('85')
                activate(e)
              }}
              className='btnCad170 btn btn-outline-dark mx-1'
            >
              USD 10,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 170</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('170')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 25,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 302</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('302')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 50,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 545</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('545')
                activate(e)
              }}
              className='btnCad345 btn btn-outline-dark mx-1'
            >
              USD 100,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 905</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('905')
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
        <OneTime cadText={cadText} />
      </div>
    </Fragment>
  )
}

export default OneTimeSection
