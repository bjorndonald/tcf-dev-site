import React from "react";
import Image from 'next/image';

export default function StationSectionOne() {
  return (
    <div className="stationSectionOne stationStyle pt-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-6 newsLeftSection">
            <div className="stickyContent">
              <div className="row">
                <div className="col-12">
                  <a href="#">
                    <div className="newsLeftSectionImg">
                      <Image src="/images/station/2500x2500_Magazine_Square_Small.webp" alt="Image" width={540} height={540} />
                    </div>
                    <div>
                      <span>News</span>
                      <h3>Listen to Our New Podcast!</h3>
                      <b>Read Article</b>
                    </div>
                  </a>
                </div>

                <div className="col-12">
                  <a href="#">
                    <div className="newsLeftSectionImg">
                      <Image src="/images/station/GSP-1900x1900_Magazine_Square_Small.webp" alt="Image" width={540} height={540} />
                    </div>
                    <div>
                      <span>Money Diaries</span>
                      <h3>The UFC Won’t Pay You Fairly Unless You Make Them</h3>
                      <b>Read Article</b>
                    </div>
                  </a>
                </div>

                <div className="col-12">
                  <a href="#">
                    <div className="newsLeftSectionImg">
                      <Image src="/images/station/JG-1900x1900_Magazine_Square_Small.webp" alt="Image" width={540} height={540} />
                    </div>
                    <div>
                      <span>Money Diaries</span>
                      <h3>
                        The Financial Life of a Minor Character on “Friends”{" "}
                      </h3>
                      <b>Read Article</b>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 newsRightSection">
            <div className="row  pt-5  ">
              <div className="col-12">
                <div className=" mb-4 border-bottom">
                  <h2>Latest</h2>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/1900x1900_Inflation_Magazine_Desktop.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Finance for Humans</span>
                    <h3>Inflation Panic 2021! What It Means, What To Do</h3>
                    <p>
                      Maybe you saw that inflation numbers were high (really
                      high!) last month. Or that the market went down — and then
                      maybe, so did your portfolio. Here’s how inflation works
                      and what you should do about it.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/SnarkyMarky_1900x1900_Magazine_Square_Small.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Money Diaries</span>
                    <h3>The TikTok Economy, Explained by Snarky Marky</h3>
                    <p>
                      In 2020, he was just a college student living with his
                      parents in Toronto when a TikTok he made went viral. Now
                      he has 4.3 million followers and a one-person business. He
                      tells us how it all works, down to the dollar.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/Katchen_1900x1900_Magazine_Square_Small.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>News</span>
                    <h3>
                      We Raised $750 Million. We’re Using it to Make Money
                      Easier for Everyone
                    </h3>
                    <p>
                      It may be the largest tech investment ever in Canada. And
                      it’s not just a huge vote of confidence, but a challenge
                      to revolutionize the finance industry on behalf of all of
                      us.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/Advisor_1900x1900_Magazine_Square_Small.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Finance for Humans</span>
                    <h3>How & Why to Break Up with Your Financial Advisor</h3>
                    <p>
                      They might be nice and have a cool business card and wear
                      comfy sweater vests, but they are probably charging you
                      four times more than they need to for things you don’t
                      use. Here’s how to know if you really need your friendly
                      neighbourhood financial advisor.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 py-5 my-5 border-top border-bottom newsBigFont ">
                <span>WEALTHSIMPLE MAGAZINE</span>
                <h2>
                  A MONEY MAGAZINE FOR PEOPLE WHO CARE ABOUT MORE THAN MONEY
                </h2>
                <p>
                  Conversations with geniuses and weirdos, help with investing
                  and taxes, and stories that help you understand the big
                  strange world we live in
                </p>
                <a href="#">READ MORE ABOUT WEALTHSIMPLE</a>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/Rembert_1900x1900_Magazine_Square_Small.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Money Diaries</span>
                    <h3>It’ll Work Itself Out (It Actually Won’t)</h3>
                    <p>
                      He’d finally achieved what he’d always wanted. He was a
                      writer, in New York, people knew his name. But under his
                      bed was a plastic bin that contained — in the form of
                      bills and notices — another man entirely. An addict and a
                      debtor. And that man had come calling.{" "}
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/2500x2500_Magazine_Square_Large_Repo1.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Money & the World</span>
                    <h3>
                      We Discovered the True Identity of the NFT Artist “Pak”{" "}
                    </h3>
                    <p>
                      In our latest podcast episode, investigative reporter Alex
                      Palmer tracks down the elusive artist, interviews them,
                      and wonders: what do you do when you know the answer to
                      art’s greatest mystery?
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/NFT_1900x1900_Magazine_Square_Small.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Money & the World</span>
                    <h3>The Wealthsimple Explainer: NFTs</h3>
                    <p>
                      NFTs are suddenly trendy, minting overnight millionaires
                      letting people turn LeBron dunks into assets. But they’re
                      actually more revolutionary than you might think. Here’s
                      what they are, how they work, and why they’re important.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <a href="#">
                  <Image src="/images/station/onlyfans_magazine_square.webp" alt="Image" width={900} height={900} />
                  <div>
                    <span>Money Diaries</span>
                    <h3>Money Diaries: The (Kinda) NSFW OnlyFans Edition</h3>
                    <p>
                      OnlyFans is a kind of digital revolution in sex work that
                      purports to give the power to the workers instead of the
                      overlords. @thatfatbabe, @chloevenom, and @andywithabig🍆
                      tell us the truth about life inside the naked social
                      economy. (Warning: explicit content.){" "}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
