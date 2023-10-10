import React from 'react';
import image1 from '../images/icoder1.jpg';
import image2 from '../images/icoder2.jpg';
import image3 from '../images/icoder3.jpg';
import '../css/big.css';

export default function Big() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide   mx-auto mt-5 " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 main " />
            <div className="carousel-caption d-none d-md-block">
              <h3 >Welcome to web Developement</h3>
              <h6> It's refers to creating and building.  web applications that run online on a browser.</h6>
              <button type="button" className="btn btn-danger btn1 ">Technology</button>
              <button type="button" className="btn btn-primary btn2 ">Web Developement</button>
              <button type="button" className="btn btn-success">Tech Fun</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 main " />
            <div className="carousel-caption d-none d-md-block">
              <h3>Award Winning Blog</h3>
              <h6>Yes is an award-winning blog created by Kapil in 2023..</h6>
              <button type="button" className="btn btn-danger btn1 ">Technology</button>
              <button type="button" className="btn btn-primary btn2 ">Web Developement</button>
              <button type="button" className="btn btn-success">Tech Fun</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 main " />
            <div className="carousel-caption d-none d-md-block">
              <h3>Welcome to I coder</h3>
              <h6 >Technology news, Development and Trends.</h6>
              <button type="button" className="btn btn-danger btn1">Technology</button>
              <button type="button" className="btn btn-primary btn2">Web Developement</button>
              <button type="button" className="btn btn-success ">Tech Fun</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>


  )
}