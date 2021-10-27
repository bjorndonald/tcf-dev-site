import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import InfoIcon from '../../icons/InfoIcon'

function BottomTable () {
  return (
    <div className='col-12 d-flex justify-content-start bottom-table'>
      {' '}
      <div className='pTableSingleListWrap  pTableSingleListWrapRound'>
        <div className='pTableSingleList'>
          <ul>
            <li>
              <h3></h3>
              <h3>FTMO</h3>
              <h3>TCF</h3>
            </li>
            <li>
              <p>Leverage</p>
              <p>1:100</p>
              <p>1:200</p>
            </li>
            <li>
              <p>Martingale</p>
              <p>Allowed</p>
              <p>Not allowed</p>
            </li>
            <li>
              <p>Scaling</p>
              <p>
                25% increase{' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>If 10% profit achieved in 4 months</Tooltip>
                  }
                >
                  <div className='d-flex align-items-center'>
                    <InfoIcon />
                  </div>
                </OverlayTrigger>
              </p>
              <p>
                100% increase at 10% target{' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={<Tooltip>Double every 10% & scale</Tooltip>}
                >
                  <div className='d-flex align-items-center'>
                    <InfoIcon />
                  </div>
                </OverlayTrigger>
              </p>
            </li>
            <li>
              <p>Consistency</p>
              <p>Not required</p>
              <p>
                Consistent growth required{' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>
                      Rules setup for traders to succeed long term
                    </Tooltip>
                  }
                >
                  <div className='d-flex align-items-center'>
                    <InfoIcon />
                  </div>
                </OverlayTrigger>
              </p>
            </li>
            <li>
              <p>Profit Target</p>
              <p>10% (Stage 1) 5% (Stage 2)</p>
              <p>8% (Stage 1) 4% (Stage 2)</p>
            </li>
            <li>
              <p>Min Trading Days</p>
              <p>10 (Stage 1 & 2)</p>
              <p>10 (Stage 1 & 2)</p>
            </li>
            <li>
              <p>Total Max Loss</p>
              <p>10%</p>
              <p>10%</p>
            </li>
            <li>
              <p>Max Daily Loss</p>
              <p>5%</p>
              <p>
                5% daily loss or 50% positive days{' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={<Tooltip>Trader can choose one option</Tooltip>}
                >
                  <div className='d-flex align-items-center'>
                    <InfoIcon />
                  </div>
                </OverlayTrigger>
              </p>
            </li>
            <li>
              <p>Support</p>
              <p>Live chat, Email</p>
              <p>Live chat, Telegram Group, Email</p>
            </li>
            <li>
              <p>100k Challenge Price</p>
              <p>&euro;540 (~623$)</p>
              <p>545 CAD (~431$)</p>
            </li>
            <li>
              <p>Discounts</p>
              <p>N/A</p>
              <p>
                Can use TCTs for discounts{' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>
                      You get 1000 TCTs at signup & eligible to collect 50 TCTs
                      daily. 1000 TCTs = 10% discount, 2500 TCTs = 25% discount
                    </Tooltip>
                  }
                >
                  <div className='d-flex align-items-center'>
                    <InfoIcon />
                  </div>
                </OverlayTrigger>
              </p>
            </li>
          </ul>
          <div className='mb-4 bottomBtn'>
            <div className='right'>
              <a
                className='btn btn-primary cadText85'
                href='https://fund.traderscentral.com'
              >
                Claim my 10% discount
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomTable
