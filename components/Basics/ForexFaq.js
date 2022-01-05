import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import $ from 'jquery'

function ForexFaq () {
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
  return (
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
            <p>What is Forex?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            The exchange of currencies against one another in a virtual market
            is called foreign exchange. The forex market is one of the world's
            most liquid markets. As an average estimate, the forex market
            undergoes a daily trading volume of over 6.6 trillion U.S. Dollars.
            The foreign exchange market is an over-the-counter (OTC) market
            where brokers quote prices and participants (buyers and sellers)
            directly negotiate transactions.
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
            <p>Where can you trade Forex?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            Forex is traded on three markets: spot, forward, and futures. The
            spot market is the largest because it is the underlying asset for
            forwards and futures.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ////////////////////////////// */}
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
            <p>What are binary options?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            A binary option is an exotic option with a payoff of either a fixed
            monetary amount or nothing. Cash-or-nothing is the most common type
            of binary options trading.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ////////////////////////////// */}
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
            <p>Is Forex trading legal?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            Yes, forex trading is completely legal in most countries worldwide.
            However, some countries like India, Belgium, Malaysia, and
            NorthKorea have strict forex restrictions. People are only allowed
            to trade a limited number of pairs in such countries.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ///////////////////////////// */}
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={props => (
              <div onClick={toggle}>
                <Button {...props} />
              </div>
            )}
            variant='link'
            eventKey='4'
          >
            <p>Is Forex trading a gamble?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            No, forex trading is not gambling. Instead of just spinning a slot
            machine, you need to perform technical and fundamental analysis to
            determine the price direction of an underlying asset. You need to
            learn forex trading skills to develop different trading strategies
            to make profitable trading decisions.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}

      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default ForexFaq
