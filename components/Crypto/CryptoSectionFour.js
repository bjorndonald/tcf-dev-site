import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import Fee from './Fee'
import { fees } from './fees'

export default function CryptoSectionFour () {
  // useEffect(() => {
  //   tl.from('.cryptoSectionFour', {
  //     opacity: 0,
  //     duration: 0.8,
  //     delay: 0.8,
  //     ease: 'easeIn'
  //   })
  // }, [tl])
  return (
    <div className='cryptoSectionFour py-5 d-flex align-items-center '>
      <div className='container'>
        <h1 style={{ color: 'black' }}>To the moon in three steps</h1>
        <div className='row steps d-flex justify-content-between'>
          <div className='card col-md-3 d-flex shadow-sm flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/signup.svg' alt='' />
            <h4 className='my-4'>Portfolios</h4>
            <p>
              Buy and sell popular digital currencies, keep track of them in the
              one place.
            </p>
          </div>

          <div className='card col-md-3 d-flex shadow-sm flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/verify.svg' alt='' />
            <h4 className='my-4'>Accessibility</h4>
            <p>
              24/7 trading platform accessible worldwide, compatible with
              multiple devices.
            </p>
          </div>

          <div className='card col-md-3 d-flex shadow-sm flex-column align-items-center justify-content-center'>
            <img src='/images/crypto/celebration.svg' alt='' />
            <h4 className='my-4'>Vault Protection</h4>
            <p>
              For added security, store your funds in a vault with time delayed
              withdrawals.
            </p>
          </div>
        </div>

        <div className='fees-section '>
          <Tab.Container id='fees-section' defaultActiveKey='deposits'>
            <div className='row justify-content-center'>
              <h1 className='text-center'>Fees</h1>
            </div>
            <div className='row justify-content-center '>
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey='deposits'>Deposits</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='trading'>Trading</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='withdrawals'>Withdrawals</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div className='row col-12 m-0 p-0'>
              <Tab.Content className='mt-4'>
                <Tab.Pane eventKey='deposits'>
                  <div className='row col-12 deposits justify-content-center m-0 p-0'>
                    {/* <img src='/images/crypto/deposits.jpg' alt='' /> */}
                    <Fee item={fees.deposits[0]} />
                    <Fee item={fees.deposits[1]} />
                    <Fee item={fees.deposits[2]} />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='trading'>
                  <div className='row col-12 trading justify-content-center m-0 p-0'>
                    <Fee item={fees.trading[0]} />
                    <Fee item={fees.trading[1]} />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='withdrawals'>
                  <div className='row col-12 withdrawals justify-content-center m-0 p-0'>
                    <Fee item={fees.withdrawals[0]} />
                    <Fee item={fees.withdrawals[1]} />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  )
}
