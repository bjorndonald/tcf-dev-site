import React, { Fragment } from "react";
import MetaTag from "./../components/MetaTag";
import StationSectionOne from "./../components/Station/StationSectionOne";
import StationSectionTwo from "./../components/Station/StationSectionTwo";
import StationSectionThree from "./../components/Station/StationSectionThree";
import StationSectionFour from "./../components/Station/StationSectionFour";
import StationSectionFive from "./../components/Station/StationSectionFive";
import StationSectionSix from "./../components/Station/StationSectionSix";
import StationSectionSeven from "./../components/Station/StationSectionSeven";

export default function station() {
  return (
    <Fragment>
      <MetaTag title="Station" />
      <StationSectionOne />
      {/* <StationSectionTwo />
      <StationSectionThree />
      <StationSectionFour />
      <StationSectionFive />
      <StationSectionSix />
      <StationSectionSeven /> */}
    </Fragment>
  );
}
