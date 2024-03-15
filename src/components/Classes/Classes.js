import React from 'react';

const Classes= () => {
  return (
    <>
    <div className="container mt-5 border p-4">
      <div className="row">
        {/* Video Section */}
        <div className="col-md-5">
          <div className="embed-responsive embed-responsive-16by9" >
            <iframe
            style={{ width: '100%', height: '50vh' }}
              className="embed-responsive-item"
              src="https://www.youtube.com/watch?v=zY38SV2BW7k&pp=ygURbmVldCBjcmFzaCBjb3Vyc2U%3D"
              title="Embedded YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Content Section */}
        <div className="col-md-7">
        <div className="card h-100 border-0">
<div className="card-body">
  <h5 className="card-title text-start">NEET Crash Course</h5>
  <p className="card-text text-start">
  The NEET Crash Course offers an intensive program designed to cover key topics, provide practice tests, and offer strategies for success in the NEET exam. This course is ideal for last-minute preparation or as a refresher course for those who have already studied but need additional guidance.       </p>
  <div className="d-flex justify-content-start pt-5">
    <button className="btn rounded-0 text-white" >PRACTICE</button>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5 border p-4">
      <div className="row">
        {/* Video Section */}
        <div className="col-md-5">
          <div className="embed-responsive embed-responsive-16by9" >
            <iframe
            style={{ width: '100%', height: '50vh' }}
              className="embed-responsive-item"
              src="https://www.youtube.com/watch?v=VKBAlBYPGWE&ab_channel=NEETAdda247"
              title="Embedded YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Content Section */}
        <div className="col-md-7">
        <div className="card h-100 border-0">
<div className="card-body">
  <h5 className="card-title text-start">NEET Revision Workshops</h5>
  <p className="card-text text-start">
  "NEET Revision Workshops are interactive sessions designed to help students revise key topics and concepts in preparation for the NEET exam. Led by experienced instructors, these workshops cover important subject areas, address common challenges, and provide effective study strategies to boost students' confidence and performance in the exam.      </p>
  <div className="d-flex justify-content-start pt-5">
    <button className="btn rounded-0 text-white" >PRACTICE</button>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="container mt-5 rounded-0" aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          <li className="page-item" ><button className="page-link border-0 fw-semibold" style={{color:"black"}}>1</button></li>
          <li className="page-item" ><button className="page-link border-0 fw-semibold" style={{color:"black"}}>2</button></li>
          <li className="page-item "><button className="page-link border-0 fw-semibold" style={{color:"black"}}>3</button></li>
          <li className="page-item "><button className="page-link border-0 fw-semibold" style={{color:"black"}}>4</button></li>
          <li className="page-item "><button className="page-link border-0 fw-semibold" style={{color:"black"}}>5</button></li>
          </ul>
      </nav>
    </>
  );
};

export default Classes;
