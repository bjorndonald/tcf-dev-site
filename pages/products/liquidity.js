import React, { Fragment } from "react";
import MetaTag from "./../../components/MetaTag";
import LiquiditySectionOne from "./../../components/Liquidity/LiquiditySectionOne";
import LiquiditySectionTwo from "./../../components/Liquidity/LiquiditySectionTwo";
import LiquiditySectionThree from "./../../components/Liquidity/LiquiditySectionThree";
import LiquiditySectionFour from "./../../components/Liquidity/LiquiditySectionFour";
import LiquiditySectionFive from "./../../components/Liquidity/LiquiditySectionFive";
import LiquiditySectionFaq from "./../../components/Liquidity/LiquiditySectionFaq";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function liquidity() {

  gsap.registerPlugin(ScrollTrigger);
  let hc_tl = gsap.timeline();

  return (
    <Fragment>
      <MetaTag title="Liquidity page" />
      <LiquiditySectionOne tl={hc_tl} />
      <LiquiditySectionTwo tl={hc_tl} />
      <LiquiditySectionThree tl={hc_tl} />
      <LiquiditySectionFour tl={hc_tl} />
      <LiquiditySectionFive tl={hc_tl} />
      <LiquiditySectionFaq tl={hc_tl} />
    </Fragment>
  );
}
