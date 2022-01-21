import React, { useState } from 'react'
import BasicsSectionFaq from './BasicsSectionFaq'
import Link from 'next/link';



const _essentials = [
  {

    title: 'Forex',
    image: '/images/basics/basics-forex.png',
    link: '/essentials/forex',
    linkTitle: 'See Forex Essentials',
    faqs: [
      {
        id: 'WhatisForex',
        title: 'What is Forex?',
        body: (
          <>
            <p>
              The exchange of currencies against one another in a virtual market
              is called foreign exchange. The forex market is one of the world's
              most liquid markets. As an average estimate, the forex market
              undergoes a daily trading volume of over 6.6 trillion U.S. Dollars.
              The foreign exchange market is an over-the-counter (OTC) market
              where brokers quote prices and participants (buyers and sellers)
              directly negotiate transactions.
            </p>
          </>
        )
      },
      {
        id: 'WherecanyoutradeForex',
        title: 'Where can you trade Forex?',
        body: (
          <>
            <p>
              Forex is traded on three markets: spot, forward, and futures. The
              spot market is the largest because it is the underlying asset for
              forwards and futures.
            </p>
          </>
        )
      },
      {
        id: 'Whatarebinaryoptions',
        title: 'What are binary options?',
        body: (
          <>
            <p>
              A binary option is an exotic option with a payoff of either a fixed
              monetary amount or nothing. Cash-or-nothing is the most common type
              of binary options trading.
            </p>
          </>
        )
      },
      {
        id: 'IsForextradinglegal',
        title: "Is Forex trading legal?",
        body: (
          <>
            <p>
              Yes, forex trading is completely legal in most countries worldwide.
              However, some countries like India, Belgium, Malaysia, and
              NorthKorea have strict forex restrictions. People are only allowed
              to trade a limited number of pairs in such countries.
            </p>
          </>
        )
      },
      {
        id: 'IsForextradingagamble',
        title: "Is Forex trading a gamble?",
        body: (
          <>
            <p>
              No, forex trading is not gambling. Instead of just spinning a slot
              machine, you need to perform technical and fundamental analysis to
              determine the price direction of an underlying asset. You need to
              learn forex trading skills to develop different trading strategies
              to make profitable trading decisions.
            </p>
          </>
        )
      },
    ]

  },
  {

    title: 'Stocks',
    image: '/images/basics/basics-stocks.png',
    link: '/essentials/stocks',
    linkTitle: 'See Stocks Essentials',
    faqs: [
      {
        id: 'WhatIsStockMarket',
        title: 'What Is Stock Market?',
        body: (
          <>
            <p>
              A marketplace where the stock of public companies is bought, sold
              and issued. Institutionalized formal exchanges (physical or
              electronic) or over-the-counter (OTC) markets functioning under
              specific rules carry out such financial activities.
            </p>
          </>
        )
      },
      {
        id: 'HowDoestheStockMarketWork',
        title: 'How Does the Stock Market Work?',
        body: (
          <>
            <p>
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
            </p>
          </>
        )
      },
      {
        id: 'WhoaretheStockMarketParticipants',
        title: 'Who are the Stock Market Participants?',
        body: (
          <>
            <p>
              Investors, Stockbrokers, Portfolio Managers, Market makers,
              Investment Bankers, Custodian, Speculators and Arbitrageurs are the
              key stock market participants.
            </p>
          </>
        )
      },
      {
        id: 'HowToGetStartedWithTheStockMarket',
        title: "How To Get Started With The Stock Market?",
        body: (
          <>
            <p>
              Investing in stocks entails purchasing shares of a public company.
              By investing in the company's stock, you're betting on its long-term
              growth and success. In that case, other investors may willingly buy
              the shares for more than you paid for them, and that's how you make
              profits. To start investing in the stock market, you need to open an
              online investment account. Many brokerage accounts allow you to get
              started with buying just one share.
            </p>
          </>
        )
      }
    ]
  },
  {

    title: 'Crypto',
    image: '/images/basics/basics-crypto.png',
    link: '/essentials/crypto',
    linkTitle: 'See Crypto Essentials',
    faqs: [
      {
        id: 'WhatIsCryptocurrency',
        title: 'What Is Cryptocurrency?',
        body: (
          <>
            <p>
              Cryptocurrency is a network of computers that authenticates
              transactions using cryptography. Unlike fiat currencies, the world's
              central banks have no role in establishing and maintaining
              cryptocurrency's validity. Instead, all crypto transactions are
              recorded on public ledgers. As a result, blockchain-verified
              transactions are immutable and leave no chance for hackers to create
              fake transaction records.
            </p>
          </>
        )
      },
      {
        id: 'WhatIsBlockchain',
        title: 'What Is Blockchain?',
        body: (
          <>
            <p>
              Blockchain is a way of recording data that makes it difficult or
              impossible to change, hack, or cheat. A blockchain is a publicly
              distributed digital ledger of transactions. Each block in the chain
              contains many transactions added to each participant's ledger. A
              distributed ledger is a decentralized database shared by many
              participants.
            </p>
          </>
        )
      },
      {
        id: 'HowDoCryptocurrencyTransactionsWork',
        title: 'How Do Cryptocurrency Transactions Work?',
        body: (
          <>
            <p>
              For a crypto transaction, you need a crypto wallet. Cryptocurrency
              wallet comes with private and public keys. In addition, it provides
              an address where you send or receive cryptocurrencies on the
              blockchain. When you buy cryptocurrency or use it to complete a
              purchase, you authorize the transfer of a certain amount from your
              wallet to the seller's wallet. The crypto transaction is sent to the
              blockchain encrypted with your private key.
            </p>
          </>
        )
      },
      {
        id: 'WhatsthedifferenceBetweenProofofWorkandProofofStake',
        title: "What's the difference Between Proof of Work and Proof of Stake?",
        body: (
          <>
            <p>
              Proof of work (PoW) is a widely used consensus algorithm in
              cryptocurrencies. Popular cryptocurrencies like Bitcoin (BTC) and
              Litecoin (LTC) also use it. In PoW, participating nodes need to
              prove that their work qualifies them to add new transactions to the
              blockchain. Proof of stake (PoS) is a low-cost, low-energy
              alternative to the proof of work (PoW) algorithm. It involves
              assigning responsibility for maintaining the public ledger to a
              participant node based on its virtual currency token holdings.
            </p>
          </>
        )
      }
    ]
  }
]

function BasicsSectionTwo() {

  return (
    <div className='basicsTopSectionTwo py-5 d-flex align-items-center'>
      <div className='container'>
        {_essentials.map((pos, i) => (
          <div className='py-5 basics-row' key={i}>

            <div className='row'>
              <div className='col-12 text-center mb-4'>
                <Link href={pos.link}>
                  <a>
                    <img
                      className='rounded-circle mx-auto'
                      alt="..."
                      src={pos.image}
                    />
                  </a>
                </Link>
              </div>
              <div className='col-12 text-center'>
                <h3>{pos.title}</h3>
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <BasicsSectionFaq faqs={pos.faqs} />
              </div>
              <div className='col-12 text-center mb-5'>
                <div className='button'>
                  <Link href={pos.link}>
                    <a
                      rel='noopener noreferrer'
                      className='btn btn-black'
                    >
                      {pos.linkTitle}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default BasicsSectionTwo
