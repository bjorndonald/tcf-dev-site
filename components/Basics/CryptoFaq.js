import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import $ from 'jquery'

function CryptoFaq () {
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
            <p>What Is Cryptocurrency?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            Cryptocurrency is a network of computers that authenticates
            transactions using cryptography. Unlike fiat currencies, the world's
            central banks have no role in establishing and maintaining
            cryptocurrency's validity. Instead, all crypto transactions are
            recorded on public ledgers. As a result, blockchain-verified
            transactions are immutable and leave no chance for hackers to create
            fake transaction records.
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
            <p>What Is Blockchain?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            Blockchain is a way of recording data that makes it difficult or
            impossible to change, hack, or cheat. A blockchain is a publicly
            distributed digital ledger of transactions. Each block in the chain
            contains many transactions added to each participant's ledger. A
            distributed ledger is a decentralized database shared by many
            participants.
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
            <p>How Do Cryptocurrency Transactions Work?</p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            For a crypto transaction, you need a crypto wallet. Cryptocurrency
            wallet comes with private and public keys. In addition, it provides
            an address where you send or receive cryptocurrencies on the
            blockchain. When you buy cryptocurrency or use it to complete a
            purchase, you authorize the transfer of a certain amount from your
            wallet to the seller's wallet. The crypto transaction is sent to the
            blockchain encrypted with your private key.
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
            <p>
              What's the difference Between Proof of Work and Proof of Stake?
            </p>
            <span>+</span>
            <span style={{ display: 'none' }}>-</span>
          </Accordion.Toggle>
        </Card.Header>

        <Accordion.Collapse eventKey='3'>
          <Card.Body>
            Proof of work (PoW) is a widely used consensus algorithm in
            cryptocurrencies. Popular cryptocurrencies like Bitcoin (BTC) and
            Litecoin (LTC) also use it. In PoW, participating nodes need to
            prove that their work qualifies them to add new transactions to the
            blockchain. Proof of stake (PoS) is a low-cost, low-energy
            alternative to the proof of work (PoW) algorithm. It involves
            assigning responsibility for maintaining the public ledger to a
            participant node based on its virtual currency token holdings.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* ///////////////////////////// */}

      {/* //////////////////////////// */}
    </Accordion>
  )
}

export default CryptoFaq
