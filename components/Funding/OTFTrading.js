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
            <p>Trading hours</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            Trades can be placed at anytime of the day. Overnight and over the
            weekend positions are allowed.
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
            <p>Trading Period</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            <ul>
              <li>
                Stage one lasts for <b>thirty days</b>, stage two{' '}
                <b>sixty days.</b>{' '}
              </li>
              <li>
                You can complete the total evaluation in a minimum of{' '}
                <b>20 days</b> so far as all other requirements are met
              </li>
              <li>
                Stage one has a minimum days requirement of <b>10</b>
              </li>
              <li>
                Stage two has a minimum days requirement of <b>10</b>
              </li>
            </ul>
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
            All Forex pairs, Crypto currencies, Stocks, Indices, Gold and Silver
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
            <p>Prohibited Strategies</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
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
      {/* <Card>
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
            <p>Promotion Conditions</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            In an unlikely case, your evaluation may be extended by the risk
            team in order to get promotion to the second stage. If you do pass
            the evaluation, but your trading strategy doesn't align with what we
            are looking for you will be refunded with an extra 10% compensation
            for your time and labour input.
            <br />
            <br />
            <b>Strategies that don't align?</b>
            <ol>
              <li>Using micro lot sizes to complete a challenge</li>
              <li>Inconsistent tradng pattern during evealuation</li>
            </ol>
            <br />
            <br />
            Please read the advice on passing the challenge in this section.
          </Card.Body>
        </Accordion.Collapse>
      </Card> */}
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
            <p>Can I request a refund?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='4'>
          <Card.Body>
            The one time fee is reimbursed to you with the first profit split
            when you become a Traders Central fund manager.
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
            <p>Profit target and Drawdown Limit</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='5'>
          <Card.Body>
            Profit target of <b>eight percent</b> to complete the evaluation for{' '}
            <b>stage one</b> and <b>four percent</b> for <b>stage two</b>.
            Maximum drawdown of ten percent (This means, the equity of the
            trading account must not, at any moment during both stages duration,
            reach a loss of -10%.)
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////////////////// */}
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
            <p>
              What if I achieve the profit target before the minimum required
              trading days?
            </p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='6'>
          <Card.Body>
            You can reduce your lot size for up to 75% of the average lot size
            used on all of your challenge trades until now. You can’t use 0.01
            lot sizes or any amount lower than one fourth the average lot size
            used till now on your challenge.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      {/* //////////////////////////// */}
      {/* //////////////////////////// */}
      {/* <Card>
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
            <p>Advice on passing the challenge</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='6'>
          <Card.Body>
            <iframe
              class='eapps-faq-content-category-item-answer-video'
              width='100%'
              src='https://www.youtube.com/embed/QlTt7OemlTM'
              frameborder='0'
              allowfullscreen=''
            ></iframe>
          </Card.Body>
        </Accordion.Collapse>
      </Card> */}

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
            eventKey='8'
          >
            <p>Account Leverage Type and Platform</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='8'>
          <Card.Body>
            Raw spreads account with leverage of <b>1:200</b> on
            industry-standard MT5. MT4 can be provided upon request
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
            eventKey='9'
          >
            <p>Expert Advisors and Trade Copiers</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='9'>
          <Card.Body>
            EA's and Trade Copiers are allowed. Ea's must not be martingale.
            Ea's are allowed to use virtual/hidden stop losses.
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
            eventKey='10'
          >
            <p>Can I choose b/n a daily loss limit and positive days rule?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='10'>
          <Card.Body>
            Yes, you can pick between the daily loss limit or positive days
            rule. The positive days rule does not apply to your account once
            funded but the daily loss limit applies.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
      {/* <Card>
        <Card.Header>
          <Accordion.Toggle
            as={props => (
              <div onClick={toggle}>
                <Button {...props} />
              </div>
            )}
            variant='link'
            eventKey='11'
          >
            <p>Type Of Traders We Are Looking For</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='11'>
          <Card.Body>
            <iframe
              class='eapps-faq-content-category-item-answer-video'
              width='100%'
              src='https://www.youtube.com/embed/QlTt7OemlTM'
              frameborder='0'
              allowfullscreen=''
            ></iframe>
          </Card.Body>
        </Accordion.Collapse>
      </Card> */}
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
            eventKey='12'
          >
            <p>Commissions explained</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='12'>
          <Card.Body>
            <ol>
              <li>Major and Minor Forex pairs - $7 per lot</li>
              <li>Metals - $7 per lot</li>
              <li>Crypto - 0.5%</li>
              <li>Indices - 0.0004%</li>
              <li>Stocks - 0.2%</li>
            </ol>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default OTFTrading
