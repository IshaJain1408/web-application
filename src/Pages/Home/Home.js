import React from 'react';
import './Home.css';
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import CardCarousel from './CardCarousel';
import Reviews from './Reviews';
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active rounded-circle bg-secondary" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="rounded-circle bg-secondary" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="rounded-circle bg-secondary" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 p-3 img-fluid" style={{ height: '85vh', objectFit: "cover", filter: "brightness(40%)" }} alt="..." />
            <div className="carousel-caption ">
              <h1>NEET Courses</h1>
              <p>Explore our latest NEET courses to excel in your medical entrance exams.</p>
              <button className="btn rounded-0 text-white">View Courses</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 p-3 img-fluid" style={{ height: '85vh', objectFit: "cover", filter: "brightness(40%)" }} alt="..." />
            <div className="carousel-caption ">
              <h1>Physics for NEET</h1>
              <p>Master physics concepts with our specialized NEET Physics course.</p>
              <button className="btn rounded-0 text-white">Enroll Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 p-3 img-fluid" style={{ height: '85vh', objectFit: "cover", filter: "brightness(40%)" }} alt="..." />
            <div className="carousel-caption ">
              <h1>Biology Crash Course</h1>
              <p>Join our intensive Biology Crash Course to boost your NEET preparation.</p>
              <button className="btn rounded-0 text-white">Learn More</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <CardCarousel />
      <Reviews />
      <Footer />
    </>
  )
}

export default Home;
