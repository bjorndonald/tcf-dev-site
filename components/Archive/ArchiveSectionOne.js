import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

export default function ArchiveSectionOne({tl}) {
  useEffect(() => {
    tl.from(".archiveSectionOne", {opacity: 0, duration: 0.8,  ease:'easeIn'})
    .from(".archiveSectionOne h1", {x: 100,opacity: 0,  duration: 0.8, ease:'easeIn'},">-0")
    .from(".archiveSectionOne p", {x: -100, opacity: 0, duration: 0.8,  ease:'easeIn'}, ">-0.5");
  }, [tl]);
  return (
    <div className="archiveSectionOne pt-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <h1>The Archive</h1>
            <p>Why Stop Learning, Checkout old video from our vault.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
