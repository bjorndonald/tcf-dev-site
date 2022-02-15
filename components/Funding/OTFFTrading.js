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

function OTFTrading () {
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
            <p>Leverage</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            Traders will manage a live account with leverage of <b>1:50</b>
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
            eventKey='0'
          >
            <p>Trading hours</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            Trades can be opened anytime of the day and can be held overnight
            and over the weekend.
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
            <p>Trading Products</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            All Forex pairs, Crypto currencies, Stocks, Indices and Metals
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
            eventKey='3'
          >
            <p>Group Trading</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            Trading as a group; placing and exiting trades together manually or
            with a copier in a similar pattern is not allowed. Bagley depends on
            diverse data patterns to monetize users' trading data.
            <br />
            <br />
            <b>What is the consequences of copy/group trading?</b>
            <ul>
              <li>
                First Offence: 50% fine on initial withdrawal, the trader is
                allowed to renew the account from a pending withdrawal
              </li>
              <br />
              <li>Second Offence: Withdrawal held and account is closed</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
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
            <p>Prohibited Strategies</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            Martingale trading is the only prohibited strategy. Martingale to us
            is defined as opening a position while first position opened is in
            drawdown, and following positions added in the same direction and
            same symbol are opened in multipliers of first position size. E.g.
            For a 1 lot sell position, a multiplier in this case starts from
            1.01, so 1 and below is not classified as martingale
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={props => (
              <div onClick={toggle}>
                <Button {...props} />
              </div>
            )}
            variant='link'
            eventKey='5'
          >
            <p>Drawdown limit and withdrawal target</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='5'>
          <Card.Body>
            Maximum drawdown of five percent (This means, the equity of the
            trading account must not, at any moment during both stages duration,
            reach a loss of -5%.). Withdrawal target of 0.5% net of commissions
            and swap
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={props => (
              <div onClick={toggle}>
                <Button {...props} />
              </div>
            )}
            variant='link'
            eventKey='6'
          >
            <p>Hedging, Expert Advisors and Ea's</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='6'>
          <Card.Body>Hedging, ea's and trade copiers are allowed.</Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
      <Card>
        <Card.Header>
          <Accordion.Toggle
              as={props => (
                  <div onClick={toggle}>
                    <Button {...props} />
                  </div>
              )}
              variant='link'
              eventKey='13'
          >
            <p>Unauthorized Trading Practises</p>
            <span>+</span>
            <span style={{display: 'none'}}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='13'>
          <Card.Body>
            <ol type={"a"}>
              <li>Trading strategies that exploit errors in the services, such as errors in displaying
                prices or data.
              </li>
              <li>Any software, artificial intelligence, high-frequency analysis, or mass data entering
                which might make our service unfair for you or give you an unfair advantage cannot be
                used.
              </li>
              <li>Performing trading strategies in a way that establishes justified concerns that the
                backer might suffer financial or other harm as a result.
              </li>
            </ol>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default OTFTrading
