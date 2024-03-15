import React from 'react';
import jsonData from '../Data/Data';
import './Home.css'

function Reviews() {
    const chunkedData = jsonData.reduce((acc, curr, i) => {
        if (i % 4 === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
      }, []);
       
  return (
    <div className='p-3'>
      <h5 className="mt-4 mb-4 heading text-center">Reviews</h5>
      <div className="carousel-inner">
        {chunkedData.map((chunk, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="row cards-wrapper justify-content-center">
              {chunk.map((student, studentIndex) => (
                <div className="col-md-3 col-sm-6 col-12 p-4" key={studentIndex}>
                  <div className="card rounded-0 h-100">
                    <div className="card-body">
                      <h5 className="card-title text-start">{student.name}</h5>
                      <hr/>
                      <p className="card-text text-start">{student.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
