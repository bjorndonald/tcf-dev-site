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
              <h3>The Prop Trading</h3>
              <h3>TCF</h3>
            </li>
            <li>
              <p>Leverage</p>
              <p>1:200</p>
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
                  overlay={<Tooltip>If 6% profit achieved in 3 months</Tooltip>}
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
                  overlay={
                    <Tooltip>Double every 10% & scale up to $2 M</Tooltip>
                  }
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
              <p>8% (Stage 1) 5% (Stage 2)</p>
              <p>8% (Stage 1) 4% (Stage 2)</p>
            </li>
            <li>
              <p>Min Trading Days</p>
              <p>0</p>
              <p>
                10 (Stage 1 & 2){' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>
                      Minimum trading days rule setup for long term success of
                      trader
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
              <p>Profit Split</p>
              <p>80%</p>
              <p>85%</p>
            </li>
            <li>
              <p>Lot Size Limit</p>
              <p>
                Yes{' '}
                <OverlayTrigger
                  placement={'top'}
                  overlay={
                    <Tooltip>
                      5.0 Lot limit per instrument for 3 months on 100k account
                    </Tooltip>
                  }
                >
                  <div className='d-flex align-items-center'>
                    <InfoIcon />
                  </div>
                </OverlayTrigger>
              </p>
              <p>No</p>
            </li>
            <li>
              <p>200k Challenge Price</p>
              <p>899$</p>
              <p>905 CAD (~726$)</p>
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
