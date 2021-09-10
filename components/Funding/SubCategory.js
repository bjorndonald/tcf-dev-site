import React from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'

function SubCategory (props) {
  return (
    <div className='row col-12'>
      <div className='card'>
        <Tab.Container id='subCategoryTypes' defaultActiveKey='monthly'>
          <div className='row headerSection align-items-center justify-content-between'>
            <h4>Trading Rules</h4>

            <Nav>
              <Nav.Item style={{ zIndex: 4 }}>
                <Nav.Link eventKey='monthly'>Monthly</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ zIndex: 2 }}>
                <Nav.Link eventKey='onetime'>One Time</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className='mt-5'>
            <Tab.Pane eventKey='monthly'>
              <div className='col-12'>
                <div className='row'>
                  <p>Question one with text?</p>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='onetime'>
              <div className='col-12'>
                <div className='row'>
                  <p>Question one with text?</p>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  )
}

export default SubCategory
