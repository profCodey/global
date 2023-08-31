import React from 'react'
import Header from '../component/ourServices/Header'
import OurServices from '../component/AboutPage/Services'
import AboutProcess from '../component/AboutPage/AboutProcess'
import { Helmet } from "react-helmet-async";

function Services() {
<Helmet>
  <title>Contact Us |Event Security, Crowd Management</title>
  <meta
    name="description"
    content="Event Security Services un UK | Crowd Management | CCTV Services in UK"
  />
  <link rel="canonical" href="/services" />
</Helmet>;

  return (
    <div>
      <Header />
      <OurServices />
      <AboutProcess />
    </div>
  )
}

export default Services