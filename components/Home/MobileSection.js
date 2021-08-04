import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap/dist/gsap";
import Image from 'next/image';

export default function MobileSection({tl}) {
    
    useEffect(() => {        
        gsap.timeline({
            scrollTrigger: {
                trigger: ".sectionMobile",
                start: "center center",
                end: "bottom top",
                scrub: 4,
                pin:true
            }	
        })
        .add("start")
        .to(".sectionTwoContent-1", 1, { opacity : 0 },  "start")
        .from(".sectionTwoContent-2", 1, { opacity : 0 },  "start")
        .from(".box3", 1, { x: -200 }, "start")
        .from(".sectionTwoNav-2 ", 1, {opacity : 0 },  "start")
        .from(".sectionTwoContent-2 .sectionTwoContentLine div", 1, { y: 66, ease: Power3.easeOut },"start")
        .from('.sectionTwoContent-2 p', 1, { y: 20, opacity: 0, ease: Power3.easeOut },"start")
        .add("start")
        .to(".sectionTwoContent-2", 2, { opacity : 0 }, "start")
        .from(".sectionTwoContent-3", 2, { opacity : 0 }, "start")
        .from(".box4", 2, { x: -200 },"start")
        .from(".sectionTwoNav-3 ", 2, {opacity : 0 }, "start")
        .from(".sectionTwoContent-3 .sectionTwoContentLine div", 2, { y: 66, ease: Power3.easeOut }, "start")
        .from('.sectionTwoContent-3 p', 2, { y: 20, opacity: 0, ease: Power3.easeOut }, "start");
    
    }, [tl]);
  return (
    <div className="sectionMobile" style={{ overflow: "hidden" }}>
      
      <div className="sectionTwo d-flex align-items-center">
            <div className="container ">
                <div className="row d-flex align-items-stretch">
                    <div className="col-12 col-md-2 d-flex align-items-center ">
                        <div className="sectionTwoList">
                            <div className="sectionTwoNav sectionTwoNavFix sectionTwoNavF">
                                <ul>
                                    <li className="active" >Client Portal</li>
                                    <li>Socials</li>
                                    <li>Profile</li>
                                </ul>
                            </div>
                            <div className="sectionTwoNav sectionTwoNav-2 ">
                                <ul>
                                    <li >Client Portal</li>
                                    <li className="active" >Socials</li>
                                    <li>Profile</li>
                                </ul>
                            </div>
                            <div className="sectionTwoNav sectionTwoNav-3">
                                <ul>
                                    <li >Client Portal</li>
                                    <li>Socials</li>
                                    <li className="active" >Profile</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 ">
                        <div className="mobImg">
                            <div className="fixedBox" ><Image src="/images/mobtb-1.png" width={210} height={416.25} alt="Image" /></div>
                            <div className="box box2" ><Image src="/images/mob-2.png" width={210} height={416.25} alt="Image" /></div>
                            <div className="box box3" ><Image src="/images/mob-3.png" width={210} height={416.25} alt="Image" /></div>
                            <div className="box box4" ><Image src="/images/mob-4.png" width={210} height={416.25} alt="Image" /></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="sectionTwoContentWrap">
                            <div className="sectionTwoContent sectionTwoContent-1">
                            <h2>
                                <div className="sectionTwoContentLine sectionTwoContentLineOne">
                                    <div className="sectionTwoContentLineOneInner">Track your trading </div>
                                </div>
                                <div className="sectionTwoContentLine sectionTwoContentLineTwo">
                                    <div className="sectionTwoContentLineTwoInner">portfolio with ease!</div>
                                </div>
                                {/* <div className="sectionTwoContentLine sectionTwoContentLineThree">
                                    <div className="sectionTwoContentLineThreeInner">Profile</div>
                                </div> */}
                            </h2>
                            <p>Stay on top of your trading performance, learn what other traders are doing, and receive TCTs in one place, the client portal!</p>
                            </div>
                        
                            <div className="sectionTwoContent sectionTwoContent-2">
                            <h2>
                                <div className="sectionTwoContentLine sectionTwoContentLineOne">
                                    <div className="sectionTwoContentLineOneInner">Socials Function</div>
                                </div>
                                {/* <div className="sectionTwoContentLine sectionTwoContentLineTwo">
                                    <div className="sectionTwoContentLineTwoInner">Portfolio With Ease</div>
                                </div>
                                <div className="sectionTwoContentLine sectionTwoContentLineThree">
                                    <div className="sectionTwoContentLineThreeInner">Message</div>
                                </div> */}
                            </h2>
                            <p>Send, Receive, and Redeem TCT whilst sharing your next trading set-ups with your friends, all the while meeting other TC traders!</p>
                            </div>
                            
                            <div className="sectionTwoContent sectionTwoContent-3">
                            <h2>
                                <div className="sectionTwoContentLine sectionTwoContentLineOne">
                                    <div className="sectionTwoContentLineOneInner">Endless Customisation</div>
                                </div>
                                {/* <div className="sectionTwoContentLine sectionTwoContentLineTwo">
                                    <div className="sectionTwoContentLineTwoInner">Portfolio With Ease</div>
                                </div>
                                <div className="sectionTwoContentLine sectionTwoContentLineThree">
                                    <div className="sectionTwoContentLineThreeInner">Setting</div>
                                </div> */}
                            </h2>
                            <p>Change your username, manage your referrals, and upload your KYC with ease in the settings area.</p>
                            </div>
                        </div>
                    </div>
	            </div>
	        </div>
        </div>
    </div>
  );
}
