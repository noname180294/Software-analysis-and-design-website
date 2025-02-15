import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCarousel from '../components/CustomCarousel';
import carousel_1 from '../assets/carousel/carousel_1.jpg'
import carousel_2 from '../assets/carousel/carousel_2.jpg'
import carousel_3 from '../assets/carousel/carousel_3.jpg'

const slidesData = [
  {
    image: carousel_1,
    heading: 'The Freedom of Freelance IT',
    text: 'Work on your own terms and choose projects that excite you.'
  },
  {
    image: carousel_2,
    heading: 'Building a Successful IT Career',
    text: 'Grow your skills, expand your network, and secure high-paying clients.'
  },
  {
    image: carousel_3,
    heading: ' Overcoming Challenges as a Freelancer',
    text: 'Manage time effectively, handle client expectations, and ensure steady income.'
  }
];

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <CustomCarousel slides={slidesData} interval={4000} />
      </div>
      <Footer />
    </>
  )
}

export default Home;
