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

function MonthlyWithDrawals () {
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
            <p>How To Withdraw?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            All withdrawals are processed through the client portal.
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
            <p>Requirement?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            Withdrawals in blocks of five percent are deducted upon request from
            the trading account.
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
            <p>Payout Day?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            Withdrawal requests must be made before the 20th of each month.
            Withdrawals are paid out by our backers between the 25th - 30th of
            every month. Withdrawal methods currently available by our backers
            are Crypto (BTC, ETH, USDC, USDT), for bank transfer you can use the
            backers partner exchange tccrypto.io.
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
            <p>Terms</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            THESE TERMS AND CONDITIONS ARE MADE IN ENGLISH LANGUAGE. ANY OTHER
            LANGUAGE TRANSLATION IS PROVIDED AS A CONVENIENCE ONLY. IN THE CASE
            OF ANY INCONSISTENCY OR DISCREPANCY BETWEEN ORIGINAL ENGLISH TEXTS
            AND THEIR TRANSLATION INTO ANY OTHER LANGUAGE, AS THE CASE MAY BE,
            ORIGINAL VERSIONS OF ENGLISH SHALL PREVAIL.
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
            eventKey='4'
          >
            <p>Policy</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            <ol>
              <li>
                IF THE BACKER SUSPECTS THAT A CLIENT HAS ABUSED OR ATTEMPTED TO
                ABUSE ANY RISK MANAGEMENT RULES OR GUIDELINES, OR OTHERWISE
                ACTED WITH A LACK OF GOOD FAITH TOWARDS US, THEN THE COMPANY
                RESERVES THE RIGHT, AT ITS SOLE DISCRETION, TO DENY, WITHHOLD OR
                WITHDRAW FROM THAT CLIENT. IF NECESSARY TO CANCEL ANY TERMS AND
                CONDITIONS WITH RESPECT TO THAT CLIENT, EITHER TEMPORARILY OR
                PERMANENTLY, OR TERMINATE THAT CLIENT'S ACCESS TO THE SERVICE
                AND/OR BLOCK THAT CLIENT'S ACCOUNT.
              </li>
              <li>
                PARTICIPATION IN THE TRADERS CENTRAL FUNDING OPTIONS IS NOT
                ALLOWED FOR PERSONS UNDER THE AGE OF 18 OR OTHERWISE UNDER THE
                LEGAL AGE IN THEIR COUNTRY OF RESIDENCE ("MINORS"). IF FOUND A
                CLIENT IS A ("MINOR"), THE WITHDRAWAL REQUEST WILL BE REFUSED
                AND ACCOUNT WILL BE CANCELED.
              </li>
              <li>
                AN ACTIVE SUBSCRIPTION IS REQUIRED TO PAYOUT PENDING WITHDRAWALS
              </li>
            </ol>
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
            eventKey='4'
          >
            <p>Crypto</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            A withdrawal through crypto attracts a 1% fee. <br />
            Cryptos can be highly volatile, all withdrawals sent through will be
            equivalent to the exchange rate at the time of sending. At the time
            you receive your crypto withdrawal into your given wallet, the
            equivalent may have increased or decreased; that is beyond our
            control of our bakcers.
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
            eventKey='4'
          >
            <p>Bank Transfer</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            Note that if your bank account is denominated in a different
            currency from USD, your bank would also perform a currency exchange
            using its own exchange rates. Upon request your bank officials can
            provide you with further details on the exchange in question -
            including information on their exchange rates, and any possible
            additional fees applied by them. Some bank transfers are processed
            via one or more partner banks, which may result in additional
            banking fees. Such fees are standard and are beyond our control as
            in this case we act as the payer and not a payment service provider.
            We kindly advise you to contact your bank as ask for further
            information on the fees they apply. Bank transfers can be used
            through the backers partner exchange tccrypto.io.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ////////////////////// */}
    </Accordion>
  )
}

export default MonthlyWithDrawals
