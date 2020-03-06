//////////////////////////////////////////////////////////////////////////
// imports
//////////////////////////////////////////////////////////////////////////

/////////////////////////////////////
//  import Fragment from React to enable use of react components
/////////////////////////////////////
import React, { Fragment } from "react";

/////////////////////////////////////
//  Hero contains welcome banner and welcome instructions
//  welcome instructions include login or signup
/////////////////////////////////////
import Hero from "../components/Hero";

/////////////////////////////////////
//  Content contains botm banner
/////////////////////////////////////
import Content from "../components/Content";
import OldLibraryWallpaper from "../assets/OldLibraryWallpaper.jpg";
import styled, { keyframes } from "styled-components";

const LandingPage = () => {

  return (
    <Fragment>
      <Hero />
      <Content />
    </Fragment>
  )
}

export default LandingPage;