import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Watch1 from "../../public/images/tools/watchlist1.svg";
import Watch2 from "../../public/images/tools/watchlist2.svg";
import Watch3 from "../../public/images/tools/watchlist3.svg";

const WatchCard = ({ image, text }) => {
  return (
    <div className="watch-card">
      <div>{text}</div>
      <div className="mx-auto d-flex justify-content-center">
        <Image src={image} alt="watchlist" height={180} width={188} />
      </div>
    </div>
  );
};

export default function ToolSectionFive() {
  return (
    <div className="toolsSectionFive d-flex align-items-center ">
      <div className="background"></div>
      <div className="container d-flex w-full">
        <div className="watch-div">
          <h1>Watchlist</h1>
          <p>
            We allow you to monitor price <br />
            changes at all hours of the day and track your{" "}
          </p>
          <button>Create free watchlist</button>
        </div>
        <div className="watch-div2 ">
          <WatchCard text="Real time price updates" image={Watch1} />
          <WatchCard text="Create your own watchlist" image={Watch2} />
          <WatchCard
            text="Track instruments- Crypto, Forex, Stocks"
            image={Watch3}
          />
        </div>
      </div>
    </div>
  );
}
