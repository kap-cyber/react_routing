import React from 'react';
import '../css/index2.css';
import image4 from '../images/img1.jpg';
import image5 from '../images/img2.jpg';
import image6 from '../images/img3.jpg';
import image7 from '../images/img4.jpg';
export default function Coding(){
    return(
        <>
<h1 className= "border border-2 border-dark mt-5 text-center w-75 mx-auto p-3 text-white bg-dark " > <span className='be'>Be</span>st  Wa< span className='y'>y</span> t<span className='o' >o</span> Le<span className='ar'>ar</span>n <span className='co'>Co</span>de</h1>

<div className="row row-cols-1 row-cols-md-2 g-4 size">
  <div className="col">
    <div className="card card1 ">
   
      
      <img src={image4} className="card-img-top card2" />
      <div className="card-body">
        <h5 className="card-title text-primary">Global Coding Conferences</h5>
        <p className="card-text text-secondary">Determine which coding language you will need to learn to achieve your goal or whether you want to learn multiple languages.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card1">
      <img src={image5} className="card-img-top card2" />
      <div className="card-body">
        <h5 className="card-title text-warning">Learn Designing</h5>
        <p className="card-text text-secondary">Apply creative solutions and behavior-change analysis to innovation development and internal team processes
          you will Learn Designing </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card1">
      <img src={image6} className="card-img-top card2" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-danger">Get Bootstrap Templates</h5>
        <p className="card-text text-secondary">
          Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card card1">
      <img src={image7} className="card-img-top card2" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-success">Learn Python Here</h5>
        <p className="card-text text-secondary">Whether  it's easy to learn and use Python  is a very popular general-purpose, and high-level programming language. Python is dynamically-typed and garbage ...
          </p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}