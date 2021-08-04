import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from 'next/image';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
   ssr: false,
});
import { gsap } from "gsap/dist/gsap";

export default function FundingSectionFour({tl}) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".fundingSectionFour",
        start: "top 150px",
        end: "bottom center",
        scrub: 1,
        pin:true
      }	
    })
    .add("start")
    .from(".fundingSectionFour .sectionTitleWrap", { x: 50, opacity : 0 }, "start")
    .from(".fundingSectionFour .gaspSlideRight", { x: -50, opacity : 0 }, "start");
    
  }, [tl]);
  return (
    <div className="fundingSectionFour py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className="sectionTitleWrap text-center mb-5">
              <h2>Everything you need to know</h2>
              <p>Relevant information regarding your preffered plan</p>
            </div>
          </div>
          <div className="col-12 gaspSlideRight">
            <OwlCarousel
              className="owl-theme noCenterSliderOC"
              items={2}
              center={true}
              loop={false}
              lazyLoad={true}
              nav={true}
              margin={10}
              responsive={{
                0: { items: 1 },
                767: { items: 2 },
                1000: { items: 2 },
              }}
            >
              <div className="item itemOne">
                <a href="#" className="card">
                  <div className="noCenterSliderOCH">
                    <h3>Trading Rules</h3>
                    <p>Do&quot;s and don&quot;t of trading</p>
                  </div>
                  <div className="noCenterSliderOCI">
                    <Image 
                      src="/images/trading-rules-slid.gif" 
                      alt="Trading Rules"
                      width={378}
                      height={284}
                    />
                  </div>
                  <div className="noCenterSliderOCL">
                    <span>Learn More {">"}</span>
                  </div>
                </a>
              </div>
              <div className="item itemTwo">
                <a href="#" className="card">
                  <div className="noCenterSliderOCH">
                    <h3>Size Guide</h3>
                    <p>Margin lot size and risk explained</p>
                  </div>
                  <div className="noCenterSliderOCI">
                    <Image 
                      src="/images/size-guide-slider.gif" 
                      alt="Size Guide"
                      width={378}
                      height={284}
                      />
                  </div>
                  <div className="noCenterSliderOCL">
                    <span>Learn More {">"}</span>
                  </div>
                </a>
              </div>
              <div className="item itemThree">
                <a href="#" className="card">
                  <div className="noCenterSliderOCH">
                    <h3>Capital Growth</h3>
                    <p>Roadmap to fund manager status</p>
                  </div>
                  <div className="noCenterSliderOCI">
                    <Image 
                      src="/images/capital-growth-slider.gif" 
                      alt="Capital Growth"
                      width={378}
                      height={284}
                      />
                  </div>
                  <div className="noCenterSliderOCL">
                    <span>Learn More {">"}</span>
                  </div>
                </a>
              </div>
              <div className="item itemFour">
                <a href="#" className="card">
                  <div className="noCenterSliderOCH">
                    <h3>Withdrawals</h3>
                    <p>Schedules and methods explained</p>
                  </div>
                  <div className="noCenterSliderOCI">
                    <Image 
                      src="/images/withdrawals-slider.gif"
                      alt="Withdrawals"
                      width={378}
                      height={284}
                    />
                  </div>
                  <div className="noCenterSliderOCL">
                    <span>Learn More {">"}</span>
                  </div>
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
