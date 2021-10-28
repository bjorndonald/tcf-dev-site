import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import OneTime from './OneTime'
import InfoIcon from '../../icons/InfoIcon'
import OTFFunding from './OTFFunding'

function OTFFundingSection (props) {
  const [cadText, setCadText] = useState('252')
  const [leverage, setLeverage] = useState('1:50')
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
        Pay once, get live funding
      </p>
      <div className='row funding-prices'>
        <div className='col-12 text-center mb-5 '>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 101</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('101')
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
            overlay={<Tooltip>CAD 252</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('252')
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
            overlay={<Tooltip>CAD 505</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('505')
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
            overlay={<Tooltip>CAD 1262</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('1262')
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
            overlay={<Tooltip>CAD 2524</Tooltip>}
          >
            <a
              onClick={e => {
                setCadText('2524')
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
        <OTFFunding leverage={leverage} cadText={cadText} />
      </div>
    </Fragment>
  )
}

export default OTFFundingSection
