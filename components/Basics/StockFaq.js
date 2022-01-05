import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import $ from 'jquery'

function StockFaq () {
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
            <p>What Is Stock Market?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            A marketplace where the stock of public companies is bought, sold
            and issued. Institutionalized formal exchanges (physical or
            electronic) or over-the-counter (OTC) markets functioning under
            specific rules carry out such financial activities.
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
            <p>How Does the Stock Market Work?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            Stock markets provide a safe and regulated environment for investors
            to trade shares and other eligible financial instruments with
            minimal risk. Regulators classify the stock markets into two
            segments, namely primary and secondary stock markets. The primary
            stock market allows companies to sell their shares to the general
            public through an Initial Public Offering (IPO). Doing so helps
            companies to obtain needed capital. In simple terms, a company
            allocates its worth in shares, for instance, 10 million shares.
            Then, after selling a portion of those shares (say, 2 million) to
            the public at a price (i.e. $5 per share), the company generates $10
            Million. After an IPO, a company's stock continues to be traded on
            the secondary market.
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
            <p>Who are the Stock Market Participants?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            Investors, Stockbrokers, Portfolio Managers, Market makers,
            Investment Bankers, Custodian, Speculators and Arbitrageurs are the
            key stock market participants.
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
            <p>How To Get Started With The Stock Market?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            Investing in stocks entails purchasing shares of a public company.
            By investing in the company's stock, you're betting on its long-term
            growth and success. In that case, other investors may willingly buy
            the shares for more than you paid for them, and that's how you make
            profits. To start investing in the stock market, you need to open an
            online investment account. Many brokerage accounts allow you to get
            started with buying just one share.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ///////////////////////////// */}

      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default StockFaq
