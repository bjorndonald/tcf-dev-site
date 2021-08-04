import React from "react";
import Image from 'next/image';

export default function StationSectionSix() {
  return (
    <div className="stationSectionSeven stationStyle stationHfs  pt-5">
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-12 col-md-6 stationHfsCont">
            <div>
              <span>GET STARTED</span>
              <h2>Get rich slow</h2>
              <p>
                Powerful financial tools to help you grow and manage your money.
                Get started now.
              </p>
              <b>
                <a href="#">GET STARTED</a>
              </b>
            </div>
          </div>
          <div className="col-12 col-md-6 stationHfsIMg">
            <Image src="/images/station/generation-background-d73aa60a369a237bc9c3276c582a5d62.jpg" alt="Image" width={1297} height={729} />
          </div>
        </div>
      </div>
    </div>
  );
}
