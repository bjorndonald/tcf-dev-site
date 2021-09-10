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

function MonthlyCapital () {
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
            <p>Stage One</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            All traders start with a $50K trading book, regardless of their
            background, experience or track record. Profit withdrawals of 5%
            blocks are independent from the growth targets of 10%.
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
            <p>Stage Two</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            If you can make a 10% return on your $50K trading book – growing
            your account to $55k, we will double your initial funding to $100k,
            or $105k net. The 10% amount of $5k must be maintained in the
            account and may not be withdrawn. This is independent of any 5%
            profit withdrawals. Traders have to separately maintain the 10% for
            the growth target.
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
            <p>Stage Three</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            If you can make another 10% return on your $100K trading book –
            growing your account to $115k net, then we will double your account
            value once again, up to $200k, or $215k net. Again, the $15k amount
            must be kept in the account.
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
            <p>Stage Four</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            For the final stage, you must make 10% once again on your $200K
            trading book, giving you a net of $235k. If you can succeed here we
            will allocate $1 Million to you and you will become one of our fund
            managers. At this stage you will no longer have to pay a
            subscription.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ////////////////////// */}
    </Accordion>
  )
}

export default MonthlyCapital
