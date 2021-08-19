import React from 'react'

export default function BoxSection () {
  return (
    <div className='sectionThree py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 sectionThreeHeader'>
            <div className='internal'>
              <h2>
                Investing for <br />
                everyone
              </h2>
              <p>
                An ecosystem built to facilitate <br />
                your financial needs
              </p>
            </div>
          </div>
          <div className='homeBoxOne col-12 col-md-6'>
            <a href='products/funding' className='card'>
              <div>
                <h1>Fund</h1>
                <p>
                  Funding retail
                  <br /> traders in 24 <br />
                  hours
                </p>
                <div className='hideText'>
                  Become a remote prop trader in 24 hours
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <span>See</span>
              </div>
            </a>
          </div>

          <div className=' homeBoxTwo col-12 col-md-6'>
            <a href='products/token' className='card'>
              <div>
                <h1>Tokens</h1>
                <p>
                  Send and redeem <br />
                  TCT{"'"}s for discounts
                </p>
                <div className='hideText'>A currency for our ecosystem</div>
              </div>
              <div className='d-flex justify-content-end'>
                <span>See</span>
              </div>
            </a>
          </div>

          <div className=' homeBoxThree col-12 col-md-6'>
            <a href='products/liquidity ' className='card'>
              <div>
                <h1>Capital</h1>
                <p>
                  Launch your prop <br />
                  fund from anywhere <br />
                  in the world
                </p>
                <div className='hideText'>
                  Access market making services in a few steps.
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <span>See</span>
              </div>
            </a>
          </div>

          <div className=' homeBoxFour col-12 col-md-6'>
            <a traget='_blank' href='https://tccrypto.io/' className='card'>
              <div>
                <h1>Crypto</h1>
                <p>
                  Buy and Sell <br />
                  Crypto
                </p>
                <div className='hideText'>
                  Towards sound money and decentralisation
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <span>See</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
