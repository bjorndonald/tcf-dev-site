import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ToolSectionOne() {
  return (
    <div className="toolsSectionOne py-5 d-flex align-items-center ">
      <div className="background"></div>
      <div className="container d-flex flex-column align-items-center justify-content-between">
        <div className="row py-5 mx-auto flex-column align-items-center justify-content-between">
          <h1>
            All your trading tools in <br />
            one place
          </h1>

          <div className="row mt-5 flex-column align-items-center justify-content-between">
            <button className="mb-4">Claim 30% off</button>
          </div>
        </div>
      </div>
    </div>
  );
}
