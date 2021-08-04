import React, { useEffect } from "react";
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";

export default function FundingHeroSection({tl}) {
  useEffect(() => {
    tl.to(".fundingSectionOne", {opacity: 1, duration: 0.8, delay: 0.8, ease:'easeIn'})
    .from(".fundingSectionOne h1", {x: '+=50',opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
    .from(".fundingSectionOne h2", {x: -50, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5")
    .from(".fundingSectionOne img", {y: 50, opacity: 0, duration: 0.8, ease:'easeIn'}, ">-0.5");
  }, [tl]);
  
  return (
    <div className="fundingSectionOne py-5 d-flex align-items-center ">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className=" text-center  py-5">
              <h1>Trader Central Fund</h1>
              <h2>Funding in 24 hours</h2>
              <Image
                style={{ width: "60%" }}
                className="py-4"
                src="/images/funding-hero.png"
                alt="Trader Central Fund" 
                width={666} height={438.52}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
