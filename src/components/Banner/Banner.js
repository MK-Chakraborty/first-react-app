import React from 'react';
import './Banner.css'
import bannerImg1 from './images/undraw_medical_care_movn.png'
import bannerImg2 from './images/undraw_medicine_b1ol.png'

const Banner = () => {
    return (
        <div className='container-fluid'>
            <div className="container py-5">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerImg1} className="d-block w-75 mx-auto banImg" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImg2} className="d-block w-75 mx-auto banImg" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;