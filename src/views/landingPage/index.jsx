import React from 'react'
//import './landingPage.css'
import Header from 'shared/header'
import Button from 'shared/button'
import HeroSection from 'components/heroSection'
import Subsectionhero from 'components/subHeroSection'
import InfoCard from 'components/infocard'
import OurExperience from 'components/OurExperience'
const LandingPage = () => {
  return (
    <div>
     <Header/>
    <Button/>
    <HeroSection/>
    <Subsectionhero/>
    <InfoCard/>
    <OurExperience/>

    </div>
  
  )
}

export default LandingPage