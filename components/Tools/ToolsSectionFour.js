import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Trade from "../../public/images/tools/copy-trade2.svg";
import ToolSectionFive from "./ToolsSectionFive";

const Number = ({ children }) => {
  return <div className="number">{children}</div>;
};

export default function ToolSectionFour() {
  return (
    <>
      <div className="toolsSectionFour py-5 d-flex align-items-center ">
        <div className="background"></div>
        <div id="four-div" className="container d-flex">
          <div className="four-img">
            <Image src={Trade} alt="trade" />
          </div>
          <div className="trade-div mt-2 ">
            <h1>Copy Trader</h1>
            <p>
              <Number>1</Number> <span>Manage multiple accounts with ease</span>
            </p>
            <p>
              <Number>2</Number>{" "}
              <span>
                Supports all instruments (Forex, CFDs, Metals, Crypto, Indices)
              </span>
            </p>
            <p>
              <Number>3</Number>{" "}
              <span>
                Fully cloud-based (No VPS or EA installation required)
              </span>
            </p>
            <p>
              <Number>4</Number> <span>Supports MT4, MT5, and CTrader</span>
            </p>
          </div>
        </div>
      </div>
      {/* <ToolSectionFive /> */}
    </>
  );
}
