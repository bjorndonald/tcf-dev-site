import React from 'react'

function FundingSectionOne () {
    return (
        <div className='fundingOne py-3 d-flex align-items-center justify-content-center'>
            <div className='background'></div>
            <div className='container-fluid web px-0 d-flex align-items-center justify-content-center'>
                {/* <h4>Get 30% off your first plan</h4> */}
                <a
                    href='https://fund.traderscentral.com/sign-up'
                    className='btn btn-black'
                >
                    Get discount
                </a>
            </div>

            <div className='container-fluid mobile px-0 d-flex align-items-center justify-content-center'>
                <img src='/images/funding/new_year_banner_mobile.png' alt='' />
                <h4>
                    Get 30% off your <br />
                    first plan
                </h4>
                <a
                    href='https://fund.traderscentral.com/sign-up'
                    className='btn btn-black'
                >
                    Get discount
                </a>
            </div>
        </div>
    )
}

export default FundingSectionOne