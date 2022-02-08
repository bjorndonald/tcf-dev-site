import React from 'react'

function FundingSectionOne() {
    return (
        <div className='fundingOne py-3 d-flex align-items-center justify-content-center'>
            <div className='background'></div>
            <img className="backgroundImage" src="/images/funding/mol-banner.jpeg" alt=""/>
            <a
                href='https://fund.traderscentral.com/sign-up'
                className='btn btn-black'
            >
                Start referring
            </a>
        </div>
    )
}

export default FundingSectionOne
