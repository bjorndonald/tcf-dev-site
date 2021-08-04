import React, { useState ,useEffect } from "react";
import { OverlayTrigger, Tab, Row, Col, Nav, Tooltip } from "react-bootstrap";
import { gsap } from "gsap/dist/gsap";

export default function FundingSectionThree({tl}) {
  const [cadText, setCadText] = useState("85");
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".fundingSectionThree",
        start: "top 150px",
        end: "bottom center",
        scrub: 1,
        pin:true
      }	
    })
    .add("start")
    .from(".fundingSectionThree .sectionTitleWrap", { y: 50, opacity : 0 }, "start")
    //.from(".fundingSectionThree .nav .nav-link:first-child", { x: -50, opacity : 0 })
    .from(".fundingSectionThree .priceTableNav", { y: 50, opacity : 0 }, "start")
    .from(".fundingSectionThree .priceTableNav+p", { y: 50, opacity : 0 }, "start")
    .from(".fundingSectionThree #nav-tab-example-tabpane-monthly .btn.btn-outline-dark", { y: 50, opacity : 0 }, "start")
    .from(".fundingSectionThree .pTable", { y: 50, opacity : 0 }), "start";
  }, [tl]);

  return (
    <div className="fundingSectionThree py-5 px-4 d-flex align-items-center heightHv">
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-12">
            <div className="sectionTitleWrap text-center mb-4">
              <h2>Plans and Pricing</h2>
            </div>
          </div>
          <Tab.Container id="nav-tab-example" defaultActiveKey="monthly">
            <div className="col-12 text-center ">
              <div className="priceTableNav mb-4">
                <Nav>
                  <Nav.Item>
                    <Nav.Link eventKey="monthly">Monthly</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="onetime">One Time Fee</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <p>Live funding in 24 hours, no evaluation needed</p>
            </div>
            <div className="col-12">
              <Tab.Content className="mt-5">
                <Tab.Pane eventKey="monthly">
                  <div className="row">
                    <div className="col-12 text-center mb-5 ">
                      <OverlayTrigger
                        placement={"top"}
                        overlay={<Tooltip>CAD 85</Tooltip>}
                      >
                        <a
                          onClick={() => setCadText("85")}
                          className="btnCad85 btn btn-outline-dark mx-1"
                        >
                          USD 12,500
                        </a>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement={"top"}
                        overlay={<Tooltip>CAD 170</Tooltip>}
                      >
                        <a
                          onClick={() => setCadText("170")}
                          className="btnCad170 btn btn-outline-dark mx-1"
                        >
                          USD 25,000
                        </a>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement={"top"}
                        overlay={<Tooltip>CAD 345</Tooltip>}
                      >
                        <a
                          onClick={() => setCadText("345")}
                          className="btnCad345 btn btn-outline-dark mx-1"
                        >
                          USD 50,000
                        </a>
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="row d-flex align-items-stretch justify-content-center pTable">
                    <div className="col-12 col-md-3 pTableDetailWrap pTableDetailM">
                      <div className="pTableDetail ">
                        <h3>Funding Options</h3>
                        <ul>
                          <li>Trading Platform </li>
                          <li>
                            Trading Hours
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Trades can be placed anytime of the day.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Withdrawal Target
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Withdrawal requests must be made before the
                                  20th is each month. Withdrawals are paid
                                  between the 25th - 30th of every month via
                                  Bank Transfer, Paypal, Skrill, Mobile Money,
                                  Interac, Cash Pick up and Bitcoin.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Drawdown Limit
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  The drawdown limit refers to closed trades.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Trading Products
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  A trading day is defined as a day when at
                                  least one trade is placed.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>Account Leverage</li>
                          <li>
                            Profit Share
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Profit share to the trader on the 12,500 &
                                  25,000 account is 60%. On the 50,000 account
                                  it is 55%
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Position Holding
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Trades can be held overnight and over the
                                  weekend
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 pTableSingleListWrap pTableSingleListWrapRound">
                      <div className="pTableSingleList">
                        <h3>30 Days</h3>
                        <p>Subscription Cycle. Cancel Anytime!</p>
                        <ul>
                          <li>MetaTrader5</li>
                          <li>24/5</li>
                          <li>Five Percent</li>
                          <li>Ten Percent</li>
                          <li>Forex and Gold</li>
                          <li>1:3</li>
                          <li>up to 60%</li>
                          <li>Overnight and Over the weekend</li>
                        </ul>
                        <div className="mb-4 hideBtn">
                          <a className="btn btn-primary cadText85" href="#">
                            {"CAD " + cadText}
                          </a>
                        </div>
                        <p>Click the button above to make payment</p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="onetime">
                  <div className="row d-flex align-items-stretch justify-content-center pTable">
                    <div className="col-12 col-md-4 pTableDetailWrap">
                      <div className="pTableDetail ">
                        <h3>Trading Objectives</h3>
                        <ul>
                          <li>
                            Profit Share
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Profit share refers to the profit percentage
                                  paid to the trader
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>

                          <li>Leverage</li>
                          <li>
                            Trading Period
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Trading period refers to the overall duration
                                  of the evaluation.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Total Profit Target (2 Stages)
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  Profit target means that a trader must hit a
                                  profit in the sum of closed positions on the
                                  assigned trading account.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Drawdown Limit
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  This means, the equity of the trading account
                                  must not, at any moment during both stages
                                  duration, reach a loss of -10%.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li>
                            Minimum trading days
                            <OverlayTrigger
                              placement={"top"}
                              overlay={
                                <Tooltip>
                                  A trading day is defined as a day when at
                                  least one trade is placed.
                                </Tooltip>
                              }
                            >
                              <span className="pTableiconWrap">
                                <svg
                                  className="pTableicon pTableiconAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <g>
                                    <path
                                      d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z"
                                    ></path>
                                    <path d="M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z"></path>
                                    <path
                                      d="M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z"
                                    ></path>
                                  </g>
                                </svg>

                                <svg
                                  className="pTableicon pTableiconNotAtive"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    d="M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z"
                                  ></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-12 col-md-2 pTableSingleListWrap">
                      <div className="pTableSingleList">
                        <h3>Aggressive</h3>
                        <p>Evaluation</p>
                        <ul>
                          <li>85%</li>
                          <li>1:200</li>
                          <li>Ninety Days </li>
                          <li>Fifteen Percent </li>
                          <li>Ten Percent</li>
                          <li>Twenty Days</li>
                        </ul>
                        <div className="mb-4">
                          <p>
                            <small>From</small> <span>$60</span> Prices are
                            quoted in <b>CAD</b>
                          </p>
                        </div>
                        <a href="#" className="btn btn-outline-dark">
                          Learn More
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-md-2 pTableSingleListWrap">
                      <div className="pTableSingleList">
                        <h3>Rapid</h3>
                        <p>Evaluation</p>
                        <ul>
                          <li>80%</li>
                          <li>1:10</li>
                          <li>Sixty Days</li>
                          <li>Ten Percent</li>
                          <li>Five Percent </li>
                          <li>Twenty Days</li>
                        </ul>
                        <div className="mb-4">
                          <p>
                            <small>From</small> <span>$265</span> Prices are
                            quoted in <b>CAD</b>
                          </p>
                        </div>
                        <a href="#" className="btn btn-outline-dark">
                          Learn More
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-md-2 pTableSingleListWrap">
                      <div className="pTableSingleList">
                        <h3>Standard</h3>
                        <p>Evaluation</p>
                        <ul>
                          <li>80%</li>
                          <li>1:10</li>
                          <li>Ninety Days </li>
                          <li>Ten Percent</li>
                          <li>Ten Percent</li>
                          <li>Forty Four</li>
                        </ul>
                        <div className="mb-4">
                          <p>
                            <small>From</small> <span>$265</span> Prices are
                            quoted in <b>CAD</b>
                          </p>
                        </div>
                        <a href="#" className="btn btn-outline-dark">
                          Learn More
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-md-2 pTableSingleListWrap pTableRoundRight">
                      <div className="pTableSingleList">
                        <h3>Extensive</h3>
                        <p>Evaluation</p>
                        <ul>
                          <li>80%</li>
                          <li>1:3</li>
                          <li>One Twenty Days</li>
                          <li>Ten Percent</li>
                          <li>Ten Percent</li>
                          <li>11 Days In Each Month</li>
                        </ul>
                        <div className="mb-4">
                          <p>
                            <small>From</small> <span>$265</span> Prices are
                            quoted in <b>CAD</b>
                          </p>
                        </div>
                        <a href="#" className="btn btn-outline-dark">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}
