import React from 'react';
import {Carousel} from "react-responsive-carousel";
// import img1 from "../assets/3.jpg";
// import img2 from "../assets/4.jpg";
import i1 from "../assets/10.png"
import i2 from "../assets/20.png"
import i3 from "../assets/30.png"
import i4 from "../assets/40.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = {
  width: '100vw',  // 100% of viewport width
  height: '90vh', // 100% of viewport height
  objectFit: 'contain', // Ensures the image covers the entire area without stretching
};

const Services = () => {
  return (
    <div className='services'>
    <Carousel infiniteLoop autoPlay showStatus={false} interval={3000}
    showThumbs={false}
    >
    <div>
      <img src={i1}  style={styles} alt="item1" />
      
      </div>
    <div>
      <img src={i2} style={styles}alt="item2" />
      
      </div>
    <div>
      <img src={i3} style={styles} alt="item1" />
      
      </div>
    <div>
      <img src={i4} style={styles} alt="item2" />
      
      </div>
</Carousel>

    </div>

  )
}

export default Services
