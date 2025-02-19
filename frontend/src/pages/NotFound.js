import React from 'react'
import FuzzyText from '../utilities/FuzzyText/FuzzyText'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh' }}>
        <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
        >
        404
    </FuzzyText>
    </div>
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '10vh' }}>
        <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
        >
        Page Not Found
    </FuzzyText>
    </div>
    </>
  )
}

export default NotFound