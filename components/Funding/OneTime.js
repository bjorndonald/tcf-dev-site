import React from 'react'
import { gsap } from 'gsap/dist/gsap'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'

import $ from 'jquery'
import InfoIcon from '../../icons/InfoIcon'

function OneTime (props) {
  return (
    <div className='wrapper'>
      <div className='col-12 col-md-5 d-flex justify-content-center bottom-one-time'>
        {' '}
        <div className='pTableSingleListWrap  pTableSingleListWrapRound'>
          <div className='pTableSingleList'>
            <div className='column'>
              <h3>Stage 1</h3>
            </div>
            <ul>
              <li>
                <p>Leverage</p>
                <p>1:200</p>
              </li>
              <li>
                <p>
                  Trading Period
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Trading period refers to the overall duration of the
                        evaluation.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>30 days</p>
              </li>
              <li>
                <p>
                  Profit Target
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Profit target means that a trader must hit a profit in
                        the sum of closed positions on the assigned trading
                        account.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>8%</p>
              </li>
              <li>
                <p>
                  Drawdown Limit
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        This means, the equity of the trading account must not,
                        at any moment during both stages duration, reach a loss
                        of -10%.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>10%</p>
              </li>
              <li>
                <p>
                  {' '}
                  Minimum trading days
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        A trading day is defined as a day when at least one
                        trade is placed.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>10</p>
              </li>
              <li>
                <p>
                  Rule
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Traders will be allowed to choose between having a 50%
                        positive days or 5% max daily loss limit on their
                        evaluation
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>50% positive days or 5% daily loss limit</p>
              </li>
            </ul>

            <div className='column'>
              <h3>Stage 2</h3>
            </div>
            <ul>
              <li>
                <p>Leverage</p>
                <p>1:200</p>
              </li>
              <li>
                <p>
                  Trading Period
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Trading period refers to the overall duration of the
                        evaluation.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>60 days</p>
              </li>
              <li>
                <p>
                  Profit Target
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Profit target means that a trader must hit a profit in
                        the sum of closed positions on the assigned trading
                        account.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>4%</p>
              </li>
              <li>
                <p>
                  Drawdown Limit
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        This means, the equity of the trading account must not,
                        at any moment during both stages duration, reach a loss
                        of -10%.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>10%</p>
              </li>
              <li>
                <p>
                  {' '}
                  Minimum trading days
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        A trading day is defined as a day when at least one
                        trade is placed.
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>10</p>
              </li>
              <li>
                <p>
                  Rule
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Traders will be allowed to choose between having a 50%
                        positive days or 5% max daily loss limit on their
                        evaluation
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>50% positive days or 5% daily loss limit</p>
              </li>
              <li>
                <p>
                  Profit Share
                  <OverlayTrigger
                    placement={'top'}
                    overlay={
                      <Tooltip>
                        Profit share is 85% to the Traders and it’s only
                        available on the live funded account
                      </Tooltip>
                    }
                  >
                    <div>
                      <InfoIcon />
                    </div>
                  </OverlayTrigger>
                </p>
                <p>85%</p>
              </li>
            </ul>
          </div>
          <div className=' hideBtn'>
            <a
              className='btn btn-primary cadText85'
              href='https://fund.traderscentral.com/sign-up'
            >
              {'CAD ' + props.cadText}
            </a>
          </div>
          <small>Click to pay</small>
        </div>
      </div>
    </div>
  )
}

export default OneTime
