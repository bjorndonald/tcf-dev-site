import React, { Fragment, useState } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import Left from './monthly/Left'
import Right from './monthly/Right'
import Data from './monthly/Data'
import Monthly from './Monthly'

function MonthlySection (props) {
  const [cadOriginalText, setCadOriginalText] = useState('85')
  const [cadText, setCadText] = useState('68')
  const [leverage, setLeverage] = useState('1:4')
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
        Live funding in 24 hours, no evaluation needed
      </p>
      <div className='row funding-prices'>
        <div className='col-12 text-center mb-5 '>
          <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 68</Tooltip>}>
            <a
              onClick={e => {
                setCadOriginalText('85')
                setCadText('68')
                setLeverage('1:4')
                activate(e)
              }}
              className='btnCad68 btn btn-outline-dark mx-1'
            >
              USD 12,500
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
                setLeverage('1:4')
              }}
              className='btnCad128 btn btn-outline-dark mx-1'
            >
              USD 25,000
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement={'top'}
            overlay={<Tooltip>CAD 242</Tooltip>}
          >
            <a
              onClick={e => {
                setCadOriginalText('345')
                setCadText('242')
                activate(e)
                setLeverage('1:3')
              }}
              className='btnCad242 btn btn-outline-dark mx-1'
            >
              USD 50,000
            </a>
          </OverlayTrigger>
        </div>
      </div>
      {/* <div className='col-12 row mx-0 justify-content-center monthly'>
        <Left />
        <Right cadText={cadText} leverage={leverage} />
      </div> */}
      <div className='col-12 row mx-0 justify-content-center'>
        <Monthly
          leverage={leverage}
          cadOriginalText={cadOriginalText}
          cadText={cadText}
        />
      </div>
    </Fragment>
  )
}

export default MonthlySection
