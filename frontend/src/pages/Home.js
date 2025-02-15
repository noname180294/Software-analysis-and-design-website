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
    heading: 'Tiêu đề Slide 1',
    text: 'Nội dung mô tả cho Slide 1.'
  },
  {
    image: carousel_2,
    heading: 'Tiêu đề Slide 2',
    text: 'Nội dung mô tả cho Slide 2.'
  },
  {
    image: carousel_3,
    heading: 'Tiêu đề Slide 3',
    text: 'Nội dung mô tả cho Slide 3.'
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
