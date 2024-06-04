import React from 'react'
//import './landingPage.css'
import Header from 'shared/header'
import Button from 'shared/button'
import HeroSection from 'components/heroSection'
import Subsectionhero from 'components/subHeroSection'
import InfoCard from 'components/infocard'
import OurExperience from 'components/OurExperience'
import FindyourSpace from 'components/find your space'
import image  from "assets/image1.svg";
import guidemap from "assets/map.svg";
const LandingPage = () => {
  return (
    <div>
     <Header/>
    <Button/>
    <HeroSection/>
    <Subsectionhero/>
    <InfoCard title="Resida is not just an app" 
    subtitle="we are an ecosystem with you at the center"
    body="Resida aims to bridge the gap between potential tenants and 
        available properties. This app is not just a tool; it's a solution for 
         individuals and families who are navigating the challenging terrain 
        of apartment hunting in a new or familiar city."
        image={image}
        imageStyle={"info_image"}/>
        
    <OurExperience/>
    <FindyourSpace/>
    <InfoCard title="Comprehensive" 
    subtitle="Neighbourhood Guides"
    body="The 'Neighborhood Guides' in Resida are like your friendly local 
    experts, giving you the inside scoop on the vibe, hotspots, and
     quirks of each area so you can find your perfect match 
     effortlessly! 🏡✨"
        image={guidemap}
        imageStyle={"info_comprehensive"}/>

    </div>
  
  )
}

export default LandingPage