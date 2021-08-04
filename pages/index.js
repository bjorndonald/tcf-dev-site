import React, { Fragment } from "react";
import Script from 'next/script';
import Head from "next/head";
import MetaTag from "./../components/MetaTag";
import ContactSection from "../components/Common/ContactSection";
import HeroSection from "./../components/Home/HeroSection";
import MobileSection from "./../components/Home/MobileSection";
import BoxSection from "./../components/Home/BoxSection";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  
  gsap.registerPlugin(ScrollTrigger);
  let hc_tl = gsap.timeline();

  return (
    <Fragment>
      <MetaTag title="Home Page" />
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
        <script src="https:code.jquery.com/jquery-3.4.1.min.js"></script>
      </Head>
      <HeroSection tl={hc_tl} />
      <MobileSection tl={hc_tl} />
      <BoxSection tl={hc_tl} />
      <ContactSection tl={hc_tl} />
    </Fragment>
  );
}
