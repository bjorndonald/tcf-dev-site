import React from 'react'
import Faq from './Faq'
import _ from 'lodash'
import { Accordion, Button, Card } from 'react-bootstrap'
import $ from 'jquery'
import { useRouter } from 'next/dist/client/router'
import { withRouter } from 'next/router'
import { essentials, stocks, forex } from './pagedata'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

const pages = ['crypto', 'stocks', 'forex']

function EssentialsSectionOne (props) {
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

  useEffect(() => {
    console.log(props.page)
    return () => {}
  }, [])

  return (
    <div className='essentialsSectionOne'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-7'>
            <h1>
              {props.page === 'crypto'
                ? 'Crypto'
                : props.page === 'stocks'
                ? 'Stocks'
                : props.page === 'forex'
                ? 'Forex'
                : null}{' '}
              Essentials
            </h1>
            <h4>The must-know basics to become successful in {props.page}</h4>
          </div>
          <div className='col-md-4'>
            {/* <img src='/images/essentials/header.PNG' alt='' /> */}
            <div
              className='image'
              style={{
                backgroundImage: `url(/images/essentials/header.PNG)`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                marginTop: '5rem'
              }}
            ></div>
          </div>
        </div>
        <div className='row'>
          <div className='definition'>
            <h4 className='purple'>Definition</h4>
            <p className='purple'>
              noun:{' '}
              {props.page === 'crypto'
                ? 'cryptocurrency'
                : props.page === 'stocks'
                ? 'stock'
                : props.page === 'forex'
                ? 'forex'
                : null}
              ;
            </p>
            <p className='purple'>
              {props.page === 'crypto'
                ? 'a digital currency or decentralized system of exchange that uses advanced cryptography for security.'
                : props.page === 'stocks'
                ? `the goods or merchandise kept on the premises of a shop or warehouse and available for sale or distribution.`
                : props.page === 'forex'
                ? 'forex is the market in which foreign currencies are traded.'
                : null}
            </p>
          </div>
          <br />
          {props.page === 'crypto' ? (
            <Accordion>
              {essentials.map((essential, index) => (
                <>
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
                        <h2>{essential.title}</h2>
                        <span>+</span>
                        <span style={{ display: 'none' }}>-</span>
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>{essential.body}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </>
              ))}
            </Accordion>
          ) : props.page === 'stocks' ? (
            <Accordion>
              {stocks.map((stock, index) => (
                <>
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
                        <h2>{stock.title}</h2>
                        <span>+</span>
                        <span style={{ display: 'none' }}>-</span>
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>{stock.body}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </>
              ))}
            </Accordion>
          ) : props.page === 'forex' ? (
            <Accordion>
              {forex.map((fx, index) => (
                <>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={props => (
                          <div id='inner-button' onClick={toggle}>
                            <Button {...props} />
                          </div>
                        )}
                        variant='link'
                        eventKey='0'
                      >
                        <h2>{fx.title}</h2>
                        <span>+</span>
                        <span style={{ display: 'none' }}>-</span>
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>{fx.body}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </>
              ))}
            </Accordion>
          ) : null}{' '}
        </div>
        <div className='tc-row mt-5 py-5 flex-column useful d-flex align-items-center justify-content-center'>
          <p
            style={{
              fontWeight: '600'
            }}
            className='purple mb-2'
          >
            Did you find this information useful?
          </p>
          <div className='icons d-flex align-items-center'>
            <a>
              <i className='fa fa-thumbs-down mr-2'></i>
            </a>
            <a>
              <i className='fa fa-thumbs-up'></i>
            </a>
          </div>
        </div>
        {props.page === 'crypto' ? (
          <div className='tc-row py-5 others d-flex align-items-center justify-content-center'>
            <div
              style={{
                marginRight: '12rem',
                flexDirection: 'column'
              }}
              className='flex-column d-flex align-items-center'
            >
              <div
                className='image'
                style={{
                  backgroundImage: `url(/images/basic/basicImg1.PNG)`,
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='button'>
                <a
                  href={'/essentials/forex'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Forex Essentials
                </a>
              </div>
            </div>
            <div
              style={{
                flexDirection: 'column'
              }}
              className='flex-column d-flex align-items-center'
            >
              <div
                className='image'
                style={{
                  backgroundImage: `url(/images/basic/basicImg2.PNG)`,
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='button'>
                <a
                  href={'/essentials/stocks'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Stock Essentials
                </a>
              </div>
            </div>
          </div>
        ) : props.page === 'stocks' ? (
          <div className='tc-row py-5 others d-flex align-items-center justify-content-center'>
            <div
              style={{
                marginRight: '12rem',
                flexDirection: 'column'
              }}
              className='flex-column d-flex align-items-center'
            >
              <div
                className='image'
                style={{
                  backgroundImage: `url(/images/basic/basicImg1.PNG)`,
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='button'>
                <a
                  href={'/essentials/forex'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Forex Essentials
                </a>
              </div>
            </div>
            <div
              style={{
                flexDirection: 'column'
              }}
              className='flex-column d-flex align-items-center'
            >
              <div
                className='image'
                style={{
                  backgroundImage: `url(/images/basic/basicImg3.PNG)`,
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='button'>
                <a
                  href={'/essentials/crypto'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Crypto Essentials
                </a>
              </div>
            </div>
          </div>
        ) : props.page === 'forex' ? (
          <div className='tc-row py-5 others d-flex align-items-center justify-content-center'>
            <div
              style={{
                marginRight: '12rem',
                flexDirection: 'column'
              }}
              className='flex-column d-flex align-items-center'
            >
              <div
                className='image'
                style={{
                  backgroundImage: `url(/images/basic/basicImg2.PNG)`,
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='button'>
                <a
                  href={'/essentials/stocks'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Stocks Essentials
                </a>
              </div>
            </div>
            <div
              style={{
                flexDirection: 'column'
              }}
              className='flex-column d-flex align-items-center'
            >
              <div
                className='image'
                style={{
                  backgroundImage: `url(/images/basic/basicImg3.PNG)`,
                  backgroundPosition: 'bottom',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className='button'>
                <a
                  href={'/essentials/crypto'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Crypto Essentials
                </a>
              </div>
            </div>
          </div>
        ) : null}{' '}
      </div>
    </div>
  )
}

export default EssentialsSectionOne
