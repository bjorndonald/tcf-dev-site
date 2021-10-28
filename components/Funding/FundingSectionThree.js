import React, { useState, useEffect } from 'react'
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from 'react-bootstrap'
import { gsap } from 'gsap/dist/gsap'
import $ from 'jquery'
import MonthlySection from './MonthlySection'
import InfoIcon from '../../icons/InfoIcon'
import OneTimeSection from './OneTimeSection'
import OTFFundingSection from './OTFFundingSection'

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000)
  return this
}

export default function FundingSectionThree () {
  const [cadText, setCadText] = useState('85')
  const [leverage, setLeverage] = useState('1:6')
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".fundingSectionThree",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 1,
  //       pin:true
  //     }
  //   })
  //   .add("start")
  //   .from(".fundingSectionThree .sectionTitleWrap", { y: 50, opacity : 0 }, "start")
  //   //.from(".fundingSectionThree .nav .nav-link:first-child", { x: -50, opacity : 0 })
  //   .from(".fundingSectionThree .priceTableNav", { y: 50, opacity : 0 }, "start")
  //   .from(".fundingSectionThree .priceTableNav+p", { y: 50, opacity : 0 }, "start")
  //   .from(".fundingSectionThree #nav-tab-example-tabpane-monthly .btn.btn-outline-dark", { y: 50, opacity : 0 }, "start")
  //   .from(".fundingSectionThree .pTable", { y: 50, opacity : 0 }), "start";
  // }, [tl]);
  var date = new Date('Oct 04, 2021')

  var countDownDate = new Date('Oct 04, 2021').getTime()
  useEffect(() => {
    setInterval(function () {
      // Get today's date and time
      var dateNow = new Date()
      dateNow.setTime(dateNow.getTime() - 8 * 60 * 60 * 1000)
      var now = dateNow.getTime()
      // console.log(new Date(new Date().toUTCString()).toTimeString())

      // Find the distance between now and the count down date
      var distance = countDownDate - now
      //
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setSeconds(seconds)
      setMinutes(minutes)
      setHours(hours)
      setDays(days)

      // If the count down is finished, write some text
      if (distance < 0) {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setDays(0)
      }
    }, 1000)
  }, [])

  const activate = e => {
    $(e.target)
      .parent()
      .find('a')
      .removeClass('active')
    $(e.target).addClass('active')
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

  const changeText = () => {}

  return (
    <div className='fundingSectionThree py-5 d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='row py-5'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2>Plans and Pricing</h2>
            </div>
          </div>
          <Tab.Container id='nav-tab-example' defaultActiveKey='monthly'>
            <div className='col-12 text-center '>
              <div className='priceTableNavs d-flex justify-content-center mb-4'>
                <Nav className='bubbles'>
                  <Nav.Item style={{ zIndex: 4, marginRight: 16 }}>
                    <Nav.Link onClick={toggleSwitch} eventKey='monthly'>
                      Monthly
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ zIndex: 2, marginRight: 16 }}>
                    <Nav.Link onClick={toggleSwitch} eventKey='otffunding'>
                      OTF Instant
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{ zIndex: 2 }}>
                    <Nav.Link onClick={toggleSwitch} eventKey='onetime'>
                      OTF Challenge
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className='col-12'>
              <Tab.Content className='mt-1'>
                <Tab.Pane eventKey='monthly'>
                  <MonthlySection />
                </Tab.Pane>
                <Tab.Pane eventKey='otffunding'>
                  <OTFFundingSection />
                </Tab.Pane>
                <Tab.Pane eventKey='onetime'>
                  <OneTimeSection />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  )
}
