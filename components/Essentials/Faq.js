import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

function Faq () {
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
            Traders will manage a live account with leverage of{' '}
            <b>
              1:6 for the $12,500 and $25,000 account size and 1:3 for the
              $50,000 account size.
            </b>
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
            <p>Trading hours</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            Trades can be opened anytime of the day and can be held overnight
            and over the weekend.{' '}
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
            Only the following can be traded in pairs; USD, GBP, EUR, AUD, NZD,
            CHF, CAD, JPY, Gold and Silver. Crypto and Indices are available as
            an{' '}
            <a
              target='trading'
              href='https://medium.com/traders-central-eco/introducing-crypto-and-indices-trading-on-the-monthly-plan-d044a4b84e57'
            >
              unlock-able add-on
            </a>
            .
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
            <b>What is the consequence of copy/group trading?</b>
            <br />
            <ol>
              <li>
                First Offence: 50% fine on initial withdrawal, the trader is
                allowed to renew the account from a pending withdrawal
              </li>
              <li>Second Offence: Withdrawal held and account is closed</li>
            </ol>
            <b>Can I appeal a flag?</b>
            <br />
            If you believe Bagley flagged you incorrectly, you can reach out to
            the risk desk and dispute the flag. The risk desk will then provide
            evidence of the flag in the transaction report in 24 business hours.
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
            <p>Subscription Cycle</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            The subscription cycle lasts for thirty days, you'll be sent a
            reminder to renew two days before expiry. You can renew your
            subscription n your portal.
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
            <p>Withdrawals and Drawdown Limit</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='5'>
          <Card.Body>
            Withdrawals are based on <b>five percent</b> blocks. Maximum
            drawdown of <b>ten percent.</b>
            <br />
            <br />
            <b>
              *5% blocks means withdrawals can only be withdrawn in multiples of
              5. Eg if you make 12% in a given month, you can only withdraw 10%
              (5x2).
            </b>
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
            <p>Hedging, Expert Advisors, Trade Copiers</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='6'>
          <Card.Body>
            Hedging, ea's and trade copiers are not allowed.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default Faq
