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

function OTFWithDrawals () {
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
            <p>How To Withdraw</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            Withdrawals are processed by the funding provider through the client portal.
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
            <p>Requirement</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            Evaluation accounts are run on demo and are not eligible for
            withdrawals. Live accounts need to be in profit net of commissions
            and swap to request a withdrawal.
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
            <p>Payout Day</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            Withdrawals can now be requested on the 14th and 28th of each month
            for the one-time fee plan. Withdrawal methods currently available by
            our backers are Crypto (BTC, ETH, USDC, USDT). For bank transfer you
            can use the backers partner exchange tccrypto.io.
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
            These terms and conditions are made in English language. Any other
            Language translation is provided as a convenience only. In the case
            Of any inconsistency or discrepancy between original English texts
            And their translation into any other language, as the case may be,
            Original versions of English shall prevail.
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
                If the backer suspects that a client has abused or attempted to
                Abuse any risk management rules or guidelines, or otherwise
                Acted with a lack of good faith towards us, then the company
                Reserves the right, at its sole discretion, to deny, withhold or
                Withdraw from that client. If necessary to cancel any terms and
                Conditions with respect to that client, either temporarily or
                Permanently, or terminate that client's access to the service
                And/or block that client's account.
              </li>
              <li>
                Participation in the traders central funding options is not
                Allowed for persons under the age of 18 or otherwise under the
                Legal age in their country of residence ("Minors"). If found a
                Client is a ("Minor"), the withdrawal request will be refused
                And account will be canceled.
              </li>
            </ol>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ////////////////////// */}
      {/* <Card>
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
      </Card> */}
      {/* ////////////////////// */}
      {/* <Card>
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
      </Card> */}
      {/* ////////////////////// */}
    </Accordion>
  )
}

export default OTFWithDrawals
