import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";

export default function HelpCenterSectionThree({ tl }) {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".helpCenterSectionThree",
        start: "top 150px",
        end: "bottom center",
        scrub: 4,
        pin:true
      }	
    })
    .add('start')
    .from(".helpCenterSectionThree .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
    .from(".helpCenterSectionThree .bigCard", { x: -50, opacity : 0, duration: 0.8 },">-0", 'start')
    .from(".helpCenterSectionThree .smallCardOne", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
    .from(".helpCenterSectionThree .smallCardTwo", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
    .from(".helpCenterSectionThree .smallCardThree", { x: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');
  }, [tl]);

  return (
    <div className="helpCenterSectionThree py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitleWrap text-center mb-5">
              <h2>Trader Central Bites</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <a href="#" className="card bigCard">
              <Image
                className="card-img-top"
                src="/images/lesson-5.jpg"
                alt="Card image cap"
                width={540}
                height={303.75}
              />
              <div className="card-body">
                <div className="card-body-Four-line">
                  <h5 className="card-title">Saving vs. Investing</h5>
                  <p className="card-text">
                    There{"'"}s a time for saving and a time for investing. Learn
                    how to make each strategy work for you.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-6">
            <div className=" smallCard smallCardOne card flex-md-row mb-3">
              <Image
                className="card-img-right flex-auto d-none d-md-block"
                src="/images/lesson-1-box.jpg"
                alt="Image" 
                data-holder-rendered="true"
                width={210}
                height={225}
              />
              <div className="card-body d-flex flex-column align-items-start">
                <div className="card-body-three-line">
                  <h5 className="card-title">Saving vs. Investing</h5>
                  <p className="card-text">
                    There{"'"}s a time for saving and a time for investing. Learn
                    how to make each strategy work for you.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </div>

            <div className=" smallCard smallCardTwo card flex-md-row mb-3">
              <Image
                className="card-img-right flex-auto d-none d-md-block"
                src="/images/lesson-2-box.jpg"
                alt="Image" 
                data-holder-rendered="true"
                width={210}
                height={225}
              />
              <div className="card-body d-flex flex-column align-items-start">
                <div className="card-body-three-line">
                  <h5 className="card-title">Saving vs. Investing</h5>
                  <p className="card-text">
                    There{"'"}s a time for saving and a time for investing. Learn
                    how to make each strategy work for you.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </div>

            <div className=" smallCard smallCardThree card flex-md-row mb-3">
              <Image
                className="card-img-right flex-auto d-none d-md-block"
                src="/images/lesson-3-box.jpg"
                alt="Image" 
                data-holder-rendered="true"
                width={210}
                height={225}
              />
              <div className="card-body d-flex flex-column align-items-start">
                <div className="card-body-three-line">
                  <h5 className="card-title">Saving vs. Investing</h5>
                  <p className="card-text">
                    There{"'"}s a time for saving and a time for investing. Learn
                    how to make each strategy work for you.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
