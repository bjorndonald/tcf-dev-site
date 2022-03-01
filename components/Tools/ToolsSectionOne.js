import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ToolSectionOne() {
  const handleClick = () => {
    window.location.assign("https://auth-tc.herokuapp.com/register");
  };
  return (
    <div className="toolsSectionOne py-3 d-flex align-items-center ">
      <div className="background"></div>
      <div className="container d-flex flex-column align-items-center justify-content-between">
        <div className="row py-2 mx-auto flex-column align-items-center justify-content-between">
          <h1>
            All your trading tools in <br />
            one place
          </h1>

          <div className="row mt-2 flex-column align-items-center justify-content-between">
            <button onClick={handleClick} className="mb-4">
              Claim 30% off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
