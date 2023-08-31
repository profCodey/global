import React from 'react'
import AboutUsHeader from '../component/AboutPage/AboutUs'
import AboutHeading from '../component/AboutPage/AboutHeading'
import Achievement from '../component/Home/achievement/achievement'
import OurMission from '../component/AboutPage/OurMission'
import CoreValues from '../component/AboutPage/CoreValues'
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Get Door Security Service in UK</title>
        <meta name="description" content="Top Event Security Services un UK | Bouncer Services in UK"/>
        <link rel="canonical" href="/about" />
    
      </Helmet >
      <AboutUsHeader />
      <AboutHeading />
      <Achievement />
      <OurMission />

      <CoreValues />
    </>
  );
}

  export default About