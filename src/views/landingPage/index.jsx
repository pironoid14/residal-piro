import React from 'react'
//import './landingPage.css'
import Header from 'shared/header'
import Button from 'shared/button'
import HeroSection from 'components/heroSection'
import Subsectionhero from 'components/subHeroSection'
import InfoCard from 'components/infocard'
const LandingPage = () => {
  return (
    <div>
     <Header/>
    <Button/>
    <HeroSection/>
    <Subsectionhero/>
    <InfoCard/>

    </div>
  
  )
}

export default LandingPage