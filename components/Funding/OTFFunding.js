import React, { useState } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import InfoIcon from '../../icons/InfoIcon'

function OTFFunding (props) {
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
    <div className='wrapper'>
      <div className='col-12 col-md-5 d-flex justify-content-center bottom-monthly'>
        {' '}
        <div className='pTableSingleListWrap  pTableSingleListWrapRound'>
          <div className='pTableSingleList'>
            <div className='column'>
              <h3 className='mb-4'>No expiry</h3>
              {/* <p className='bold'>Cancel anytime</p> */}
            </div>
            <ul>
              <li>
                <p>Trading Platform</p>
                <p>MetaTrader5</p>
              </li>
              <li>
                <p>
                  Trading Hours
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Trades can be placed anytime of the day.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>24/5</p>
              </li>
              <li>
                <p>
                  Withdrawal Target
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Withdrawal methods currently available by our backers
                        are Crypto (BTC, ETH, USDC-ERC20, USDT-TC20), for bank
                        transfer you can use the backers partner exchange
                        tccrypto.io. Receiving withdrawals via tccrypto.io is
                        optional.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>0.5% Percent</p>
              </li>
              <li>
                <p>
                  Drawdown Limit
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        This means your account balance or open equity should not at any point reach -5% of initial equity. e.g. In a 50,000$ account, your open equity or balance shouldn't reach 47500$ or lower.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>Five Percent</p>
              </li>
              <li>
                <p>
                  Trading Products
                  {/* <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Forex and Gold are available by default. Cryptos and
                        Indices needs to be unlocked in your portfolio to
                        confirm your eligibility.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger> */}
                </p>
                <p>Forex, Stocks, Metals, Cryptos & Indices</p>
              </li>
              <li>
                <p>Account Leverage</p>
                <p>{props.leverage}</p>
              </li>

              <li>
                <p>
                  Profit Share
                  {/* <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Profit share to the trader on the 12,500 & 25,000
                        account is 60%. On the 50,000 account it is 55%
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger> */}
                </p>
                <p>60%</p>
              </li>
              <li>
                <p>
                  Position Holding
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Trades can be held overnight and over the weekend
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>Overnight and Over the weekend</p>
              </li>
            </ul>
            <div className='mb-4 hideBtn'>
              <a
                className='btn btn-primary cadText85'
                href='https://fund.traderscentral.com/sign-up'
              >
                {props.currency} <span style={{textDecoration: 'line-through'}}>{props.cadOriginalText}</span> {props.cadText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTFFunding
