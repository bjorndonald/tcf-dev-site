import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

export default function FundingSectionTwo({tl}) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".fundingSectionTwo",
        start: "top 150px",
        end: "bottom center",
        scrub: 2,
        pin:true
      }	
    })
    .add("start")
    .from(".fundingSectionTwo .sectionTitleWrap", { y: 50, opacity : 0 }, "start")
    .from(".fundingSectionTwo .gaspSlideLeft", { x: -50, opacity : 0 }, "start")
    .from(".fundingSectionTwo .gaspSlideRight", { x: 50, opacity : 0 }, "start");
  }, [tl]);
  return (
    <div className="fundingSectionTwo py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row py-5 d-flex align-items-stretch">
          <div className="col-12">
            <div className="sectionTitleWrap text-center mb-5">
              <h2>How it works</h2>
              <p>A hybrid model built for all trading stategies and styles</p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center gaspSlideLeft">
            <div>
              <h3>
                One Time Fee <br />
                Monthly Subscriptions? <br />
                Your Pick!
              </h3>
              <ul>
                <li>
                  Pay once, pass the test and get funded. Keep up to 85% of
                  profits, trade anytime and hold trades over the weekend.
                </li>
                <li>
                  Get access to live capital with our recurring subscription,
                  Keep up to 60% of profits. Trade aytime, hold trades over the
                  weekend.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 gaspSlideRight">
            <video loop={true} autoPlay="autoplay" muted={true}>
              <source src="/videos/how-it-works.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
