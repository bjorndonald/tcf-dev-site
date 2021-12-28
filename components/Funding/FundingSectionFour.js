import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import { gsap } from 'gsap/dist/gsap'
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
import PositionTable from '../Faqs/PositionTable'
// import SubCategories from './SubCategories'
import $ from 'jquery'
import OTFTrading from './OTFTrading'
import OTFFTrading from './OTFFTrading'
import MonthlyTrading from './MonthlyTrading'
import MonthlyCapital from './MonthlyCapital'
import MonthlyWithDrawals from './MonthlyWithDrawals'
import OTFWithDrawals from './OTFWithDrawals'
import OTFCapital from './OTFCapital'
import OTFInstantCapital from './OTFInstantCapital'

export default function FundingSectionFour () {
  const toggle = e => {
    $(
      $(e.target)
        .parent()
        .find('span')[0]
    ).toggle()
    $(
      $(e.target)
        .parent()
        .find('span')[1]
    ).toggle()
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
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".fundingSectionFour",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 1,
  //       pin:true
  //     }
  //   })
  //   .add("start")
  //   .from(".fundingSectionFour .sectionTitleWrap", { x: 50, opacity : 0 }, "start")
  //   .from(".fundingSectionFour .gaspSlideRight", { x: -50, opacity : 0 }, "start");

  // }, [tl]);
  return (
    <div className='fundingSectionFour d-flex align-items-center '>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2 style={{ fontSize: '48px' }}>Q&amp;A’s</h2>
              <p>Relevant information regarding your preferred plan</p>
            </div>
          </div>
          <Tab.Container id='nav-tab-example' defaultActiveKey='otffunding'>
            <div className='col-12 text-center tableNavs'>
              <div className='priceTableNavs d-flex justify-content-center mb-4'>
                <Nav className='bubbles'>
                  <Nav.Item style={{ zIndex: 4, marginRight: 16 }}>
                    <Nav.Link onClick={toggleSwitch} eventKey='otffunding'>
                      OTF Instant
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ zIndex: 2, marginRight: 16 }}>
                    <Nav.Link onClick={toggleSwitch} eventKey='onetime'>
                      OTF Challenge
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ zIndex: 2 }}>
                    <Nav.Link onClick={toggleSwitch} eventKey='monthly'>
                      Monthly
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className='col-12 subcategories'>
              <Tab.Content className='mt-1'>
                <Tab.Pane eventKey='monthly'>
                  <Tab.Container id='subcategories' defaultActiveKey='trading'>
                    <div className='col-12 gaspSlideRight'>
                      <div className='row mt-1 justify-content-center'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link eventKey='trading'>
                              Trading Rules
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey='position'>
                              Position Size{' '}
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey='capital'>
                              Capital Growth
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey='withdrawals'>
                              Withdrawals
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>

                    <div className='col-12'>
                      <Tab.Content className='mt-5'>
                        <Tab.Pane eventKey='trading' id='trading'>
                          <div className='col-8 m-auto' id='trading-section'>
                            <div className='col-12 gaspSlideRight'>
                              <MonthlyTrading />
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey='position' id='position'>
                          <div className='col-8 m-auto' id='position-section'>
                            <PositionTable />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey='capital' id='capital'>
                          <div className='col-8 m-auto' id='position-section'>
                            <MonthlyCapital />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey='withdrawals' id='withdrawals'>
                          <div className='col-8 m-auto' id='position-section'>
                            <MonthlyWithDrawals />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey='onetime'>
                  <Tab.Container id='subcategories' defaultActiveKey='trading'>
                    <div className='col-12 gaspSlideRight'>
                      <div className='row mt-1 justify-content-center'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link eventKey='trading'>
                              Trading Rules
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey='capital'>
                              Capital Growth
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey='withdrawals'>
                              Withdrawals
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>

                    <div className='col-12'>
                      <Tab.Content className='mt-5'>
                        <Tab.Pane eventKey='trading' id='trading'>
                          <div className='col-8 m-auto' id='trading-section'>
                            <div className='col-12 gaspSlideRight'>
                              <OTFTrading />
                            </div>
                          </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey='position' id='position'>
                          <div className='col-8 m-auto' id='position-section'>
                            <PositionTable />
                          </div>
                        </Tab.Pane> */}
                        <Tab.Pane eventKey='capital' id='capital'>
                          <div className='col-8 m-auto' id='position-section'>
                            <OTFCapital />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey='withdrawals' id='withdrawals'>
                          <div className='col-8 m-auto' id='position-section'>
                            <OTFWithDrawals />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey='otffunding'>
                  <Tab.Container id='subcategories' defaultActiveKey='trading'>
                    <div className='col-12 gaspSlideRight'>
                      <div className='row mt-1 justify-content-center'>
                        <Nav>
                          <Nav.Item>
                            <Nav.Link eventKey='trading'>
                              Trading Rules
                            </Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey='capital'>
                              Capital Growth
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey='withdrawals'>
                              Withdrawals
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>

                    <div className='col-12'>
                      <Tab.Content className='mt-5'>
                        <Tab.Pane eventKey='trading' id='trading'>
                          <div className='col-8 m-auto' id='trading-section'>
                            <div className='col-12 gaspSlideRight'>
                              <OTFFTrading />
                            </div>
                          </div>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey='position' id='position'>
                          <div className='col-8 m-auto' id='position-section'>
                            <PositionTable />
                          </div>
                        </Tab.Pane> */}
                        <Tab.Pane eventKey='capital' id='capital'>
                          <div className='col-8 m-auto' id='position-section'>
                            <OTFInstantCapital />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey='withdrawals' id='withdrawals'>
                          <div className='col-8 m-auto' id='position-section'>
                            <OTFWithDrawals />
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  )
}
