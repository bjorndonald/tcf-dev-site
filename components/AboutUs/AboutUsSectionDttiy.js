import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from 'next/image';

export default function AboutUsSectionDttiy({tl}) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutUsSectionDttiy",
        start: "top 150px",
        end: "bottom center",
        scrub: 4,
        pin:true
      }	
    })
    .add('start')
    .from(".aboutUsSectionDttiy .gaspSlideLeft", { x: -50, opacity : 0}, 'start')
    .from(".aboutUsSectionDttiy .gaspSlideRight", { x: 50, opacity : 0 }, 'start');
  }, [tl]);
  return (
    <div className="aboutUsSectionDttiy py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row d-flex align-items-center ">
          <div className="col-12 col-md-6 gaspSlideLeft">
            <div className="aboutUsSectionDttiyImg text-center mb-5">
              <Image 
                src="/images/aboutUsSectionDttiyImg.jpg" 
                alt="Discover the trader in you" 
                width={330}
                height={298.31}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 gaspSlideRight">
            <div className="sectionTitleWrap mb-5 ">
              <h2>Discover the trader in you</h2>
              <p>
                Daily digestible finance vlogs to help you understand what’s
                going on in the global economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
