import React, {Fragment, useState} from 'react'
import {OverlayTrigger, Tab, Row, Col, Nav, Tooltip} from 'react-bootstrap'
import Big from 'big.js'
// import { Cashify } from 'cashify'
import Left from './monthly/Left'
import Right from './monthly/Right'
import Data from './monthly/Data'
import Monthly from './Monthly'
import {useEffect} from 'react'

function MonthlySection(props) {
    // const [cadOriginalText, setCadOriginalText] = useState('85')
    // const [cadText, setCadText] = useState('68')
    // const [cadCurrency, setCadCurrency] = useState('68')
    // const [cadCurrencyOriginal, setCadCurrencyOriginal] = useState('85')

    const [cadOriginalText, setCadOriginalText] = useState('')
    const [cadText, setCadText] = useState('Limited')
    const [cadCurrency, setCadCurrency] = useState('Limited')
    const [cadCurrencyOriginal, setCadCurrencyOriginal] = useState('')

    const [leverage, setLeverage] = useState('1:4')
    const activate = e => {
        $(e.target)
            .parent()
            .find('a')
            .removeClass('active')
        $(e.target).addClass('active')
    }

    useEffect(() => {
        if (typeof(cadOriginalText) == 'number' && typeof(cadText) == 'number') {
            // const cashify = new Cashify({
            //   base: 'CAD',
            console.log('sslsl', props.currencies)
            //   rates: props.currencies
            // })
            // const converted = cashify.convert(parseFloat(cadText), {
            //   from: 'CAD',
            //   to: props.currency,
            //   BigJs: Big
            // })
            if (props.currencies) {
                var converted = 0
                var convertedOriginal = 0

                converted = parseFloat(cadText) * props.currencies[props.currency]
                console.log('sslsl', props.currencies[props.currency])
                convertedOriginal =
                    parseFloat(cadOriginalText) * props.currencies[props.currency]

                // // // const convertedOriginal = cashify.convert(parseFloat(cadOriginalText), {
                // // //   from: 'CAD',
                // // //   to: props.currency,
                // // //   BigJs: Big
                // // // })
                setCadCurrency(converted.toFixed(1))
                setCadCurrencyOriginal(convertedOriginal.toFixed(1))
            }
            return () => {
            }
        } else {
            console.log(cadText)
            setCadCurrency(cadText)
            setCadCurrencyOriginal(cadOriginalText)
            return () => {
            }
        }
    }, [props.currency, cadText])

    return (
        <Fragment>
            <p className='mb-4 subtitle' style={{textAlign: 'center'}}>
                Live funding in 24 hours, no evaluation needed
            </p>
            <div className='row funding-prices'>
                <div className='col-12 text-center mb-5 '>
                    <OverlayTrigger placement={'top'} overlay={<Tooltip>CAD 68</Tooltip>}>
                        <a
                            onClick={e => {
                                // const converted =
                                //   parseFloat(cadText) * props.currencies[props.currency]
                                // const convertedOriginal =
                                //   parseFloat(cadOriginalText) * props.currencies[props.currency]
                                // setCadText(parseFloat('68'))
                                // setCadOriginalText(parseFloat('85'))
                                setCadText('Limited')
                                setCadOriginalText('')
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
                                // setCadOriginalText('170')
                                // setCadText('128')
                                setCadText('Limited')
                                setCadOriginalText('')
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
                    cadOriginalText={cadCurrencyOriginal}
                    cadText={cadCurrency}
                />
            </div>
        </Fragment>
    )
}

export default MonthlySection
