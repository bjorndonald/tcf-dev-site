import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Copier from "../../public/images/tools/feeds2.png";

export default function ToolSectionTwo() {
  return (
    <div className="toolsSectionTwo d-flex w-full align-items-center ">
      <div className="background"></div>
      <div className="container d-flex flex-column align-items-center justify-content-between">
        <div className="row mx-auto flex-column align-items-center justify-content-between">
          <div className="">
            <Image src={Copier} alt="Copier" />
          </div>
        </div>
      </div>
    </div>
  );
}
