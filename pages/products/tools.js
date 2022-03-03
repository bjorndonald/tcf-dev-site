import React, { Fragment, useEffect } from "react";
import MetaTag from "./../../components/MetaTag";
import Head from "next/head";
import ToolSectionOne from "../../components/Tools/ToolsSectionOne";
import ToolSectionTwo from "../../components/Tools/ToolsSectionTwo";
import ToolSectionThree from "../../components/Tools/ToolsSectionThree";
import ToolSectionFour from "../../components/Tools/ToolsSectionFour";
import ToolSectionFive from "../../components/Tools/ToolsSectionFive";
import ToolSectionSix from "../../components/Tools/ToolsSectionSix";

function tools(props) {
  return (
    <div style={{ height: "max-content" }}>
      <MetaTag
        description={`Traders Central Fund connects traders to backers to get funded in less 
  than 24 hours. Choose between our Monthly and One Time Fee Model.`}
        title="Traders Central Tools - All your trading tools in one place. | Traders Central"
      />
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
        <script src="/js/script.js"></script>
      </Head>
      <div className="tools-main-bg">
        <ToolSectionOne />
        <ToolSectionTwo />
        <ToolSectionThree />
        <ToolSectionFour />
        <ToolSectionFive />
        <ToolSectionSix />
      </div>
    </div>
  );
}

export default tools;
