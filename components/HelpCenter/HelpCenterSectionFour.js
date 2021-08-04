import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";

export default function HelpCenterSectionFour({ tl }) {
  useEffect(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".helpCenterSectionFour",
          start: "top 150px",
          end: "bottom center",
          scrub: 4,
          pin:true
        }	
      })
      .add('start')
      .from(".helpCenterSectionFour .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
      .from(".helpCenterSectionFour .cardOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
      .from(".helpCenterSectionFour .cardTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
      .from(".helpCenterSectionFour .cardThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');
  }, [tl]);
  return (
    <div className="helpCenterSectionFour py-5 d-flex align-items-center heightHv">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitleWrap text-center mb-5">
              <h2>Central Station</h2>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 col-md-4">
            <a href="#" className="card cardOne">
              <Image
                className="card-img-top"
                src="/images/lesson-1.jpg"
                alt="Card image cap"
                width={350}
                height={196.88}
              />
              <div className="card-body">
                <div className="card-body-Four-line">
                  <h5 className="card-title">The Stock Market</h5>
                  <p className="card-text">
                    Before you learn the details of how to invest{","} this episode
                    will give you enough background on the stock market to kill
                    at cocktail parties.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4">
            <a href="#" className="card cardTwo">
              <Image
                className="card-img-top"
                src="/images/lesson-2.jpg"
                alt="Card image cap"
                width={350}
                height={196.88}
              />
              <div className="card-body">
                <div className="card-body-Four-line">
                  <h5 className="card-title">Investing 101</h5>
                  <p className="card-text">
                    Learn the difference between the two main investing
                    philosophies and how to avoid the biggest rookie mistakes.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4">
            <a href="#" className="card cardThree">
              <Image
                className="card-img-top"
                src="/images/lesson-3.jpg"
                alt="Card image cap"
                width={350}
                height={196.88}
              />
              <div className="card-body">
                <div className="card-body-Four-line">
                  <h5 className="card-title">Saving vs. Investing</h5>
                  <p className="card-text">
                    There{"'"} a time for saving and a time for investing. Learn
                    how to make each strategy work for you.
                  </p>
                </div>
                <span className="card-link">Read More {">"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
