import React from 'react';
import image1 from '../images/code1.jpeg';
import image2 from '../images/code2.jpg';
import image3 from '../images/code3.webp';
import image8 from '../images/AI.jpg'


import '../css/index2.css';

export default function index2() {
  return (
    <>
      <div className="container d-flex justify-content-between mt-4">
        <div className="card card3" style={{ "width": "18rem" }}>
          <img src={image1} className="card-img-top" />
          <div className="card-body">
          <div className="spinner-grow spinner-grow-sm bg-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            <h5 className="card-title text-danger">HTML</h5>
            <p className="card-text text-secondary ">HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it! Study our free HTML ...
            </p>
            <a href="#" className="btn btn-primary ">Learn HTML</a>
          </div>
        </div>
        <div className="card card3" style={{ "width": "18rem" }}>
          <img src={image2} className="card-img-top" />
          <div className="card-body">
          <div className="spinner-grow spinner-grow-sm bg-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            <h5 className="card-title text-warning">CSS</h5>
            <p className="card-text text-secondary">CSS(Cascading Style Sheet) is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. you will learn Css on Your Way. This tutorial will teach you CSS from basic to  ...</p>
            <a href="#" className="btn btn-success">Learn CSS</a>
          </div>
        </div>
        <div className="card card3" style={{ "width": "18rem" }}>
          <img src={image3} className="card-img-top" />
          <div className="card-body">
          <div className="spinner-grow spinner-grow-sm bg-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            <h5 className="card-title text-success">JavaScript</h5>
            <p className="card-text text-secondary">JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning ...</p>
            <a href="#" className="btn btn-danger">Learn Javascript</a>
          </div>
        </div>
        <div className="card card3" style={{ "width": "18rem" }}>
          <img src={image8} className="card-img-top" />
          <div className="card-body">
          <div className="spinner-grow spinner-grow-sm bg-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
            <h5 className="card-title text-primary">Artificial Intelligence</h5>
            <p className="card-text text-secondary">Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems, natural language processing, speech recognition and machine vision.</p>
            <a href="#" className="btn btn-warning text-light">Learn AI</a>
          </div>
        </div>
      </div> 
      
    </>

  )
}