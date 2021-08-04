import React, { useEffect } from "react";
import Image from 'next/image';
import { gsap } from "gsap/dist/gsap";
import ReactPlayer from 'react-player'

export default function ArchiveSectionTwo({tl}) {
  
    useEffect(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".archiveSectionTwo",
          start: "top 150px",
          end: "bottom center",
          scrub: 4,
          pin:true
        }	
      })
      .add('start')
      // .from(".archiveSectionTwo .archiveSectionOne", {opacity: 0, ease:'easeIn'},'start')
      .from(".archiveSectionTwo h1", {x: 100,opacity: 0, ease:'easeIn'},'start')
      .from(".archiveSectionTwo p", {x: -100, opacity: 0, ease:'easeIn'}, 'start')
      .from(".archiveSectionTwo .theArchiveFourBox1", {x: -100, opacity: 0, ease:'easeIn'},'start')
      .from(".archiveSectionTwo .theArchiveFourBox2", {x: 100, opacity: 0, ease:'easeIn'},'start')
      .from(".archiveSectionTwo .theArchiveFourBox3", {x: -100, opacity: 0, ease:'easeIn'}, 'start')
      .from(".archiveSectionTwo .theArchiveFourBox4", {x: 100, opacity: 0, ease:'easeIn'}, 'start');
  }, [tl]);
  
  
 
  return (

    <div className="archiveSectionTwo py-5 d-flex align-items-center overFlowH">
      <div className="container">
      <div className="row theArchiveFourWrap">
          <div className="col-12 text-center mb-5">
            <h1>The Archive</h1>
            <p>Why Stop Learning, Checkout old video from our vault.</p>
          </div>
      
        
          <div className="col-12 col-md-6 my-3 theArchiveFourBox theArchiveFourBox1">
            <div className="card">
              <h2>The Market</h2>
              <div className="videoWrapperSli player-wrapper" >
                <ReactPlayer  width='100%'
                  className='react-player' url='https://www.youtube.com/watch?v=Tblulp7K7_c&list=PLcXoX4iSJOx8hxJ7F95JJPEJL52Tk9NOJ' loop={true} controls={false} muted={true}  />
                
              </div>
              {/* <Image src="/images/the-archive-four-01.jpg" alt="The Market" width={538} height={255} /> */}
            </div>
          </div>
          <div className="col-12 col-md-6 my-3 theArchiveFourBox theArchiveFourBox2"  width={538} height={255}  >
            <div className="card">
              <h2>Round-Ups</h2>
              <div className="videoWrapperSli player-wrapper" >
                <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=gUFFlVrOY9M&list=PLcXoX4iSJOx99Cr6Mckhx4aQS_ikBZGdZ' loop={true} controls={false} muted={true}  />
                
              </div>
              {/* <Image src="/images/the-archive-four-02.jpg" alt="Round-Ups" width={538} height={255}  /> */}
            </div>
          </div>
          <div className="col-12 col-md-6 my-3 theArchiveFourBox theArchiveFourBox3">
            <div className="card">
              <h2>The Lingo</h2>
              <div className="videoWrapperSli player-wrapper" >
                <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=Ha6r5mKI6_o&list=PLcXoX4iSJOx82Ge5MGjYU5uOqWAA1xzCa' loop={true} controls={false} muted={true}  />
                
              </div>
              {/* <Image src="/images/the-archive-four-03.jpg" alt="The Lingo" width={538} height={255}  /> */}
            </div>
          </div>
          <div className="col-12 col-md-6 my-3 theArchiveFourBox theArchiveFourBox4">
            <div className="card">
              <h2>Mental Process</h2>
              <div className="videoWrapperSli player-wrapper" >
                <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=D1X5SuR-24M&list=PLcXoX4iSJOx_eE3TNAPU98cSfL_HBrWb3' loop={true} controls={false} muted={true}  />
                
              </div>
              {/* <Image src="/images/the-archive-four-04.jpg" alt="Mental Process" width={538} height={255} /> */}
            </div>
          </div>
          <div className="col-12 mt-4 text-center">
            <a className=" btn btn-black px-3 py-1" href="#">
              See archive
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
}
