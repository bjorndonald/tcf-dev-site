import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CryptoCalc from "../../public/images/tools/Crypto-calc2.svg";

const Number = ({ children }) => {
  return <div className="number">{children}</div>;
};

export default function ToolSectionSix() {
  const handleClick = () => {
    window.location.assign("https://auth-tc.herokuapp.com/register");
  };
  return (
    <div className="toolsSectionFour py-5 d-flex align-items-center ">
      <div className="background"></div>
      <div className="container d-flex flex-wrap w-full flex-row ">
        <div className="six-img">
          <Image src={CryptoCalc} alt="trade" />
        </div>
        <div className="trade-div mt-2 ">
          <h1>Forex & Crypto Calculators</h1>
          <p>
            <Number>1</Number>{" "}
            <span>Crypto currency conversion calculator</span>
          </p>
          <p>
            <Number>2</Number> <span>Forex position size calculator</span>
          </p>
          <p>
            <Number>3</Number> <span>Forex pip calculator</span>
          </p>
          <p>
            <Number>4</Number> <span>Forex margin calculator</span>
          </p>
          <span className="btnDiv mt-2 ml-1">
            <button onClick={handleClick} className="mb-4">
              Get started for free
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
