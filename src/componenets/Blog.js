import React from "react";
import image1 from '../images/about1.jpg'
import image2 from '../images/about2.jpg'
import image3 from '../images/about3.jpg'
export default function Blog(){
    return(
    <>
    
    <div  className="container my-4 ">
        <div style={{"marginTop":"85px"}} className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading text-danger">
                    Let's start with iCoder...
                    <span className="text-muted">It’ll blow your mind.</span>
                </h2>
                <p className="lead ">
                Computer and information technology jobs are growing incredibly fast in the United States and across the globe. You don't need a Computer Science degree;there are more and more high-paying jobs emerging every day for newer learners like you.
                </p>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={image1} alt=""/>
            </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                    It's all started in 2023...
                    <span className="text-success">It’ll blow your mind.</span>
                </h2>
                <p className="lead">
                Have you ever met a coder who regretted learning to code? Probably not, because learning to code is fun and empowering! Coding also opens up a whole new community and network for you. In fact, we've heard the term "addictive" regularly.
                </p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="img-fluid" src={image2} alt=""/>
            </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading text-primary">
                    Blog all about recent technologies, trends...
                    <span className="text-muted">It’ll blow your mind.</span>
                </h2>
                <p className="lead">
                Ever wanted to make an app or a website? Code does that. It can also help you automate a spreadsheet or create new tools for your community. Learning to code makes it possible to imagine the things you want to make and actually build them.
                </p>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={image3} alt=""/>
            </div>
        </div>
    </div>
    </>
    )
}