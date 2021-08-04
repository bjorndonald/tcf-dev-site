import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from 'next/image';

export default function HelpCenterSectionFive({ tl }) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".helpCenterSectionFive",
        start: "top 150px",
        end: "bottom center",
        scrub: 4,
        pin:true
      }	
    })
    .add('start')
    .from(".helpCenterSectionFive .gaspSlideLeft", { x: -50, opacity : 0 }, 'start')
    .from(".helpCenterSectionFive .gaspSlideRight", { x: 50, opacity : 0 }, 'start');
  }, [tl]);

  return (
    <div className="helpCenterSectionFive py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row d-flex align-items-center helpCenterSectionFiveOne">
          <div className="col-12 col-md-6 gaspSlideLeft">
            <div className="sectionTitleWrap mb-5 ">
              <h2>Join Our Trading Community</h2>
              <p>Meeting over 4{','}000 traders from 175 countries</p>
              <a className=" btn btn-black px-3 py-1" href="#">
                Accept Invite
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 helpCenterSectionFiveTwo gaspSlideRight">
            <div className="sectionTitleWrap text-center mb-5">
              <Image
                src="/images/help-center-four.jpg"
                alt="Join Our Trading Community" 
                width={540}
                height={405}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
