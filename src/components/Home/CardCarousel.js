
import React from 'react';
import jsonData from '../Data/Data';
import './Home.css';

function CardCarousel() {
    let chunkedData;
    chunkedData = jsonData.reduce((acc, curr, i) => {
        if (i % 4 === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
    }, []);

    return (
        <div className='p-3'>
            <h5 className="mt-4 mb-4 heading text-center">Top Students</h5>
            <div className="carousel-inner">
                {chunkedData.map((chunk, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row cards-wrapper justify-content-center">
                            {chunk.map((student) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={student.id}>
                                    <div className="card rounded-0 h-100">
                                        <div className='img-wrapper'>
                                            <img src={student.image} className="card-img-top rounded-0 hover-zoom" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-start">{student.name}</h5>
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

export default CardCarousel;

