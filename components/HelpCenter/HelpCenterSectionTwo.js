import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";

export default function HelpCenterSectionTwo({tl}) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".helpCenterSectionTwo",
        start: "top 150px",
        end: "bottom center",
        scrub: 4,
        pin:true
      }	
    })
    .add('start')
    .from(".helpCenterSectionTwo .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
    .from(".helpCenterSectionTwo .eyntkBoxOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
    .from(".helpCenterSectionTwo .eyntkBoxTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
    .from(".helpCenterSectionTwo .eyntkBoxThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
    .from(".helpCenterSectionTwo .eyntkBoxFour", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');

  }, [tl]);

  return (
    <div className="helpCenterSectionTwo py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitleWrap text-center mb-5">
              <h2>Everything you need to know</h2>
            </div>
          </div>
        </div>
        <div className="row eyntkBoxs d-flex align-items-stretch">
          <div className="col-12 col-md-3">
            <div className="eyntkBox eyntkBoxOne">
              <h3>Funding</h3>
              <Image 
                src="/images/piggy.png" 
                alt="Image" 
                width={225}
                height={165.38}
              />
              <p>The easiest way for forex traders to get funded.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="eyntkBox eyntkBoxTwo">
              <h3>Tokens</h3>
              <Image 
                src="/images/token.png"
                alt="Image"
                width={225}
                height={165.38}
              />
              <p>TCT - virtual currency with in our ecosystem.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="eyntkBox eyntkBoxThree">
              <h3>Crypto</h3>
              <Image 
                src="/images/bitcoin.png" 
                alt="Image"
                width={225}
                height={165.38}
              />
              <p>Buy and sell crypto in seconds!</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="eyntkBox eyntkBoxFour">
              <h3>Liquidity</h3>
              <Image 
                src="/images/laquidty.png" 
                alt="Image"
                width={225}
                height={165.38}
              />
              <p>Start your prop fund in 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
