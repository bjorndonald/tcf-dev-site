import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from 'next/image';

export default function AboutUsSectionOne({tl}) {
  useEffect(() => {
    tl.from(".aboutUsSectionOne", {opacity: 0, duration: 0.8,  ease:'easeIn'})
    .from(".aboutUsSectionOne h1", {x: -100,opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
    .from(".aboutUsSectionOne .aboutUsSectionOneImg", {x: 100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
  }, [tl]);
  return (
    <div className="aboutUsSectionOne pt-5  d-flex align-items-center">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <div className="aboutUsSectionOneTitle  py-5">
              <h1>Decentralising Finance For All</h1>
            </div>
          </div>

          <div className="col-12">
            <div className="aboutUsSectionOneImg">
              <Image src="/images/aboutUsSectionOneBg.jpg" alt="Decentralising Finance For All" width={500} height={375.36}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
