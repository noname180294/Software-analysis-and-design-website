import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aurora from '../utilities/Aurora/Aurora';
import SpotlightCard from '../utilities/SpotlightCard/SpotlightCard';
import SplitText from "../utilities/SplitText/SplitText";
import StarBorder from '../utilities/StarBorder/StarBorder';
import GradientText from '../utilities/GradientText/GradientText';
import { IoIosSearch } from "react-icons/io";
import { FaDev } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
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
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh' }}>
        <button 
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => {
            document.getElementById('spotlight')?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <StarBorder
            as="button"
            className="custom-class"
            color="#00A3FF"
            speed="5s"
          >
            Discover More
          </StarBorder>
        </button>
        </div>
      </div>

      <div>
        <div id='spotlight' className="spotlight-container">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <IoIosSearch size={30} color="#fff" />
            
            <h3 style={{ color: 'white', margin: '10px 0' }}>
              Connect with thousands of IT professionals
            </h3>
            
            <h5 style={{ color: 'white', marginBottom: '15px' }}>
              Find freelancers by skills, experience, and reviews. Get your projects done fast with the best expert!
            </h5>
            <div id='spotlight-button'>
            <Link to="/find-talent" className="text-decoration-none" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={true}
                className="custom-class"
              >
                Find Talent Now
              </GradientText>
            </Link>
            </div>
          </SpotlightCard>
        

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <HiBriefcase size={30} color="#fff"  />
            <h3 style={{ color: 'white', margin: '10px 0' }}>
              Create profile & start receiving projects
              </h3>
            
            <h5 style={{ color: 'white', marginBottom: '15px' }}>
              Register now, showcase your programming, design, AI, DevOps,... skills and connect with global customers.
            </h5>
            <div id='spotlight-button'>
              <Link to="/find-job" className="text-decoration-none" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={true}
                  className="custom-class"
                >
                  Find Job Now
                </GradientText>
              </Link>
            </div>
          </SpotlightCard>
          
        </div>    

        <div className="spotlight-container">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <BiWorld size={30} color="#fff" />
              <h3 style={{ color: 'white', margin: '10px 0' }}>
              Unlimited career opportunities
              </h3>
            
            <h5 style={{ color: 'white', marginBottom: '15px' }}>
            From programmers, UI/UX designers to data scientists – Thousands of new jobs posted every day!
            </h5>
            <div id='spotlight-button'>
              <Link to="/news" className="text-decoration-none" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={true}
                  className="custom-class"
                >
                  Read News
                </GradientText>
              </Link>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <FaDev size={30} color="#fff"  />
              <h3 style={{ color: 'white', margin: '10px 0' }}>
              Join the dynamic IT freelancer community
              </h3>
            
            <h5 style={{ color: 'white', marginBottom: '15px' }}>
            Learn from experts, get advice & stay updated with technology trends.
            </h5>
            <div id='spotlight-button'>
            <Link to="/register" className="text-decoration-none" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={true}
                className="custom-class"
              >
                Register Here
              </GradientText>
            </Link>
            </div>
          </SpotlightCard>
        </div>  
      </div>

    <Footer />              
    </>
  )
}

export default Home
