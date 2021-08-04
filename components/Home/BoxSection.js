import React from "react";

export default function BoxSection() {
  return (
    <div className="sectionThree py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 sectionThreeHeader">
            <h2>Investing for everyone</h2>
            <p>An ecosystem built to facilitate your financial needs</p>
          </div>
          <div className=" homeBoxOne col-12 col-md-6">
            <a href="products/funding" className="card">
              <div>
                <h3>Traders Central Fund</h3>
                <p>Funding retail traders in 24 hours</p>
                <div className="hideText">
                  Become a remote prop trader in 24 hours
                </div>
              </div>
              <div>
                <span>Learn more {">"}</span>
              </div>
            </a>
          </div>

          <div className=" homeBoxTwo col-12 col-md-6">
            <a href="products/token" className="card">
              <div>
                <h3>Traders Central Tokens</h3>
                <p>Send and redeem TCT{"'"}s for discounts</p>
                <div className="hideText">A currency for our ecosystem</div>
              </div>
              <div>
                <span>Learn more {">"}</span>
              </div>
            </a>
          </div>

          <div className=" homeBoxThree col-12 col-md-6">
            <a href="products/liquidity " className="card">
              <div>
                <h3>Traders Central Capital</h3>
                <p>Launch your prop fund from anywhere in the world</p>
                <div className="hideText">
                  Access market making services in a few steps.
                </div>
              </div>
              <div>
                <span>Learn more {">"}</span>
              </div>
            </a>
          </div>

          <div className=" homeBoxFour col-12 col-md-6">
            <a traget="_blank" href="https://tccrypto.io/" className="card">
              <div>
                <h3>Traders Central Crypto</h3>
                <p>Buy and Sell Crypto</p>
                <div className="hideText">
                  Towards sound money and decentralisation
                </div>
              </div>
              <div>
                <span>Learn more {">"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
