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
import house from "assets/houseloan.svg";
import Discover from 'components/discover';
import office from "assets/office.svg"
import FindHomes from 'components/find homes'
//import FeaturedProperties from 'components/featuredProperties'
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
        imageStyle={"info_image"}
        noButton={true}
        infoStyle={"info"}/>
       
    <OurExperience/>
    <FindyourSpace/>
    <InfoCard title="Comprehensive" 
    subtitle="Neighbourhood Guides"
    body="The 'Neighborhood Guides' in Resida are like your friendly local 
    experts, giving you the inside scoop on the vibe, hotspots, and
     quirks of each area so you can find your perfect match 
     effortlessly! 🏡✨"
        image={guidemap}
        imageStyle={"info_comprehensive"}
        button={true}
        infoStyle={"info_guide"}
        />


<InfoCard title="Do you have a property?" 
    subtitle="Provide accommodation
    here in Lagos"
    body="Own a property in Lagos? Join our platform to effortlessly list your 
    accommodations and connect with eager tenants seeking their
     perfect home in the vibrant city of Lagos."
        image={house}
        imageHeight={"info_comprehensive_houseHeight"}
        imageStyle={"info_comprehensive"}
        button={true}
        infoStyle={"info_guide"}
        circle={true}
        circleStyletitle
        circleStylesubtitle
        reverse

       
        />
        <FindHomes/>
      <Discover/>
      <InfoCard title="Need an office space?" 
    body="Seeking office space in Lagos? Look no further! Our accommodations 
    offer tailored solutions to meet your workspace needs, ensuring
     productivity and comfort in the heart of Lagos"
        image={office}
        imageStyle={"info_image"}
        noButton={true}
        infoStyle={"info"}/>
      
    </div>
  
  )
}

export default LandingPage