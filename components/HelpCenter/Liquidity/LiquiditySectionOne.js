import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
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

export default function LiquiditySectionOne () {
  const router = useRouter()

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
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".helpCenterSectionTwo",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".helpCenterSectionTwo .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxFour", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');

  // }, [tl]);

  return (
    <div className='cryptoHelpSectionOne d-flex align-items-center'>
      <div className='container '>
        <div className='row '>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link href='/help-center'>Home</Link>
              </li>
              <li class='breadcrumb-item'>
                <a href='#'>{router.query.name}</a>
              </li>
              {/*
              <li class='breadcrumb-item active' aria-current='page'>
                Data
              </li> */}
            </ol>
          </nav>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2>FAQ</h2>
            </div>
          </div>
        </div>
        <div className='liquidity-section'>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={props => (
                    <div onClick={toggle}>
                      <Button {...props} />
                    </div>
                  )}
                  variant='link'
                  eventKey='0'
                >
                  <p>What are the requirements to access liquidity?</p>
                  <span>+</span>
                  <span style={{ display: 'none' }}>-</span>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <ul>
                    <li>You must be over the age of 18</li>
                    <li>Have a registered company</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* ////////////////////// */}
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={props => (
                    <div onClick={toggle}>
                      <Button {...props} />
                    </div>
                  )}
                  variant='link'
                  eventKey='1'
                >
                  <p>How long does it take to get set up?</p>
                  <span>+</span>
                  <span style={{ display: 'none' }}>-</span>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  For our default liquidity packages{','} you{"'"}ll be up and
                  running in 24 hours. For bespoke plans allow 5-7 business day
                  for our team to build your model.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* ////////////////////// */}
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={props => (
                    <div onClick={toggle}>
                      <Button {...props} />
                    </div>
                  )}
                  variant='link'
                  eventKey='2'
                >
                  <p>What happens after I apply?</p>
                  <span>+</span>
                  <span style={{ display: 'none' }}>-</span>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                  You{"'"}ll be sent an automated email containing the pdf link
                  for our package details. A representative from our team will
                  contact you within 24 hours.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* ////////////////////// */}
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={props => (
                    <div onClick={toggle}>
                      <Button {...props} />
                    </div>
                  )}
                  variant='link'
                  eventKey='3'
                >
                  <p>Are partners from all over globe accepted?</p>
                  <span>+</span>
                  <span style={{ display: 'none' }}>-</span>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                  Yes we accept partners from all over the globe. You do however
                  need to check locally if you require regulation to start your
                  own prop fund.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/* ////////////////////// */}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
