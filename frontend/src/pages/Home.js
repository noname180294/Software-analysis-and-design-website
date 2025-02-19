import React from 'react'
import Navbar from '../components/Navbar'
import Aurora from '../utilities/Aurora/Aurora'
import SpotlightCard from '../utilities/SpotlightCard/SpotlightCard';
import SplitText from "../utilities/SplitText/SplitText";
import { FaDev } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import './styles/home.css'

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <Aurora
          colorStops={["#00A3FF", "#7B61FF", "#00FFC6"]}
          speed={0.5}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh' }}>
          <h1 style={{  color: 'white', fontSize: '4rem', fontWeight: 'bold'  }}><SplitText
              text="Welcome to FreeFireFiles!"
              className="text-2xl font-semibold text-center"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <h3 style={{  color: 'white', fontSize: '1rem'  }}>
            <SplitText
              text="An IT Freelance Platform"
              className="text-2xl font-semibold text-center"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h3>
        </div>
        
      </div>
      
      <div className="spotlight-container">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 208, 208, 0.5)">
            <FaDev size={50} color="#fff" />
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 208, 208, 0.5)">
            <HiBriefcase size={50} color="#fff"  />
        </SpotlightCard>
      </div>    
            
    </>
  )
}

export default Home
