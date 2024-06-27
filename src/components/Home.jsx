import React from 'react'
import vg from "../assets/2.webp"
import ig from "../assets/01.jpeg"
import t1 from "../assets/teacher 1.png"
import t2 from "../assets/teacher 2.png"
import t3 from "../assets/teacher 3.png"
import t4 from "../assets/teacher 4.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
function Home() {
  return (
    <>
    <div class="home" id="home">
      <main>
      <h1 style={{ 
        fontFamily: 'Arial, sans-serif', 
        color: 'white', 
        textAlign: 'center', 
        marginTop: '20px' 
      }}>
        NUCLEUS
      </h1>
      <p style={{ 
        fontFamily: 'Arial, sans-serif', 
        color: 'grey', 
        textAlign: 'center', 
        fontSize: '18px', 
        marginTop: '10px' 
      }}>
       We grow together!
       </p>
      </main>
    </div>

    <div className="home2">
    <img 
        src={ig} 
        alt="Graphics" 
        style={{ 
          borderRadius: '15px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          maxWidth: '100%',
          height: 'auto'
        }} 
      />
<div>
    <p>
    At Nucleus Coaching, we are dedicated to building the foundation for your success in JEE and NEET exams. Our expert faculty, with years of experience and proven track records, provide personalized attention and innovative teaching methods to help you grasp complex concepts with ease. Our comprehensive study materials, regular mock tests, and rigorous doubt-clearing sessions ensure you are well-prepared and confident on exam day. Join Nucleus Coaching and embark on a journey of academic excellence and success. We grow together!
    </p>
</div>
    </div>

<div className="home3" id="about">

<div>
    <h1>Who we are?</h1>
    <p>At Nucleus Coaching, we are dedicated to building the foundation for your success in JEE and NEET exams. Our expert faculty, with years of experience and proven track records, provide personalized attention and innovative teaching methods to help you grasp complex concepts with ease. Our students have consistently achieved top ranks, with many securing seats in prestigious IITs and medical colleges across the country. We offer comprehensive study materials, regular mock tests, and rigorous doubt-clearing sessions, ensuring you are well-prepared and confident on exam day. Nucleus Coaching is better because we combine quality education with a supportive learning environment, both in-person and online, making our courses accessible from anywhere. Join Nucleus Coaching and embark on a journey of academic excellence and success. Visit our website and go to the "Contact Us" section for further details and to enroll today. We grow together!

</p>
</div>

</div>

<div className="home4" id='brands'>

<div>
    <h1>Faculty</h1>
    <article>
        

        <div style={{
            animationDelay:"0.3s"
        }}>
            {/* <AiFillGoogleCircle /> */}
            <img 
        src={t1} 
        alt="Image" 
        style={{ 
          width: '185px',   // Adjust width as per your requirement
          height: '185px',  // Adjust height as per your requirement
          borderRadius: '50%',  // Makes the image round
          objectFit: 'cover'  // Ensures the image covers the defined space without stretching
        }} 
      />
            <p>Risha singh</p>
        </div>

        <div style={{
            animationDelay:"0.3s"
        }}>
            {/* <AiFillGoogleCircle /> */}
            <img 
        src={t2} 
        alt="Image" 
        style={{ 
          width: '185px',   // Adjust width as per your requirement
          height: '185px',  // Adjust height as per your requirement
          borderRadius: '50%',  // Makes the image round
          objectFit: 'cover'  // Ensures the image covers the defined space without stretching
        }} 
      />
            <p>Rupesh sir</p>
        </div>

        <div style={{
            animationDelay:"0.3s"
        }}>
            {/* <AiFillGoogleCircle /> */}
            <img 
        src={t3} 
        alt="Image" 
        style={{ 
          width: '185px',   // Adjust width as per your requirement
          height: '185px',  // Adjust height as per your requirement
          borderRadius: '50%',  // Makes the image round
          objectFit: 'cover'  // Ensures the image covers the defined space without stretching
        }} 
      />
            <p>Istiyak alam</p>
        </div>

        <div style={{
            animationDelay:"0.3s"
        }}>
            {/* <AiFillGoogleCircle /> */}
            <img 
        src={t4} 
        alt="Image" 
        style={{ 
          width: '185px',   // Adjust width as per your requirement
          height: '185px',  // Adjust height as per your requirement
          borderRadius: '50%',  // Makes the image round
          objectFit: 'cover'  // Ensures the image covers the defined space without stretching
        }} 
      />
            <p>Sakshi singh</p>
        </div>
        
    </article>
</div>

</div>


    </>
  )
}

export default Home;
