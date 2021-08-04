import React, { Fragment } from "react";
import MetaTag from "./../components/MetaTag";
import AboutUsSectionDttiy from "../components/AboutUs/AboutUsSectionDttiy";
import AboutUsSectionEs from "../components/AboutUs/AboutUsSectionEs";
import AboutUsSectionJotc from "../components/AboutUs/AboutUsSectionJotc";
import AboutUsSectionOne from "../components/AboutUs/AboutUsSectionOne";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function aboutUs() {

  gsap.registerPlugin(ScrollTrigger);
  let hc_tl = gsap.timeline();
  
  return (
    <Fragment>
      <MetaTag title="Home Page" />
      <AboutUsSectionOne tl={hc_tl} />
      <AboutUsSectionEs tl={hc_tl} />
      <AboutUsSectionDttiy tl={hc_tl} />
      <AboutUsSectionJotc tl={hc_tl} />
    </Fragment>
  );
}
