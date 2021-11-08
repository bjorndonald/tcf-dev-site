import React from 'react'
import {
  Accordion,
  OverlayTrigger,
  Tab,
  Row,
  Col,
  Nav,
  Tooltip,
  Card,
  Button
} from 'react-bootstrap'
import Articles from './Articles'

function BasicArticlesSectionTwo () {
  return (
    <div className='basicArticlesSectionTwo'>
      <div className='container'>
        <Tab.Container id='articles-section' defaultActiveKey='all'>
          <div className='col-12 gaspSlideRight'>
            <div className='row mt-1 justify-content-center subcategories'>
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey='all'>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='forex'>Forex</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='stocks'>Stocks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='crypto'>Crypto</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className='col-12'>
            <Tab.Content className='mt-5'>
              <Tab.Pane eventKey='all' id='all'>
                <div className='col-md-12'>
                  <Articles />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>

        <div className='button'>
          <a className='btn btn-black'>See more articles</a>
        </div>
      </div>
    </div>
  )
}

export default BasicArticlesSectionTwo
