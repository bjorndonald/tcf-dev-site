import React from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import SubCategory from './SubCategory'

function SubCategories () {
  return (
    <Tab.Container id='subcategories' defaultActiveKey='trading'>
      <div className='col-12 gaspSlideRight'>
        <div className='row mt-5 justify-content-center'>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey='trading'>Trading Rules</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='position'>Position Size </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='capital'>Capital Growth</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='withdrawals'>Withdrawals</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      <div className='col-12'>
        {/* <Tab.Content className='mt-5'>
          <Tab.Pane eventKey='trading' id='trading'>
              <SubCategory />
          </Tab.Pane>
        </Tab.Content> */}
      </div>
    </Tab.Container>
  )
}

export default SubCategories
