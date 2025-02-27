/**
 * 
 * @file Home.jsx is the main page of the application. It contains the Navigation, Hero, Benefits, CallToAction, Convert, and Footer components.
 * the project is almost done, and needs to add other sections (payment, contact, etc.) to complete the project.
 * also a dashboard is needed hence the authentication.
 */


import React from 'react'

import Navigation from '../components/navigation/Navigation'
import Hero from '../components/hero/Hero'
import Benifits from '../components/benefits/Benefits'
import CallToAction from '../components/call2action/CallToAction'
import Convert from '../components/convert/Convert'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <>
        <Navigation />
        <Hero />
        <Benifits />
        <CallToAction />
        <Convert />
        <Footer />
    </>
  )
}

export default Home
