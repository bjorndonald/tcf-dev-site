import Link from 'next/link'
export const essentialCrypto = [
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
          fake transaction records.{' '}
        </p>
        <p>
          While thousands of cryptocurrencies exist, hundreds more have failed.
          A new token hits the market almost every other day. According to
          Statista.com, there have been over 6,000 cryptocurrencies created as
          of now.{' '}
        </p>
        <p>
          Not to mention, creating a new cryptocurrency isn't much difficult.
          For example, the Ethereum blockchain allows users to use pre-written
          codes to launch new cryptocurrencies instead of starting from scratch.
        </p>
        <p>
          While people can use cryptocurrencies to pay for goods and services,
          most prefer to invest primarily to profit from potential value
          appreciation. Digital currencies being highly volatile, hold great
          potential to maximize your wealth reasonably quickly. However,
          investing in cryptocurrencies can be risky, and you should always DYOR
          before investing in anything and take total responsibility for your
          decision.
        </p>
        <p>
          <b>Disclaimer: </b> Nothing in this guide is financial advice and is
          only for educational purposes. You are always responsible for the
          decisions you make.
        </p>
      </>
    )
  },
  {
    id: 'HistoryofCryptocurrencies',
    title: 'History of Cryptocurrencies',
    body: (
      <>
        <p>
          It all began back in 1983 when the American cryptographer David Chaum
          put forward the concept of virtual currencies. After creating eCash in
          1983, he developed DigiCash, a cryptographic system to protect
          financial transactions.
        </p>
        <p>
          A Chinese computer scientist Wei Dai used the term cryptocurrency for
          the first time in 1998. He considered developing a new payment method
          based on cryptography and decentralization. However, the practical
          implication of a blockchain-based cryptocurrency remained unresolved
          until Satatoshi Nakatomo created Bitcoin.
        </p>
        <p>
          Bitcoin was the first cryptocurrency created ever. You might have
          heard of Bitcoin more than any other crypto asset. Bitcoin was the
          first blockchain created by an anonymous person Satoshi Nakamoto in
          2009. Satoshi described Bitcoin as P2P blockchain-based electronic
          payment system.
        </p>
        <p>
          Cryptocurrencies like Bitcoin are created through a process called
          mining. However, unlike mining ore, cryptocurrency mining involves
          powerful computers solving complex problems.
        </p>
        <p>
          Until 2011, Bitcoin was the only crypto. However, since there were
          potential improvements to be made in Bitcoin, enthusiasts decided to
          create alternative coins (altcoins) to improve its design for
          security, speed and anonymity. Litecoin was one of the first altcoins,
          aiming to be Bitcoin's silver. However, there are currently over 6,000
          cryptocurrencies available, with more expected future.
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
        <p>
          A block contains a reference to the block before it. The blocks form a
          chain linked by prior blocks. To change a block in the public ledger,
          a hacker must copy the entire blockchain that follows it, or the
          cryptocurrency network will reject the change.
        </p>
        <p>
          Many attempts to create digital money have failed in the past. Trust
          has always been the limiting factor. Crypto experts argued that
          someone making a new cryptocurrency called the X coin might give
          themselves a million X Coins or steal your X Coins.
        </p>
        <p>
          However, the blockchain database solved this problem. Traditional
          databases, like SQL, are prone to changes. A manager can give reward
          himself with a million X Coins. Blockchain is unique in that its users
          control it.
        </p>
        <p>
          Blocks contain extra information that helps the cryptocurrency network
          verify its validity. Cryptocurrency miners use intensive computing
          power to solve complex puzzles and add blockchain blocks using the
          proof-of-work method.
        </p>
        <p>
          Not to mention, no new block gets added to the blockchain until a
          miner solves the block's puzzle. Each transaction lengthens the
          blockchain and requires more computing power to add a new block.
          Crypto miners receive more cryptocurrencies as a reward.
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
          wallet comes with private and public keys. In addition, it provides an
          address where you send or receive cryptocurrencies on the blockchain.
          Not to mention, sending cryptocurrency to another user's digital
          wallet also requires verification and mining to get completed.
        </p>
        <p>
          When you buy cryptocurrency or use it to complete a purchase, you
          authorize the transfer of a certain amount from your wallet to the
          seller's wallet. The crypto transaction is sent to the blockchain
          encrypted with your private key.
        </p>
        <p>
          Crypto miners use your public key to verify the transaction was
          encrypted. Soon after the confirmation of the block containing your
          transaction, the ledger gets updated, reflecting the new
          cryptocurrency balance of each party.
        </p>
      </>
    )
  },
  {
    id: 'TheRoleofConsensusInCrypto',
    title: 'The Role of Consensus In Crypto',
    body: (
      <>
        <p>
          A consensus mechanism is an insensitive mechanism used in computer and
          blockchain systems to achieve distributed process or multi-agent
          agreement on a single data value or network state. In addition, it
          helps to maintain records.
        </p>
        <p>
          For instance, Proof-of-Work (PoW) is the consensus mechanism on
          Bitcoin blockchain that requires computational power to solve a
          complex but arbitrary puzzle. Similarly, Proof-of-Stake (PoS) is
          another consensus mechanism used in blockchains and cryptocurrencies.
        </p>
        <p>
          Both PoS and PoW use consensus to verify transactions. That means a
          transaction needs the approval of multiple ledger holders before
          getting added to the blockchain.
        </p>
        <p>
          In simple terms, the consensus mechanism is a set of rules that
          decides on the legitimacy of contributions made by various
          participants (i.e., nodes or transactors) of the blockchain performing
          this vital task.
        </p>
      </>
    )
  },
  {
    id: 'ConsensusMechanismExplained',
    title: 'Consensus Mechanism Explained',
    body: (
      <>
        <p>
          For example, a centralized database of driving licences in a country
          is maintained and updated by a central administrator. It is the sole
          responsibility of the central authority to maintain open records and
          add, delete, or update names of people who qualified for specific
          licences.
        </p>
        <p>
          Similarly, self-regulating or decentralized public blockchains operate
          globally without a central authority. Therefore, when a transaction
          occurs on the blockchain, it involves hundreds of thousands of
          participants to verify it.
        </p>
        <p>
          Hence, these public ledgers need a reliable and efficient mechanism to
          ensure the legitimacy of the network transactions and that all
          participants agree on the ledger's status.
        </p>
      </>
    )
  },
  {
    id: 'DifferenceBetweenProofofWorkandProofofStake',
    title: 'Difference Between Proof of Work and Proof of Stake',
    body: (
      <>
        <p>
          There are various consensus algorithms, each with its own set of
          principles. However, Proof-of-Work (PoW) and Proof-of-Stake (PoS) are
          the most common in the crypto space. Let's see what's the difference
          or typical amongst them below.
        </p>
      </>
    )
  },
  {
    id: 'ProofofWorkPoW',
    title: 'Proof-of-Work (PoW)',
    body: (
      <>
        <p>
          Proof of work (PoW) is a widely used consensus algorithm in
          cryptocurrencies. Popular cryptocurrencies like Bitcoin (BTC) and
          Litecoin (LTC) also use it. In PoW, participating nodes need to prove
          that their work qualifies them to add new transactions to the
          blockchain. Not to mention, the PoW consensus mechanism requires a lot
          of energy and time.
        </p>
      </>
    )
  },
  {
    id: 'ProofofStakePoS',
    title: 'Proof-of-Stake (PoS)',
    body: (
      <>
        <p>
          Proof of stake (PoS) is a low-cost, low-energy alternative to the
          proof of work (PoW) algorithm. It involves assigning responsibility
          for maintaining the public ledger to a participant node based on its
          virtual currency token holdings. However, this encourages crypto coin
          hoarding rather than spending.
        </p>
      </>
    )
  },
  {
    id: 'WhyAreCryptocurrenciesSoPopular',
    title: 'Why Are Cryptocurrencies So Popular?',
    body: (
      <>
        <p>
          Cryptocurrencies appeal to crypto enthusiasts for many reasons. Some
          of them are listed below.
        </p>
        <p>
          <b>Lucrative Investment:</b> Cryptocurrency's value as an asset class
          has soared in the last five years. After Bitcoin (BTC) witnessed
          massive growth, cryptocurrencies went from a niche topic to a
          mainstream media hit. As a result, many investors see them as a
          lucrative asset class with high returns.
        </p>
        <p>
          <b>Usability:</b> Cryptocurrency and blockchain technology updates
          constantly hit the market, making investors keep speculating over
          them. The crypto industry continuously evolves, from decentralized
          finance apps to non-fungible tokens (NFTs). Since more merchants and
          service providers have started accepting cryptocurrency, individuals
          and entities see them as a hassle-free option to pay for goods and
          services.
        </p>
        <p>
          <b>Currency of the future:</b> Some crypto enthusiasts see bitcoin and
          other altcoins as the future currency and rush to buy them before they
          become more valuable.
        </p>
      </>
    )
  },
  {
    id: 'CryptocurrencyMining',
    title: 'Cryptocurrency Mining',
    body: (
      <>
        <p>
          Mining cryptocurrency involves using your computer's power to verify
          blockchain transactions. Demonstrating a block earns you a reward and
          fees from the parties involved.
        </p>
        <p>
          To start mining cryptocurrency, you needed a dedicated computer.
          Initially, people mined cryptocurrency using Central Processing Units
          (CPUs). However, the process was too slow and needed a lot more
          energy. Often, it involved paying more for electricity than you earn
          from mining.
        </p>
        <p>
          Hence the idea to mine cryptocurrency using traditional CPUs was made
          redundant. Instead, advanced mining computational devices have been
          developed to keep up with the mining difficulty.
        </p>
        <p>
          Now, two viable options to mine most cryptocurrencies these days
          include Graphics Processing Units (GPUs) or Application-specific
          Integrated Circuits (ASICs). A GPU is found in gaming or high-end PCs
          to mine multiple cryptocurrencies. On the other hand, ASIC is a chip
          made solely for mining a particular cryptocurrency.
        </p>
        <p>
          Notably, ASICs are far more efficient when compared with GPUs.
          However, they are less flexible than GPUs and relatively expensive to
          use.
        </p>
        <p>
          After having hardware purchased, you need to install a cryptocurrency
          wallet and mining software to get started. Because mining computers
          generate a lot of heat, keeping them in a cool, well-ventilated area
          of your home is preferable. Not to mention, you also need to keep them
          online throughout the day. Importantly, do not forget to monitor the
          cryptocurrencies you mine. A sharp drop in prices could bankrupt the
          whole mining process.
        </p>
      </>
    )
  },
  {
    id: 'UseCases',
    title: 'Use Cases',
    body: (
      <>
        <p>
          Besides opening up access to multiple financial services worldwide,
          you can also use cryptocurrencies for different applications.
          Moreover, asset-backed tokens allow ownership of assets like gold and
          real estate. Also, stable coins gain popularity since fiat currencies
          keep declining in value over time. Let's discuss some more uses cases
          below.
        </p>
        <h4>Asset tokenization</h4>
        <p>
          Cryptocurrencies have enabled the tokenization of real-world assets.
          We can convert anything like copyrights, real estate, art, and
          commodities into cryptocurrency tokens. For instance, we can tokenize
          a $10 million luxury property and represent it as one million $10
          crypto tokens. Doing so increases the liquidity of a less-liquid asset
          and facilitates the exchange of even non-liquid assets. Also, selling
          and buying these assets becomes cheaper, faster, and transparent.
        </p>
        <h4>Value preservation</h4>
        <p>
          Cryptocurrencies are safer to store value than cash. Traditional
          currencies depreciate over time, primarily due to the endless
          expansion of the money supply. That's why a loaf of bread today costs
          much more than it did a decade ago. Essentially, bread is still cheap,
          but money loses value.
        </p>
        <h4>Loan provisions</h4>
        <p>
          Cryptocurrencies make the lending and borrowing process pretty easier.
          If you've ever waited in line for a loan, you know how painful it is.
          So, how about getting a loan without filling out any forms or signing
          any contracts? Well, cryptocurrencies bring the way out. Besides
          instant lending or borrowing, borderless cryptocurrency platforms
          facilitate you anywhere in the world.
        </p>
        <h4>Storage rentals</h4>
        <p>
          In addition to high fees, centralized cloud storage platforms have
          many significant flaws. Hence, decentralized storage using blockchain
          becomes the optimal solution. Therefore, anyone can rent out their
          spare storage space.
        </p>
        <p>
          For instance, if you had 500 GB free on your hard drive, you could
          rent it out and earn passive income. Not to mention, entities who buy
          your storage space pay in the platform's native cryptocurrency.
        </p>
      </>
    )
  },
  {
    id: 'Howtogetstartedwithcryptocurrencies',
    title: 'How to get started with cryptocurrencies?',
    body: (
      <>
        <p>
          Assuming that now you understand how cryptocurrencies work and their
          associated benefits, you might wish to know how to get started.
          Undoubtedly, cryptos always appear to be an exciting investment
          opportunity. But when you're just getting started, the buying process
          can be confusing. So let's enlist some tips to make things a little
          easier for you.{' '}
        </p>
        <br />
        <br />
        <ul className='mt-3'>
          <b>
            <li>Learn about different Crypto Platforms</li>
          </b>
        </ul>
        <p>
          You can buy cryptocurrency on different platforms, including crypto
          exchanges, brokers and hybrid intermediaries. You must choose the best
          one after learning more about them.
        </p>
        <p>
          While a crypto exchange buys, sells, and trades cryptocurrencies
          exclusively, they also offer a wide range of crypto assets for
          selection.
        </p>
        <p>
          On the other hand, brokers allow you to speculate over crypto prices
          without entirely buying them through Contracts For Differences (CFDs).
          A CFD position involves fractional capital investment compared to
          buying a cryptocurrency from an exchange.
        </p>
        <p>
          If you're looking for an exchange that charges no fees for bank wire
          and cryptocurrency deposits, check out{' '}
          <a href='https://tccrypto.io/fees'>TC Crypto</a>.
        </p>
        <br />
        <br />
        <ul className='mt-3'>
          <b>
            <li>Create an Account</li>
          </b>
        </ul>
        <p>
          After researching well enough where to buy crypto, choose one of the
          platforms and open an account. Again, the registration process is
          likely to be the same.
        </p>
        <p>
          Almost all platforms ask for the same information to comply with KYC
          (Know Your Customer) regulations, such as a copy of your National
          Identity Card/Passport/ Driving license and utility bill needed for
          address verification.
        </p>

        <br />
        <br />
        <ul className='mt-3'>
          <b>
            <li>Buy the Crypto Assets of your choice.</li>
          </b>
        </ul>
        <p>
          Finally, making a purchase is the last step. Select your favourite
          cryptocurrency and make a payment. Your selected platform will likely
          have multiple payment options available, including debit cards, credit
          cards, wire transfers, e-wallets (PayPal, Neteller, Skrill), web
          money, and other local payment methods. Do not forget to check the
          associated fees with each available option first. You can then select
          the one that suits you more. As mentioned before, only you are
          responsible for any decisions you make, and none of the information
          presented here is meant to be financial advice but simply an
          educational guide.
        </p>
        <br />
        <br />
        <ul className='mt-3'>
          <b>
            <li>Maintain a Journal and monitor your asset portfolio</li>
          </b>
        </ul>
        <p>
          It's critical to maintain a journal to keep track of your actions when
          participating in the market; This will also be a foundation for
          accountability. Furthermore, you can have a crypto portfolio tracker
          with detailed information on the name of assets, quantity owned, entry
          point and current price. This way, you can view the value of your
          entire crypto portfolio in one glance.
        </p>
      </>
    )
  },
  {
    id: 'Legalityofcryptocurrencies',
    title: 'Legality of cryptocurrencies ',
    body: (
      <>
        <p>
          Besides exploring the massive potential to make insane returns from
          cryptocurrencies, there is an emerging need for clarity regarding the
          legal ramifications of this blockchain technology and its implications
          for both new and traditional businesses. While governments, central
          banks, regulatory agencies, and other financial institutions take time
          to understand digital currencies' nature and meaning, individual
          investors can profit handsomely from this new market. Buying and
          selling cryptocurrencies, however, entails legal risks.
        </p>
        <p>
          Investment in increasingly popular cryptocurrencies has legal
          implications and risks that potential investors should know.
        </p>
        <p>
          While some countries consider cryptocurrencies a medium of exchange,
          the US considers them property. Thus, crypto investors in the US must
          pay capital gains tax on their crypto assets. Since Bitcoin and other
          altcoins are decentralized, they lack a central authority's backing
          and carry increased risk exposure. In addition, defrauded investors
          will not have the same legal recourse as traditional fraud victims due
          to the decentralized nature of cryptocurrency.
        </p>
        <p>
          Although cryptocurrencies are legal in most countries, including the
          United States, United Kingdom, Australia, businesses accepting crypto
          may still need to register or obtain a license to operate in certain
          jurisdictions.
        </p>
      </>
    )
  },
  {
    id: 'ColdStorage',
    title: 'Cold Storage',
    body: (
      <>
        <p>
          Even if you choose a reputable exchange to store your cryptocurrency,
          you never know what will happen. Cryptocurrency hacks have a history
          of surprising investors. Because online wallets are more prone to
          hacking attempts, it's best to keep your cryptocurrencies off the
          exchange. When you use cold storage, you're essentially taking your
          cryptocurrency completely off from Internet; hence it is the safest
          storage method of all. Understanding the theft risk and taking
          preventive measures is crucial, so do your homework.
        </p>
      </>
    )
  },
  {
    id: 'BottomLine',
    title: 'Bottom Line',
    body: (
      <>
        <p>
          Starting with cryptocurrency is exciting. However, newbies can suffer
          significant losses, leading some to conclude their crypto journey once
          and forever.{' '}
        </p>

        <p>
          This guide covered the essential details about cryptocurrencies and
          some tips on getting started. We also highlighted some potential risks
          of investing in the crypto space and general information to help you
          stay safe.{' '}
        </p>

        <p>
          Now that you have understood how digital currencies work and their
          potential to maximize your wealth pretty well, it's time to get going!
          Create a portfolio and lay the groundwork for your cryptocurrency
          journey. Do not forget to check our{' '}
          <a href='https://www.traderscentral.com/trading-basics'>website</a>{' '}
          for more resources.{' '}
        </p>
      </>
    )
  }
]

export const essentialStocks = [
  {
    id: 'WhatIsStockMarket',
    title: 'What Is Stock Market?',
    body: (
      <>
        <p>
          A marketplace where the stock of public companies is bought, sold and
          issued. Institutionalized formal exchanges (physical or electronic) or
          over-the-counter (OTC) markets functioning under specific rules carry
          out such financial activities.
        </p>
        <p>
          Contrary to popular belief, the stock exchange is a subset of the
          stock market. A stock trader buys or sells shares on different stock
          exchanges that make up the overall stock market. A country's stock
          market may consist of one or more stock exchanges. For instance,
          Nasdaq and the New York Stock Exchange (NYSE) are the two major stock
          exchanges in the United States. Besides these two, several other stock
          exchanges collectively make the US stock market.
        </p>
      </>
    )
  },
  {
    id: 'UnderstandingtheStockMarket',
    title: 'Understanding the Stock Market',
    body: (
      <>
        <p>
          The stock market is a regulated environment that enables buyers and
          sellers to meet and transact. Operating under the supervision of
          authorities like SEC, FINRA, FCA, the stock markets allow traders to
          discover the prices of corporate shares and serve as an economic
          barometer. Moreover, a fair price and high liquidity are often
          guaranteed due to many market participants.
        </p>
        <p>
          The stock market ensures fair pricing and transaction transparency by
          bringing together millions of market participants. Unlike earlier
          paper-based stock markets, today's computerized stock markets operate
          electronically.
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
          to trade shares and other eligible financial instruments with minimal
          risk. Regulators classify the stock markets into two segments, namely
          primary and secondary stock markets.
        </p>
        <p>
          The primary stock market allows companies to sell their shares to the
          general public through an Initial Public Offering (IPO). Doing so
          helps companies to obtain needed capital. In simple terms, a company
          allocates its worth in shares, for instance, 10 million shares. Then,
          after selling a portion of those shares (say, 2 million) to the public
          at a price (i.e. $5 per share), the company generates $10 Million.
        </p>
        <p>
          After an IPO, a company's stock continues to be traded on the
          secondary market. However, the company doesn't get involved in
          subsequent transactions anymore. Instead, the stock exchange
          facilitates trades between investors and sellers.
        </p>
        <p>
          Investors receiving company shares can hold them for as long as they
          wish, anticipating a rise in their price. Meanwhile, they earn
          dividend income. In addition, companies and their partners pay a
          facilitation fee to the stock market.
        </p>
      </>
    )
  },
  {
    id: 'StockMarketParticipants',
    title: 'Stock Market Participants',
    body: (
      <>
        <p>
          Besides investors, the stock market has several other participants,
          each with distinct roles and functions. Let's discuss a few of them
          below.
        </p>
        <p>
          <b>Stockbrokers</b>: Stockbrokers are licenced professionals who buy
          and sell securities on behalf of investors. Brokers act as financial
          intermediaries between investors and stock exchanges, buying and
          selling stocks on their behalf. Not to mention, companies need to open
          an account with a retail broker to access the stock markets.
        </p>
        <p>
          <b>Portfolio Managers</b>: Stock traders are not necessarily skilled
          enough to make profitable decisions. Therefore, they might wish to
          seek the services of expert professionals. Hence, they may hire
          portfolio managers. In addition, companies, such as hedge funds,
          pension plans, and mutual funds may also have portfolio managers to
          decide and set investment strategies.
        </p>
        <p>
          <b>Market makers</b>: Market makers facilitate trading by posting bids
          and asking prices, in addition to holding stock. They also ensure
          market liquidity for a particular (set of) shares and profit from the
          spread between the bid and ask prices. Market maker brokers are
          accused of price manipulation since they do not pass clients' orders
          directly to the market unless they intervene.
        </p>
        <p>
          <b>Investment Bankers</b>: Companies looking to go public via an IPO
          or those anticipating mergers and acquisitions have representatives
          called investment banks. They handle the listing process of companies
          following the stock market's regulations.
        </p>
        <p>
          <b>Custodian</b>: Custodians keep clients' investments and securities
          safe, preventing the risk of theft or loss. These institutions work in
          line with the exchange to transfer shares between trading parties'
          accounts.
        </p>
        <p>
          <b>Speculators</b>: Speculators make market-directional bets on
          individual stocks or broad indexes. Some speculators hold more
          prolonged positions while others trade like day traders based on
          fundamental or technical analysis.
        </p>
        <p>
          <b>Arbitrageurs</b>: Arbitrageurs identify exploitation in the market
          for low-risk gains. Algorithms and HFT programmes typically help to
          perform this type of arbitrage.
        </p>
        <p>
          <b>Stock Exchanges:</b> Stock exchanges are profit-generating
          institutions that charge fees for their services. The prime source of
          income for these stock exchanges is the transaction fees charged for
          each trade. Exchanges also profit from the listing fees charged to
          companies during IPOs and subsequent offerings. Not to mention, a
          stock exchange also earns by selling its generated market analytics,
          such as real-time data, historical summary, and reference data. Many
          exchanges also sell technology products, including trading terminals
          and dedicated network connections, to the interested parties for a
          fee.
        </p>
      </>
    )
  },
  {
    id: 'ExampleofStockExchanges',
    title: 'Example of Stock Exchanges',
    body: (
      <>
        <p>
          The London Stock Exchange was the world's first stock exchange founded
          In 1773. It was a small coffee shop where traders used to trade
          shares.{' '}
        </p>

        <p>
          Similarly, New York Stock Exchange was the first exchange opened in
          the United States. It was a joint venture initiated by 24 traders who
          initially named it the Buttonwood Agreement. However, it rebranded to
          NYSE in 1817. The NYSE is the world's largest stock exchange, with a
          market cap of $23.12 trillion as of March 2018.
        </p>

        <p>
          NASDAQ is also a US-based stock exchange founded in 1971. Many small
          and growing firms prefer to be listed on the NASDAQ stock exchange.{' '}
        </p>
      </>
    )
  },
  {
    id: 'FunctionsofaStockMarket',
    title: 'Functions of a Stock Market',
    body: (
      <>
        <p>Given below are some prime functions of the stock market.</p>
        <h4>Regulate entities</h4>
        <p>
          Market regulators strictly regulate company affairs like the SEC. It
          also requires listed companies to timely file quarterly, bi-annually
          or annual financial reports and disclose relevant developments to keep
          all market participants informed. Infractions can result in trading
          suspensions and other disciplinary actions.
        </p>
        <h4>Investor Protection</h4>
        <p>
          Besides serving institutional clients and key investors, the stock
          market also facilitates small investors. These investors may be
          unaware of the risks associated with stock trading and other listed
          instruments. Therefore, a stock exchange incorporates safety measures
          to protect investors from financial loss and ensure credibility. For
          example, a stock exchange may classify stocks by risk profile and
          restrict uninformed investors from trading in high-risk stocks.
        </p>
        <h4>Ensure transactions validity</h4>
        <p>
          Since many participants are beneficial to a market's efficiency, Stock
          Exchange also ensures their verification and compliance with all rules
          and regulations. It should also ensure that all associated entities
          operate within the regulator's legal framework.
        </p>

        <h4>Ensure liquidity</h4>
        <p>
          Although the stock market can't regulate the minimum or a maximum
          number of traders, it needs to ensure that traders can timely access
          the market to execute orders at fair prices.
        </p>
        <h4>Maintain market efficiency</h4>
        <p>
          Investing in stocks requires efficient price discovery. Therefore, a
          stock market needs to devise mechanisms that consider market supply
          and demand, among other factors.
        </p>
        <p>
          For example, A US-based company stock worth $100 per share and its
          market capitalization stands around $6 Billion. If the European Union
          (EU) regulator imposes a $2.5 billion fine on the company, it means
          the company's value wiped out by 41% almost.
        </p>
        <p>
          While the stock market may have set a trading price range between $100
          to $120 for its stock, the company should quickly adjust the range to
          account for possible price changes to prevent shareholders from
          struggling to trade its shares at a fair price.
        </p>
        <h4>Fair transactions</h4>
        <p>
          The stock exchange must ensure that all participants have instant
          access to data for all buying and selling orders, in addition to fair
          and transparent pricing of securities.
        </p>
        <h4>Ensure seamless participation</h4>
        <p>
          Participants, including market makers, traders, investors,
          speculators, and hedgers, have different roles and functions in the
          stock market. For instance, some investors may buy stock and hold it
          for years, while others may frequently enter and exit positions.
          Similarly, market makers provide required liquidity while a hedger
          uses derivatives to reduce investment risk. The stock market ensures
          all participants seamlessly perform their roles.
        </p>
      </>
    )
  },
  {
    id: 'StockMarketRegulations',
    title: 'Stock Market Regulations',
    body: (
      <>
        <p>
          A country's stock market is regulated by a competent monetary
          authority or regulatory institute. For instance, SEC regulates the
          stock markets in the United States. The SEC is a federal agency that
          is free of political influence. Its mission is to protect investors'
          interests while ensuring fair and efficient markets besides promoting
          capital formation.
        </p>
        <p>
          Similarly, the Financial Conduct Authority (FCA) regulates Stock
          Exchange Markets in the UK. Besides approving prospectuses for the UK
          Stock Market, the FCA is also in charge of promoting fair competition,
          ensuring market efficiency, and overseeing all financial conduct.
        </p>
      </>
    )
  },
  {
    id: 'HowToGetStartedWithTheStockMarket',
    title: 'How To Get Started With The Stock Market?',
    body: (
      <>
        <p>
          Investing in stocks entails purchasing shares of a public company. By
          investing in the company's stock, you're betting on its long-term
          growth and success. In that case, other investors may willingly buy
          the shares for more than you paid for them, and that's how you make
          profits.
        </p>
        <p>
          To start investing in the stock market, you need to open an online
          investment account. Many brokerage accounts allow you to get started
          with buying just one share. However, there are several other factors
          that you need to consider before you step in. Let's discuss them
          below.
        </p>
        <ol>
          <br />
          <b>
            <li>Research about the companies you want to invest in</li>
          </b>
          <p>
            It's critical to research a company before buying its stock. Learn
            and verify your knowledge about your prospective firm. It might be a
            good idea for beginners to invest in companies you believe in or
            end-users of their products. However, a company can't necessarily be
            the best fit based on your preference. You must carefully examine
            its business model, revenue sources, turnover ratio, growth
            potential, and past performance.
          </p>
          <b>
            <li>Understand Investment Basics</li>
          </b>
          <p>
            Learn the basics of investing before jumping into the stock market.
            It is critical to have clearly defined goals and a workable strategy
            to achieve your financial objectives. Ensure effective money
            management and portfolio diversification. Keep your risk exposure
            limited by starting with small investments. Do not invest more than
            5% of your investment in a single stock.
          </p>
          <b>
            <li>Select a broker carefully</li>
          </b>
          <p>
            Checking a broker's regulation status is one of the most critical
            while signing up with a broker. First, verify the broker's
            registration with your country's regulatory body. A broker's
            regulation ensures your funds' safety. Brokers offering funds
            indemnity insurance are even better.
          </p>
          <p>
            For example, some brokers offer indemnity insurance to their clients
            in the UK through the Financial Services Compensation Scheme (FSCS).
            That means even if a broker goes bankrupt, your money is safe.
          </p>
          <p>
            Do not forget to check the fees for buying and selling shares with
            your prospective broker. It should be competitive with industry
            standards.
          </p>
          <p>
            Finally, look for other available services, such as if your
            prospective brokers provide free charts and indicators? You should
            also check the supported order types (stop, limit, trailing stops,
            etc.).
          </p>
          <b>
            <li>Decide On Your Investment Budget</li>
          </b>
          <p>
            Buying a certain number of shares or filling your portfolio with
            just one stock isn't always the best idea. It is wise to decide on
            an investment budget and then spread your risk by investing in
            different stocks. Your investment amount must be something that you
            are comfortable losing to get involved in the market without
            emotions influencing your decisions.
          </p>
          <p>
            You can also start with buying just one share to see how it feels to
            own individual stocks and if you have the stamina to ride out the
            storm. Then, once you're comfortable with how things work, you can
            buy more stock and diversify your portfolio.
          </p>
          <b>
            <li>Maintain a Journal to record your Stock Portfolio</li>
          </b>
          <p>
            It's essential to maintain a journal to record your actions in the
            market, like what stocks you buy and sell, the quantity & entry/exit
            points. This way, you are very clear of what's happening to your
            investment and also the journal adds accountability to your
            behaviour. You can also have a stock portfolio with all your current
            stock investments, so the entire portfolio's value and individual
            stock contributions can all be seen in one glance.
          </p>
          <b>
            <li>Evaluate the purpose of your investment</li>
          </b>
          <p>
            Analyze the investment reasons and prioritize them to determine the
            timeline and risk tolerance level before staking your interest in
            the stock market. For example, if you want to save for retirement,
            you may invest long-term. Therefore, you should be able to hold a
            stake in a company for years. Aside from dividends, the value of
            your holdings can increase over time, increasing your wealth.
          </p>
          <p>
            On the other hand, buying shares with cash for daily needs may
            provoke you to sell your stake quickly, even when the market is
            down. Consequently, you'll end up losing money instead of making
            profits.
          </p>
          <p>
            Remember not to invest money you can't lose. Also, never buy stocks
            with borrowed funds unless you fully understand how leverage works.
          </p>
        </ol>
      </>
    )
  },
  {
    id: 'Conclusiongweghwfj',
    title: 'Conclusion',
    body: (
      <>
        <p>
          Investing in the stock market nowadays has become much easier than
          before. The best part is that you can do it on your terms, even if you
          don't know much. You can either trade stock actively or hire a
          professional to trade on your behalf and earn a passive income that
          all depends upon your preferences. So choose an investing style that
          suits you and start building your wealth today. Do not forget to check
          out Traders Central if you wish to learn more about stocks or get
          funded with significant capital to trade stock instruments.
        </p>
      </>
    )
  }
]

export const essentialForex = [
  {
    id: 'WhatisForex',
    title: 'What is Forex?',
    body: (
      <>
        <p>
          Forex is an abbreviation used for Foreign Exchange. The exchange of
          currencies against one another in a virtual market is called foreign
          exchange. The forex market is one of the world's most liquid markets.
          As an average estimate, the forex market undergoes a daily trading
          volume of over 6.6 trillion U.S. Dollars. The foreign exchange market
          is an over-the-counter (OTC) market where brokers quote prices and
          participants (buyers and sellers) directly negotiate transactions. The
          foreign exchange market is not like the old NYSE (NYSE). More
          precisely, it is a global network of forex markets connected by
          computer systems (and even by phone).
        </p>
      </>
    )
  },
  {
    id: 'ABriefHistory',
    title: 'A Brief History',
    body: (
      <>
        <p>
          Currency trading has been a common practice for ages. For example, on
          behalf of textile merchants, the Medici family of Florence was the
          first to create foreign banks in the 15th century. Between the 17th
          and 18th centuries, the Forex market in Amsterdam started facilitating
          agents from England and Holland to settle their foreign exchange
          transactions. However, contemporary forex trading came into existence
          at the beginning of the 19th century.
        </p>
        <p>
          Around the 1850s, firms like Alexander Brown & Sons became prominent
          currency merchants in the U.S., followed by additional participants
          entering the market over the next three decades. Established in 1870,
          the Gold Standard Monetary System was the most significant event in
          the history of currency trading. However, since international trades
          were less regularized even before the first world war, countries
          shifted their interest towards the emerging forex market, abandoning
          the gold standard in the post-war era.
        </p>
        <p>
          Consequently, forex holdings increased by more than 10% compared to
          the gold reserves that grew 6% in the first decade of the 20th
          century. In the next couple of years, half of the world's started the
          foreign exchange in sterling. While Paris, New York, and Berlin were
          the most active trading hubs, London had only two foreign exchange
          brokers by 1913.
        </p>
        <p>
          By 1928, forex trading became an integral part of London's financial
          system. The famous Bretton Woods Accord allowed currency fluctuations
          within 1% of their par value in 1944.
        </p>
        <p>
          After President Nixon scrapped the Bretton Woods Accord and fixed
          exchange rates, a free-floating setup for currencies came into
          existence. However, the Forex markets remained closed between 1972 and
          1973 since the European Joint Float and Bretton Woods Accord were
          ineffective during this tenure. Eventually, 1973 became the end of
          state control of Forex, giving way to a fully floating and free
          market.
        </p>
        <p>
          Reuters introduced computer monitoring in the same year instead of
          placing trade quotes via telephone and telex. Then, in the mid-1980s,
          Reuters developed a real-time network for traders based on the
          electronic system - the present form of modern forex trading.
        </p>
      </>
    )
  },
  {
    id: 'AnOverviewofForexMarket',
    title: 'An Overview of Forex Market',
    body: (
      <>
        <p>
          The forex market is the world's largest financial market, transacting
          more than 25x trading volume compared to other equities worldwide. It
          is a virtual market where participants (governments, commercial banks,
          investment banks, hedge funds, retail brokers, and investors) buy and
          sell foreign currencies (e.g., foreign exchange rates, currencies,
          etc.). Currency trading occurs round the clock, five days a week. As a
          result, it is the world's only genuinely nonstop trading market. It's
          also been called the Wall Street/Main Street intersection.
        </p>
        <p>
          The foreign exchange market comprises global currencies, although the
          concentrated volume revolves around significant currencies, including
          USD, JPY, EUR, GBP, AUD, CHF, CAD. In addition, a small portion of the
          forex market also includes futures and options trading.
        </p>
        <p>
          Since currencies are always traded in pairs, there are three types of
          currency pairs known as majors, minors and exotic currency pairs. All
          trading pairs that include USD are the majors, while non-USD pairs are
          the minors. Not to mention, when a pair contains USD and a currency of
          an emerging economy, it is termed as an exotic currency pair, such as
          USD/NOK, USD/SEK, USD/DKK, etc.
        </p>
        <p>
          Between the F.X. and other financial markets, the critical difference
          is the operational activity of corporations facilitating daily
          business transactions and hedging longer-term risks. The primary
          purpose of institutional organizations entering the forex market is to
          undergo large business transactions, risk management and fulfil
          long-term investment needs.
        </p>
      </>
    )
  },
  {
    id: 'ForexTradingABeginnerGuide',
    title: "Forex Trading: A Beginner's Guide",
    body: (
      <>
        <p>
          Forex trading is a highly volatile market and carries increased risk
          exposure. The forex market doesn't have a central regulatory authority
          overseeing it. However, countries have set up regional regulatory
          institutions like ASIC, CYSEC, FCA, and NFSA to maintain the financial
          system's integrity and stability. These regulatory bodies formulate
          rules and regulations for financial intermediaries to protect citizens
          from broker's malpractices. Not to mention, forex trading is still
          unregulated in various jurisdictions worldwide.
        </p>
        <p>
          The world's largest banks are the primary market makers in the
          currency market. The interbank market is a subsegment of the forex
          market where banks trade on behalf of themselves or their customers.
          Banks have developed internal processes to assess and accept sovereign
          and credit risk for protection. In addition, the industry-imposed
          regulations aim to protect the interest of all participants.
        </p>
        <p>
          The market pricing is based on the supply and demand mechanism because
          each participating bank quotes ask and bid prices for a specific
          currency. The system's massive trade flows make it difficult for
          participants to manipulate currency prices.
        </p>
        <p>
          With access to interbank dealing, the system helps to ensure
          transparency for investors. However, brokers/dealers sometimes
          re-quote prices and even trade against their customers. Therefore,
          regulated brokers prefer non-regulated brokers while signing up with a
          financial intermediary.
        </p>
        <p>
          Moreover, traders should also seek other protections available in case
          the company becomes bankrupt. For instance, brokers registered with
          funds compensations schemes such as IFSC offer indemnity insurance to
          their clients in the event of insolvency.
        </p>
      </>
    )
  },
  {
    id: 'HowtoGetStartedwithForexTrading',
    title: 'How to Get Started with Forex Trading?',
    body: (
      <ol>
        <br />
        <b>
          <li>Open a trading account.</li>
        </b>
        <p>
          Once you've decided to step into forex trading, the first thing you
          need is to open a trading account with a broker. It is recommended to
          start trading with a demo account first until you are familiar with
          trading on the platform and confident in your ability to trade. Once
          you see good results on the demo, you can deposit money into a live
          account and start trading it.
        </p>
        <b>
          <li>Develop a trading strategy</li>
        </b>
        <p>
          A good trading strategy is critically essential for a meaningful
          trading experience. Though not always possible, a trading strategy
          helps you time the market moves reasonably well and enables you to set
          a roadmap for trading. Remember, switching between different trading
          strategies can make you confused. Therefore, try to stick with one
          good trading strategy with an edge. It is important to focus on the
          win rate and risk-reward ratios of your trade setups to identify a
          strategy with a strong edge.
        </p>
        <b>
          <li>Journal and reflect on your results</li>
        </b>
        <p>
          If you plan to master the art of trading forex, it is important to
          journal your trades and constantly reflect upon your results. This
          will pave the way for you to improve your mindset and tweak the
          strategy to increase profitability. In addition, the markets are
          constantly changing all the time. So it is important to reflect and
          adapt depending on the changes.
        </p>
      </ol>
    )
  },
  {
    id: 'ForexTradingStyles',
    title: 'Forex Trading Styles',
    body: (
      <>
        <p>
          A long and short trade are the two basic forex trade types. An
          investor betting on future appreciation is known as a long trade. As
          the name implies, a short trade bet that the currency pair's price
          will fall. With technical analysis, confirmations, like breakout or
          moving average, can also help traders refine their trading approach.
          But it depends on the strategy of the trader. So let's dive further
          into the three most common trading styles below.
        </p>
        <h3>Scalping</h3>
        <p>
          Scalping is a trading style where the trader enters minimal time
          frames and is usually in and out of the position within minutes.
        </p>
        <h3>Day Trading</h3>
        <p>
          Day trading refers to types of trading in which positions are held and
          liquidated on the same day. A day trade lasts for minutes or a maximum
          of a few hours.
        </p>
        <h3>Swing Trading</h3>
        <p>
          Swing traders hold positions for several days or weeks as opposed to
          day trading. Traders are also likely to find good swing trade
          opportunities due to fundamental changes such as major governmental or
          economic policy changes.
        </p>
        <p>
          The type of trading style you choose should also align with your
          personality. For example, you may not want to hold positions overnight
          for multiple days. In that case, you'd best suit for day trading or
          scalping. Again, it's best to try these different styles and determine
          what works best for you.
        </p>
      </>
    )
  },
  {
    id: 'RoleofRiskManagementinForexTrading',
    title: 'Role of Risk Management in Forex Trading ',
    body: (
      <>
        <p>
          As mentioned above, forex trading carries excessive risk, and hence it
          is important to follow proper risk management practices.
        </p>
        <p>
          More than profit targets, defining your risk exposure per trade is the
          most important thing. Because risk is the only thing directly in your
          control, you can't make money if you lose capital by busting the
          account.
        </p>
        <p>
          You can risk 0.5% or 1% per trade as an example. It can be lesser or
          even more depending on your risk appetite. Make sure you are
          comfortable with the risk amount and won't panic upon facing a losing
          streak.
        </p>
        <h3>Forex Hedging</h3>
        <p>
          In the forex market, hedging involves seeking protection against
          possible losses. Forex hedging is a form of short-term protection that
          uses options.
        </p>
        <p>Primarily, two types of hedging strategies are used in Forex.</p>
        <ol>
          <li>
            Opening an opposite position in the same currency pair, for example,
            long GBP/USD and short GBP/USD.
          </li>
          <li>
            Selling your position if the investor goes long on a currency.
          </li>

          <p>
            <b>Note:</b> Not all brokers allow traders to incorporate hedging
            techniques. Therefore, you must confirm the trading restrictions
            before signing up with a broker of your choice.
          </p>
        </ol>
      </>
    )
  },
  {
    id: 'ProsandConsofForexTrading',
    title: 'Pros and Cons of Forex Trading',
    body: (
      <>
        <p>
          Like all other markets, forex trading also has some pros and cons
          listed below.
        </p>
        <h3>Pros</h3>
        <p>
          <b>Liquidity: </b> The forex market is the world's most liquid market.
          Traders can quickly fill up their positions at desired prices
          throughout the day. However, the forex market is known to have more
          liquidity during overlapping sessions. e.g. Many traders prefer the
          overlap of Newyork and London sessions
        </p>
        <p>
          <b>Accessibility:</b> The forex market remains open five days a week,
          starting from the Asian session and ending in New York. The long time
          horizon and comprehensive coverage allow traders to profit or recover
          losses exploring multiple opportunities.
        </p>
        <p>
          <b>Leverage: </b>With forex trading's extensive use of leverage, you
          can start small and compound your account over time.
        </p>
        <p>
          <b>Decentralization:</b> The forex market is decentralized compared to
          the stock or bond market. Thus the chances of price manipulations
          because of insider trading are lower.
        </p>
        <p>
          <b>Availability of Tools:</b> You can easily open a broker account and
          install the trading platform of your choice (mt4, mt5, ctrader), and
          they don't cost anything to start as well.
        </p>
        <h3>Cons</h3>
        <p>
          <b>Irregular income: </b> Unlike the stock market, the absence of
          regular income, such as dividend payments, can make it less attractive
          to traders looking for a steady income stream.
        </p>
        <p>
          <b>Lack of Capital for small investors:</b> Though Forex is a great
          way to make money, realistically, you need a large capital to make a
          living out of it. Most people start with a small amount of capital.
          Hence it is not possible to trade full time immediately. So, you can
          grow and compound your capital into a large sum over multiple years.
          If you don't want to wait for numerous years, you can access services
          from <Link href='/products/funding'>Traders Central Fund</Link> and
          trade a large account right away. Then, you can either choose an
          instant live funding plan or perform a challenge to prove your skills
          and get the account.
        </p>
      </>
    )
  },
  {
    id: 'CommonForexTerminologies',
    title: 'Common Forex Terminologies',
    body: (
      <>
        <p>
          Getting yourself familiarized with different forex terminologies is
          essential for every trader. So let us enlist a few of them below.
        </p>
        <p>
          <b>Ask</b>: An ask is the lowest price that a buyer is willing to pay.
          Therefore, the "ask" price usually exceeds the "bid" price.
        </p>
        <p>
          <b>Bid</b>: A bid is a price that a seller is willing to accept to
          sell a currency. While generally lower than asking prices, bid prices
          can be higher in high-demand situations but rare in Forex.
        </p>
        <p>
          <b>CFD</b>: CFD stands for contract for differences. It is a
          derivative instrument that allows traders to speculate on currency
          price movements without owning the underlying asset.
        </p>
        <p>
          <b>Lot</b>: In Forex, currencies are traded in lots. Lot sizes include
          standard, mini, and micro. For example, while there are 100,000 units
          of a currency in a standard lot, a mini lot has 10,000 units, and
          micro-lots comprise 1,000 units.
        </p>
        <p>
          <b>Leverage:</b> Leverage is borrowing money to increase returns. The
          forex market is known for its high leverage, allowing traders to
          maximize their returns.
        </p>
        <p>
          <b>Spread:</b> The spread is a small fee built into every forex trade.
          An exchange rate spread is a difference between buying and selling
          prices.
        </p>
        <p>
          <b>Pips:</b> A pip stands for "percentage in point." It is used to
          measure the minimum price move in Forex.
        </p>
      </>
    )
  },
  {
    id: 'FrequentlyAskedQuestionsFAQsinForex',
    title: 'Frequently Asked Questions (FAQs) in Forex',
    body: (
      <>
        <h4 className='mt-2'>Where can you trade Forex?</h4>
        <p>
          Forex is traded on three markets: spot, forward, and futures. The spot
          market is the largest because it is the underlying asset for forwards
          and futures.
        </p>
        <h4>Is Forex regulated?</h4>
        <p>
          No, it is not. However, some countries like the U.S. and U.K. have a
          strict regulatory infrastructure for brokers dealing in Forex. Not to
          mention, forex trading is still unregulated in various jurisdictions
          worldwide.
        </p>
        <h4>What are binary options? </h4>
        <p>
          A binary option is an exotic option with a payoff of either a fixed
          monetary amount or nothing. Cash-or-nothing is the most common type of
          binary options trading.
        </p>
        <h4>Is Forex trading legal?</h4>
        <p>
          Yes, forex trading is completely legal in most countries worldwide.
          However, some countries like India, Belgium, Malaysia, and North Korea
          have strict forex restrictions. People are only allowed to trade a
          limited number of pairs in such countries.
        </p>
        <h4>Is Forex trading a gamble?</h4>
        <p>
          No, forex trading is not gambling. Instead of just spinning a slot
          machine, you need to perform technical and fundamental analysis to
          determine the price direction of an underlying asset. You need to
          learn forex trading skills to develop different trading strategies to
          make profitable trading decisions.
        </p>
      </>
    )
  }
]
