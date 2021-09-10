import React from 'react'

import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import Fee from './Fee'
import { fees } from './fees'

function Fees_section () {
  return (
    <Tab.Container id='fees-section' defaultActiveKey='deposits'>
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
  )
}

export default Fees_section
