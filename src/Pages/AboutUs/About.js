import React from 'react';
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
const About = () => {
  return (
    <div className="container mt-5  p-4">
    {/* First Row */}
    <div className="row border p-4 ">
      {/* Image Section */}
      <div className="col-md-5 order-md-1 order-2 ">
        <img src={banner2}  className="img-fluid" alt="About Us" />
      </div>
      {/* About Section */}
      <div className="col-md-7 order-md-2 order-1">
        <div className="card h-100 rounded-0 border-0">
          <div className="card-body">
            <p className="card-text text-start">
            Karo Abhayas is an edu-tech company based in electronic city which specializes in helping students crack the NEET exam. We are dedicated to providing high-quality education resources and personalized learning experiences to our students. With a team of experienced educators and a comprehensive curriculum, we strive to equip students with the knowledge and skills they need to succeed. Our mission is to empower students to achieve their academic goals and pursue their dreams. Join Karo Abhayas and embark on a journey to academic excellence!
            </p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Second Row */}
    <div className="row mt-5 border p-4 ">
      {/* Image Section */}
      <div className="col-md-7">
        <div className="card h-100 rounded-0 border-0">
          <div className="card-body">
            <p className="card-text text-start">
            Karo Abhayas is a leading education provider dedicated to helping students achieve their academic goals. With a team of experienced educators and a comprehensive curriculum, we offer personalized learning experiences tailored to each student's needs. Our mission is to empower students to succeed in their studies and unlock their full potential. Whether preparing for exams or mastering new skills, Karo Abhayas provides the resources and support students need to excel. Join us on the journey to academic success!
            </p>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="col-md-5 pb-2">
      <img src={banner1} className="img-fluid" alt="About Us" />

       
      </div>
    </div>
  </div>
  
  );
};

export default About;
