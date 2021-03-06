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
                Stage one: <b>30 days</b>, with a minimum days requirement of{' '}
                <b>10</b>.{' '}
              </li>
              <li>
                Stage two: <b>60 days</b>, with a minimum days requirement of{' '}
                <b>10</b>.{' '}
              </li>
              <li>
                You can complete the total evaluation in a minimum of{' '}
                <b>20 days</b> so far as all other requirements are met.
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
            All Forex pairs, Crypto currencies, Stocks, Indices, Gold, and
            Silver.
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
            What is the consequence of copy/group trading? (OTF Challenge)
            <br />
            <br />
            <ul>
              <li>
                First Offense: Warning, trader allowed to proceed to stage two.
              </li>
              <br />
              <li>Second Offense: Account is closed.</li>
            </ul>
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
            1.01, so 1 and below is not classified as martingale.
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
            eventKey='5'
          >
            <p>Can I request a refund?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='5'>
          <Card.Body>
            The one-time fee is reimbursed to you with the first profit split
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
            eventKey='6'
          >
            <p>Profit target and Drawdown Limit</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='6'>
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
            eventKey='7'
          >
            <p>
              What if I achieve the profit target before the minimum required
              trading days?
            </p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='7'>
          <Card.Body>
            This only applies to the 100k and 200k account size only. You can
            reduce your lot size by up to 75% of the average lot size used on
            all of your challenge trades until now. You can???t use 0.01 lot sizes
            or any amount lower than one-fourth of the average lot size used
            till now on your challenge. You will also be expected to trade
            normally on the reduced lot size to not by pass the minim day rule.
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
            industry-standard MT5. MT4 can be provided upon request.
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
              <li>Forex pairs - $3.5 per lot</li>
              <li>Metals - $7 per lot</li>
              <li>Crypto - 0.5%</li>
              <li>Indices - 0.0004%</li>
              <li>Stocks - 0.1%</li>
            </ol>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* //////////////////////////// */}
      {/*<Card>*/}
      {/*    <Card.Header>*/}
      {/*        <Accordion.Toggle*/}
      {/*            as={props => (*/}
      {/*                <div onClick={toggle}>*/}
      {/*                    <Button {...props} />*/}
      {/*                </div>*/}
      {/*            )}*/}
      {/*            variant='link'*/}
      {/*            eventKey='13'*/}
      {/*        >*/}
      {/*            <p>Unauthorized Trading Practises</p>*/}
      {/*            <span>+</span>*/}
      {/*            <span style={{display: 'none'}}>-</span>*/}
      {/*        </Accordion.Toggle>*/}
      {/*    </Card.Header>*/}

      {/*    <Accordion.Collapse eventKey='13'>*/}
      {/*        <Card.Body>*/}
      {/*            <ol type={"a"}>*/}
      {/*                <li>Trading strategies that exploit errors in the services, such as errors in displaying*/}
      {/*                    prices or data.*/}
      {/*                </li>*/}
      {/*                <li>Any software, artificial intelligence, high-frequency analysis, or mass data entering*/}
      {/*                    which might make our service unfair for you or give you an unfair advantage cannot be*/}
      {/*                    used.*/}
      {/*                </li>*/}
      {/*                <li>Performing trading strategies in a way that establishes justified concerns that the*/}
      {/*                    backer might suffer financial or other harm as a result.*/}
      {/*                </li>*/}
      {/*                <li>Opening substantially larger position sizes compared to your other trades or opening*/}
      {/*                    substantially smaller or larger number of positions compared to your other trades on*/}
      {/*                    your account.*/}
      {/*                </li>*/}
      {/*            </ol>*/}
      {/*        </Card.Body>*/}
      {/*    </Accordion.Collapse>*/}
      {/*</Card>*/}
      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default OTFTrading
