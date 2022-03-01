import React from 'react'

function FundingSectionOne() {
    return (
        <div className='fundingOne py-3 d-flex align-items-center justify-content-center'>
            <div className='container-fluid text-center'>
                <h2 className="mb-3">Sign up</h2>
                <h4 className="mb-4">And get 30% off your first plan</h4>
                <a
                    href='https://fund.traderscentral.com/sign-up'
                    className='btn'
                >
                    Claim discount
                </a>
            </div>
        </div>
    )
}

export default FundingSectionOne