import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

export default function TokenSectionOne({tl}) {
  useEffect(() => {
    tl.from(".tokenSectionOne", {opacity: 0, duration: 0.8, delay: 0.8,  ease:'easeIn'})
    .from(".tokenSectionOne .pOne", {x: 100,opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
    .from(".tokenSectionOne h1", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5")
    .from(".tokenSectionOne .pTwo", {x: 100, opacity: 0, duration: 0.8, ease:'easeIn'}, ">-0.5")
    .from(".tokenSectionOne a", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
  }, [tl]);
  return (
    <div className="tokenSectionOne py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className=" text-center helpCenterSectionOneTitle py-5">
                <p className="pOne">Trader Central Token</p>
                <h1>Send and Redeem in Seconds</h1>
                <p className="pTwo">Stack up, share discounts, get cash back</p>
              <a
                className=" btn btn-black px-3 py-1"
                href="https://dash.traderscentral.fund/sign-up"
                target="_blank"
                style={{ opacity: "1", transform: "translate(0px, 0px)" }}
              >
                Get your first TCT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
