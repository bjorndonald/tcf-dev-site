import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from 'next/image';

export default function TokenSectionThree({tl}) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".tokenSectionThree",
        start: "top 150px",
        end: "bottom center",
        scrub: 2,
        pin:true
      }	
    })
    .add("start")
    .from(".tokenSectionThree .gaspSlideLeft", { x: -50, opacity : 0 }, "start")
    .from(".tokenSectionThree .gaspSlideRight", { x: 50, opacity : 0 }, "start");
  }, [tl]);
  return (
    <div className="tokenSectionThree tokenSectionaCOE py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row py-5 d-flex align-items-stretch">
          <div className="col-12 col-md-6 mb-4 gaspSlideLeft">
            <div className="tradingBasicI">
              <Image 
                src="/images/comp_4.gif" 
                alt="A currency for our ecosystem"
                width={540}
                height={405}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center  mb-4 gaspSlideRight">
            <div className="tradingBasicHP ">
              <h2>A currency for our ecosystem</h2>
              <p>
                Get rewarded for your talents, share redeem discounts with
                friend
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
