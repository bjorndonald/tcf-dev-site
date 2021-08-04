import React from "react";
import Image from 'next/image';

export default function StationSectionTwo() {
  return (
    <div className="stationSectionTwo stationStyle">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-4 mb-3">
            <a href="#">
              <div className="newsLeftSectionImg">
                <Image src="/images/station/DumbQs1_1900x1900_Magazine_Square_Small.webp" alt="Image" width={900} height={900} />
              </div>
              <div className="newsContent">
                <span>Money & the World</span>
                <h3>
                  The Pandemic Economy: Why Parenting Inequities Make Mothers
                  Leave the Workforce
                </h3>
                <p>
                  Jessica Calarco, a sociologist at Indiana University, has been
                  studying the effects of the pandemic on mothers. What she’s
                  found is that entrenched inequities, when it comes to stuff
                  like housework and parenting, have created an invisible
                  employment crisis for women.
                </p>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <a href="#">
              <div className="newsLeftSectionImg">
                <Image src="/images/station/YOLO_Magazine_Square.webp" alt="Image" width={900} height={900} />
              </div>
              <div className="newsContent">
                <span>Money & the World</span>
                <h3>GME, Doge, Supreme: How Getting Rich Went Full Internet</h3>
                <p>
                  The idea has always been that value — in stocks, art, precious
                  metals, whatever — is inextricably tied to “fundamentals.” But
                  it seems the internet changed that (hello, GME and Dogecoin!).
                  Felix Salmon explains that if you want to understand finance
                  now, you’d be better off studying Supreme than an annual
                  report.
                </p>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <a href="#">
              <div className="newsLeftSectionImg">
                <Image src="/images/station/Breakup_2500x2500_Magazine_Square_Large.webp" alt="Image" width={900} height={900} />
              </div>
              <div className="newsContent">
                <span>Finance for Humans</span>
                <h3>How to Break Up Financially When You Break Up</h3>
                <p>
                  It’s not just a matter of packing up all his weird old
                  underwear, it’s also a matter of “wait, who just rented ‘Miss
                  Congeniality’ on iTunes for $3.99 because I sure didn’t.”
                  Here’s our guide to changing passwords, discontinuing joint
                  accounts, and all the stops on your financial break-up
                  checklist.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
