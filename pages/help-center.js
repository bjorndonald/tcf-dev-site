import React, { Fragment } from "react";
import HelpCenterSectionFive from "../components/HelpCenter/HelpCenterSectionFive";
import HelpCenterSectionFour from "../components/HelpCenter/HelpCenterSectionFour";
import HelpCenterSectionOne from "../components/HelpCenter/HelpCenterSectionOne";
import HelpCenterSectionThree from "../components/HelpCenter/HelpCenterSectionThree";
import HelpCenterSectionTwo from "../components/HelpCenter/HelpCenterSectionTwo";
import MetaTag from "./../components/MetaTag";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function helpCenter() {
  
  gsap.registerPlugin(ScrollTrigger);
  let hc_tl = gsap.timeline();

  return (
    <Fragment>
      <MetaTag title="Help Center" />
      <HelpCenterSectionOne tl={hc_tl} />
      <HelpCenterSectionTwo tl={hc_tl} />
      <HelpCenterSectionThree tl={hc_tl} />
      <HelpCenterSectionFour tl={hc_tl} />
      <HelpCenterSectionFive tl={hc_tl} />
    </Fragment>
  );
}
