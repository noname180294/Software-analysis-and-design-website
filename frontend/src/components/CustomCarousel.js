import React, { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';

const CustomCarousel = ({ slides, interval = 3000 }) => {
  const carouselRef = useRef(null);
  const carouselInstance = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselInstance.current = new Carousel(carouselRef.current, {
        interval: interval,
        ride: 'carousel'
      });
    }
  }, [interval]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div id="customCarousel" className="carousel slide " ref={carouselRef} style={{ width: '1600px' }}>
        
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.heading}
                style={{
                  width: "600px",
                  height: "660px",
                  objectFit: "cover"
                }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.heading}</h5>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
