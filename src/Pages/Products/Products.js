import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; 
import design from '../../assets/images/design.png';
import design1 from '../../assets/images/design1.png';

const Products = () => {
  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  return (
    <>  
      <div className="input-group p-3">
        <span className="input-group-text border-right-0 rounded-0"><FaSearch /></span>
        <input type="text" className="form-control rounded-0 bg-gray p-2" style={{ borderLeft: "0px", borderRight: "0px", background: "#f8f9fa" }} aria-label="Search Products" />
        <span className="input-group-text border-right-0 rounded-0"><FaFilter /></span>
      </div>
      <div className="container">
        <div className="row border-bottom p-4">
          {/* Image Section */}
          <div className="col-lg-5 col-md-12 mb-3 mb-lg-0">
            <img src={design} className="img-fluid" alt="Product" />
          </div>
          {/* Product Details Section */}
          <div className="col-lg-7 col-md-12">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-start">NEET Crash Course</h5>
                <p className="card-text text-start">
                  Offer an intensive crash course designed to cover key topics, provide practice tests, and offer strategies for success in the NEET exam. This could be a time-bound course aimed at last-minute preparation or as a refresher course for those who have already studied but need additional guidance.
                </p>
                <p className="card-text text-start fw-semibold fs-4">₹2000</p>
                {/* Add to Cart Button */}
                <div className="d-flex justify-content-start">
                  <button className="btn rounded-0 text-white" style={{ background: "black" }} onClick={handleAddToCart}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-bottom p-4">
          {/* Image Section */}
          <div className="col-lg-5 col-md-12 mb-3 mb-lg-0">
            <img src={design1} className="img-fluid" alt="Product" />
          </div>
          {/* Product Details Section */}
          <div className="col-lg-7 col-md-12">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h5 className="card-title text-start">NEET Practice Apps</h5>
                <p className="card-text text-start">
                  Develop mobile apps or provide access to existing NEET practice apps that offer a variety of practice questions, quizzes, flashcards, and other interactive learning tools. These apps can be accessed on smartphones and tablets, allowing students to study anytime, anywhere.
                </p>
                <p className="card-text text-start fw-semibold fs-4">₹1500</p>
                {/* Add to Cart Button */}
                <div className="d-flex justify-content-start">
                  <button className="btn rounded-0 text-white" style={{ background: "black" }} onClick={handleAddToCart}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

