import React, { useEffect } from "react";

export default function HelpCenterSectionOne({tl}) {
  useEffect(() => {
   
    tl.from(".helpCenterSectionOne", { opacity: 0, duration: 0.8, ease: "easeIn"})
      .from(".helpCenterSectionOne .helpCenterSearchBox",{ y: 100, opacity: 0, duration: 0.8, ease: "easeIn" },">-0.5" )
      .from(".helpCenterSectionOne .helpCenterSectionOneTitle", { y: 100, opacity: 0, duration: 0.8, ease: "easeIn" },">-1");
  }, [tl]);

  return (
    <div className="helpCenterSectionOne py-5 d-flex align-items-center">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className=" text-center helpCenterSectionOneTitle py-5">
              <h1>
                Hello!
                <br /> How can we help?
              </h1>
              <form>
                <div className="input-group mb-3 helpCenterSearchBox">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control searchField"
                    placeholder="Search for your question"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
