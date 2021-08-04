import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

export default function ArchiveSectionFive({tl}) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".archiveSectionFive",
        start: "top 150px",
        end: "bottom center",
        scrub: 1,
        pin:true
      }	
    })
    .from(".archiveSectionFive .row", { opacity : 0 });
  }, [tl]);
  return (
    <div className="archiveSectionFive archiveSectionFooterLine pt-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row py-5 d-flex justify-content-center archiveSectionFooterLineC">
          <div className="col-12 col-md-8">
            <div className=" d-flex justify-content-between align-items-center border rounded p-3">
              <div>
                <p className="m-0">Decentralizing funding for all.</p>
              </div>
              <div>
                <a className=" btn btn-black px-3 py-1" target="_blank" href="https://dash.traderscentral.fund/sign-up">
                  Get Funded
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
