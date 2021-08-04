import React from "react";
import Image from 'next/image';

export default function StationSectionThree() {
  return (
    <div className="stationSectionThree stationStyle floatContentWrap pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-md-4">
            <div className="row">
              <div className="col-12 mb-3">
                <a href="#">
                  <div className="newsLeftSectionImg">
                    <Image src="/images/station/1900x1900_Magazine_Square_Small.webp" alt="Image" width={480} height={480} />
                  </div>
                  <div className="newsContent">
                    <span>Money {"&"} the World</span>
                    <h3>
                      Tesla Invested Billions in Bitcoin. But That May Not Be
                      the Biggest Crypto News
                    </h3>
                    <p>
                      What does it mean when a giant company parks billions in
                      cryptocurrency? It{"’"}s a vote of confidence{","} sure. But maybe
                      not the kind you{"’"}d imagine. We unpack what it means{","} who
                      it{"’"}s going to affect{","} and what it portends for the future
                      of Bitcoin.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 mb-3">
                <a href="#">
                  <div className="newsLeftSectionImg">
                    <Image src="/images/station/Dollar_1900x1900_Magazine_Square_Small.webp" alt="Image" width={480} height={480} />
                  </div>
                  <div className="newsContent">
                    <span>Money {"&"} the World</span>
                    <h3>
                      We Fact-Check Theories About Meme Stocks and Online
                      Brokerages
                    </h3>
                    <p>
                      Brokerages stopped trading on stocks like GameStop{","} issued
                      warnings when people tried to trade{","} and even had to raise
                      billions to shore up their businesses. There{"’"}s a hurricane
                      of misinformation about why all that happened. Here we
                      weigh in on what{"’"}s true{","} what{"’"}s false{","} and what we just
                      don{"’"}t know the answer to.
                    </p>
                    <b>Read Article</b>
                  </div>
                </a>
              </div>

              <div className="col-12 mb-3">
                <a href="#">
                  <div className="newsLeftSectionImg">
                    <Image src="/images/station/GameStop_1900x1900_Magazine_Square_Small.webp" alt="Image" width={480} height={480} />
                  </div>
                  <div className="newsContent">
                    <span>Money {"&"} the World</span>
                    <h3>
                      How the GameStop Phenomenon Happened. And Why the Losers
                      May Not Be Who You Think
                    </h3>
                    <p>
                      A conversation with Ben Reeves{","} resident market genius
                      (and Chief Investment Officer at Wealthsimple){","} who
                      explains what happened{","} the changes it shows in the world
                      of investing{","} and how{","} in some ways{","} it reflects the same
                      problems individual investors have always faced.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 ">
            <div className=" newsBigFont floatContent stickyContent">
              <span>Money Diaries</span>
              <h2>
              {'"'}UNTIL 44 YEARS OF AGE{","} I NEVER HAD ANY KIND OF SAVINGS ACCOUNT.
                I{"’"}D ALWAYS BEEN UNDER THE GUN. I{"’"}D ALWAYS OWED MONEY.{'"'}
              </h2>
              <span>Anthony Bourdain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
