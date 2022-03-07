import React, {useState, useEffect} from 'react'
import {OverlayTrigger, Tab, Row, Col, Nav, Tooltip} from 'react-bootstrap'
import {gsap} from 'gsap/dist/gsap'
import $ from 'jquery'
import Big from 'big.js'
import {usePaginatedQuery} from 'react-query'
// import { Cashify } from 'cashify'
import MonthlySection from './MonthlySection'
import InfoIcon from '../../icons/InfoIcon'
import OneTimeSection from './OneTimeSection'
import OTFFundingSection from './OTFFundingSection'

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000)
    return this
}

const currencies = ['CAD', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'NZD', 'CHF']

async function fetchCurrencies(key) {
    const res = await fetch(
        process.env.NODE_ENV === 'development'
            ? 'https://headerng.herokuapp.com/https://api.traderscentral.com/currencies/v1/'
            : 'https://api.traderscentral.com/currencies/v1/',
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            // body: JSON.stringify({ user_id: id })
        }
    )
    return res.json()
}

export default function FundingSectionThree() {
    const {resolvedData, latestData, status} = usePaginatedQuery(
        ['statistics'],
        fetchCurrencies,
        {
            staleTime: 200,
            cacheTime: 10,
            onSuccess: () => {
                console.log('data', resolvedData)
                // props.creditlineAccountsReceived(resolvedData)
            },
            onError: error => {
                console.log('error', error)
            }
        }
    )
    const [cadText, setCadText] = useState('85')
    const [leverage, setLeverage] = useState('1:6')
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [currency, setCurrency] = useState('CAD')
    const [previous, setPreviousCurrency] = useState('CAD')

    var date = new Date('Oct 04, 2021')

    var countDownDate = new Date('Oct 04, 2021').getTime()
    useEffect(() => {
        setInterval(function () {
            // Get today's date and time
            var dateNow = new Date()
            dateNow.setTime(dateNow.getTime() - 8 * 60 * 60 * 1000)
            var now = dateNow.getTime()
            // console.log(new Date(new Date().toUTCString()).toTimeString())

            // Find the distance between now and the count down date
            var distance = countDownDate - now
            //
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24))
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            var seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setSeconds(seconds)
            setMinutes(minutes)
            setHours(hours)
            setDays(days)

            // If the count down is finished, write some text
            if (distance < 0) {
                setSeconds(0)
                setMinutes(0)
                setHours(0)
                setDays(0)
            }
        }, 1000)
    }, [])

    const activate = e => {
        $(e.target)
            .parent()
            .find('a')
            .removeClass('active')
        $(e.target).addClass('active')
    }

    const toggleSwitch = e => {
        $(e.target)
            .parent()
            .css('z-index', '4')
        $(e.target)
            .parent()
            .parent()
            .find('.nav-item')
            .each((i, x) => {
                console.log(x)
                if (
                    $(x)
                        .find('a')
                        .hasClass('active')
                ) {
                    $(x).css('z-index', '2')
                }
            })
    }

    const changeText = () => {
    }

    const newCurrency = value => {
        // const cashify = new Cashify({ base: 'CAD', rates: resolvedData.data })
        // const converted = cashify.convert(10, {
        //   from: 'CAD',
        //   to: currency,
        //   BigJs: Big
        // })
        // console.log('convert', converted)
        setPreviousCurrency(currency)
        setCurrency(value)
    }

    return (
        <div className='fundingSectionThree py-5 d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row py-5'>
                    <div className='col-12'>
                        <div className='sectionTitleWrap text-center mb-4'>
                            <h2>Plans and Pricing</h2>
                        </div>
                    </div>
                    <Tab.Container id='nav-tab-example' defaultActiveKey='otffunding'>
                        <div className='col-12 text-center '>
                            <div className='priceTableNavs d-flex justify-content-center mb-4'>
                                <Nav className='bubbles'>
                                    <Nav.Item style={{zIndex: 4, marginRight: 16}}>
                                        <Nav.Link onClick={toggleSwitch} eventKey='otffunding'>
                                            OTF Instant
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item style={{zIndex: 2, marginRight: 16}}>
                                        <Nav.Link onClick={toggleSwitch} eventKey='onetime'>
                                            OTF Challenge
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item style={{zIndex: 2}}>
                                        <Nav.Link onClick={toggleSwitch} eventKey='monthly'>
                                            Monthly
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className='col-12'>
                            <Tab.Content className='mt-1'>
                                <Tab.Pane eventKey='monthly'>
                                    <MonthlySection
                                        currencies={resolvedData?.data}
                                        currency={currency}
                                        previous={previous}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey='otffunding'>
                                    <OTFFundingSection
                                        currencies={resolvedData?.data}
                                        currency={currency}
                                        previous={previous}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey='onetime'>
                                    <OneTimeSection
                                        currencies={resolvedData?.data}
                                        currency={currency}
                                        previous={previous}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                    <div className='currency-switcher'>
                        <div className='fragment'>
                            <div className='bubble'>
                                <img src='/images/funding/dollar_sign.png' alt='Dollar sign'/>
                            </div>
                            <span>Select currency: </span>
                        </div>

                        <ol>
                            {currencies.map((x, i) => (
                                <li
                                    key={i}
                                    onClick={() => newCurrency(x)}
                                    className={x === currency ? 'active' : ''}
                                >
                                    {x}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
