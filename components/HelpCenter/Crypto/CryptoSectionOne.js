import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { gsap } from 'gsap/dist/gsap'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import Fees_section from './Fees_section'
import Restrictions from './Restrictions'
import FAQ from './FAQ'

export default function CryptoSectionOne () {
  const router = useRouter()
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
              <h2>Everything you need to know</h2>
            </div>
          </div>
        </div>
        <div className='crypto-section'>
          <Tab.Container id='crypto-section' defaultActiveKey='fees'>
            <div className='row justify-content-center '>
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey='fees'>Fees</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='restrictions'>Restrictions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='faq'>FAQ</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className='row col-12 m-0 p-0'>
              <Tab.Content className='mt-4'>
                <Tab.Pane eventKey='fees'>
                  <Fees_section />
                </Tab.Pane>

                <Tab.Pane eventKey='restrictions'>
                  <div className='col-md-8' style={{ margin: 'auto' }}>
                    <Restrictions />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='faq'>
                  <div className='col-md-8' style={{ margin: 'auto' }}>
                    <FAQ />
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
