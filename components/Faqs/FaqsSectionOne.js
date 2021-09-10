import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { connect } from 'react-redux'
import PositionTable from './PositionTable'

function FaqsSectionOne (props) {
  // useEffect(() => {
  //   props.timeline
  //     .to('.fundingSectionOne', {
  //       opacity: 1,
  //       duration: 0.8,
  //       delay: 0.8,
  //       ease: 'easeIn'
  //     })
  //     .from(
  //       '.fundingSectionOne h1',
  //       { x: '+=50', opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0'
  //     )
  //     .from(
  //       '.fundingSectionOne h2',
  //       { x: -50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.fundingSectionOne img',
  //       { y: 50, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  // }, [])

  return (
    <div className='faqsSectionOne py-5 d-flex align-items-center '>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-5'>
              <h2>Everything you need to know</h2>
              <p>Relevant information regarding your preferred plan</p>
            </div>
          </div>
          {/* <SubCategories /> */}
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

            <div className='col-12 types'>
              <Tab.Content className='mt-5'>
                <Tab.Pane eventKey='trading' id='trading'>
                  <Tab.Container
                    id='subCategoryTypes'
                    defaultActiveKey='monthly'
                  >
                    <div className='col-8 m-auto' id='trading-section'>
                      <div className='card pb-5 pl-5 pr-3 pt-3'>
                        <div className='row'>
                          <div className='nav-switch headerSection align-items-center justify-content-between'>
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
                        </div>
                        <div className='col-12'>
                          <Tab.Content className='mt-5'>
                            <Tab.Pane eventKey='monthly' id='monthly'>
                              <p className='mb-3'>Question one with text?</p>
                              <small className='mb-5'>
                                Answer to first question, for question two with
                                text in a text question that requires text for
                                an answer
                              </small>
                              <p className='mt-2 mb-3'>
                                Sample text for a question text
                              </p>
                              <p className='mb-3'>
                                Question four with real text also preview?
                              </p>
                              <p className='mb-3'>
                                Another example of a question of FAQ
                              </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='onetime' id='onetime'>
                              <p className='mb-3'>Question one with text?</p>
                              <small className='mb-5'>
                                Answer to first question, for question two with
                                text in a text question that requires text for
                                an answer
                              </small>
                              <p className='mt-2 mb-3'>
                                Sample text for a question text
                              </p>
                              <p className='mb-3'>
                                Question four with real text also preview?
                              </p>
                              <p className='mb-3'>
                                Another example of a question of FAQ
                              </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </div>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey='position' id='position'>
                  <div className='col-8 m-auto' id='position-section'>
                    <PositionTable />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='capital' id='capital'>
                  <div className='col-8 m-auto' id='capital-section'>
                    <PositionTable />
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

const mapDispatchToProps = dispatch => ({
  setTimeline: timeline => {
    dispatch(setTimeline(timeline))
  },
  clearTimeline: timeline => {
    dispatch(clearTimeline(timeline))
  }
})

const mapStateToProps = state => ({
  timeline: state.config.timeline
})

export default connect(mapStateToProps, mapDispatchToProps)(FaqsSectionOne)
