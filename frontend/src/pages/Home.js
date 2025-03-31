import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularJobs from '../components/PopularJob';

import Aurora from '../utilities/Aurora/Aurora';
import SpotlightCard from '../utilities/SpotlightCard/SpotlightCard';
import SplitText from "../utilities/SplitText/SplitText";
import StarBorder from '../utilities/StarBorder/StarBorder';
import GradientText from '../utilities/GradientText/GradientText';

import { IoIosSearch } from "react-icons/io";
import { FaDev } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";

import './styles/home.css';

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("https://itplatform.onrender.com/api")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("❌ Lỗi lấy danh sách khách hàng:", error);
      });
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');  
  };

  return (
    <>
      <Navbar />
      
      {/* 🌌 Background Aurora */}
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

        {/* 🌟 Welcome Section */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh' }}>
          <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: 'bold' }}>
            <SplitText
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
          <h3 style={{ color: 'white', fontSize: '1rem' }}>
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

        {/* 🔻 Discover More Button */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20vh' }}>
          <button 
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => {
              document.getElementById('spotlight')?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <StarBorder as="button" className="custom-class" color="#00A3FF" speed="5s">
              Discover More
            </StarBorder>
          </button>
        </div>
      </div>

      {/* 🎯 Why FreeFireFiles */}
      <div>
        <h1 className='text-center mb-4' style={{color: '#fff'}}>Why FreeFireFiles</h1>
        
        <div id='spotlight' className="spotlight-container">
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <IoIosSearch size={30} color="#fff" />
            <h3 style={{ color: 'white' }}>Connect with IT professionals</h3>
            <h5 style={{ color: 'white' }}>Find freelancers by skills, experience, and reviews.</h5>
            <Link to="/find-talent">
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3}>
                Find Talent Now
              </GradientText>
            </Link>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <HiBriefcase size={30} color="#fff" />
            <h3 style={{ color: 'white' }}>Create profile & receive projects</h3>
            <h5 style={{ color: 'white' }}>Showcase your skills and connect globally.</h5>
            <Link to="/find-job">
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3}>
                Find Job Now
              </GradientText>
            </Link>
          </SpotlightCard>
        </div>    

        <div className="spotlight-container">
          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <BiWorld size={30} color="#fff" />
            <h3 style={{ color: 'white' }}>Unlimited career opportunities</h3>
            <h5 style={{ color: 'white' }}>Thousands of jobs posted every day.</h5>
            <Link to="/news">
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3}>
                Read News
              </GradientText>
            </Link>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
            <FaDev size={30} color="#fff" />
            <h3 style={{ color: 'white' }}>Join the IT freelancer community</h3>
            <h5 style={{ color: 'white' }}>Learn from experts and stay updated.</h5>
            <Link to="/register">
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3}>
                Register Here
              </GradientText>
            </Link>
          </SpotlightCard>
        </div>  
      </div>

      {/* 🔥 Popular Jobs Section */}
      <PopularJobs />

      {/* 📜 Danh sách khách hàng */}
      <div style={{ padding: '2rem', backgroundColor: '#222', color: '#fff', borderRadius: '10px', margin: '2rem auto', width: '80%' }}>
        <h2>Danh sách khách hàng</h2>
        <ul>
          {clients.map((client) => (
            <li key={client.clientID}>
              <strong>{client.name}</strong> - {client.field} - 📞 {client.phoneNumber}
            </li>
          ))}
        </ul>
      </div>

      {/* 🌙 Footer */}
      <Footer />              
    </>
  );
};

export default Home;
