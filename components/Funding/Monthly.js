import React, {useState} from 'react'
import {gsap} from 'gsap/dist/gsap'
import {OverlayTrigger, Tab, Row, Col, Nav, Tooltip} from 'react-bootstrap'
import InfoIcon from '../../icons/InfoIcon'

function Monthly(props) {
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
        <div className='wrapper'>
            <div className='col-12 col-md-5 d-flex justify-content-center bottom-monthly'>
                {' '}
                <div className='pTableSingleListWrap  pTableSingleListWrapRound'>
                    <div className='pTableSingleList'>
                        <div className='column'>
                            <h3>30 days</h3>
                            <p className='bold'>Cancel anytime</p>
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
                                            <InfoIcon/>
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
                                            <InfoIcon/>
                                        </div>
                                    </OverlayTrigger>
                                </p>
                                <p>Five Percent</p>
                            </li>
                            <li>
                                <p>
                                    Drawdown Limit
                                    <OverlayTrigger
                                        placement={'top'}
                                        overlay={
                                            <Tooltip>
                                                The drawdown limit refers to closed trades.
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <InfoIcon/>
                                        </div>
                                    </OverlayTrigger>
                                </p>
                                <p>Ten Percent</p>
                            </li>
                            <li>
                                <p>
                                    Trading Products
                                    <OverlayTrigger
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
                                            <InfoIcon/>
                                        </div>
                                    </OverlayTrigger>
                                </p>
                                <p>Forex, Gold, Cryptos* and Indices*</p>
                            </li>
                            <li>
                                <p>Account Leverage</p>
                                <p>{props.leverage}</p>
                            </li>

                            <li>
                                <p>
                                    Profit Share
                                    <OverlayTrigger
                                        placement={'top'}
                                        overlay={
                                            <Tooltip>
                                                Profit share to the trader on the 12,500 & 25,000
                                                account is 60%. On the 50,000 account it is 55%
                                            </Tooltip>
                                        }
                                    >
                                        <div>
                                            <InfoIcon/>
                                        </div>
                                    </OverlayTrigger>
                                </p>
                                <p>up to 60%</p>
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
                                            <InfoIcon/>
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
                                CAD <span
                                style={{textDecoration: 'line-through'}}>{props.cadOriginalText}</span> {props.cadText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monthly
