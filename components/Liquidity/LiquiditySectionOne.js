import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

export default function LiquiditySectionOne({tl}) {
  useEffect(() => {
    tl.from(".liquiditySectionOne", {opacity: 0, duration: 0.8, delay: 0.8,  ease:'easeIn'})
    .from(".liquiditySectionOne .liquiditySectionOneVideo", {opacity: 0, duration: 0.8, ease:'easeIn'},">0")
    .from(".liquiditySectionOne h1", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5")
    .from(".liquiditySectionOne h2", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5")
    .from(".liquiditySectionOne p", {x: -100, opacity: 0, duration: 0.8, ease:'easeIn'}, ">-0.5")
    .from(".liquiditySectionOne a", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
    
  }, [tl]);
  return (
    <div className="liquiditySectionOne py-5 d-flex align-items-center">
      <div className="container">
        <div className="row py-5 d-flex align-items-stretch">
          <div className="col-12 col-md-6  d-flex align-items-center liquiditySectionOneL">
            <div className="">
              <h1>TraderCentral Capital</h1>
              <h2>Start your Prop Fund in 24 hours</h2>
              <p>
                Eliminating lengthy paperwork, and numerous fees to help you
                launch your fund from anywhere in the world.
              </p>
              <a className=" btn btn-black px-3 py-1" href="#">
                Sign-up
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 liquiditySectionOneR align-right">
            <div className="liquiditySectionOneVideo">
              <video loop={true} autoPlay="autoplay" muted={true}>
                <source src="/videos/liquidityOne.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
