import React from 'react';
import '../css/about.css';
// import image1 from '../images/mi1.avif';
// import image2 from '../images/mi2.avif';
// import image3 from '../images/mi3.avif';
// import image4 from '../images/mi4.avif';
// import image5 from '../images/mi5.avif';
// import image6 from '../images/mi6.avif';

export default function About() {
  return (
    <>
     <section className="about-section">
	     <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 about-text">
                    <div className="section-heading space-overflow">
                        <h1 className="section-title"> <span>  About Us  </span> </h1>
                    </div>
					<div className="space-t-40 space-b-40">
						<p><span style={{"fontSize":"30px"}}>W</span>hether you're looking for dining recommendations, ordering groceries, reading your favorite blog, or shopping for holiday gifts, the internet is the first place we turn to for information and convenience. Naturally, the best companies are positioned to catch a potential customer's attention well before they ever walk through the door with a professional and seamless website.. </p>
					</div>
					<a className="custom-btn-nav" href=" ">  READ MORE </a>
				</div>
  
                <div className="col-lg-8 col-md-12 about_img space-60 p-0">
                 	<div className="about-image-box">
					  <div className="shape-1"></div>
					  <div className="shape-2"></div>
					  <div className="about-iiner-image-box">
						<div className="layout-33"></div>
					  </div>
					  <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"/>
					</div>
                </div>
            </div>
        </div>
	  </section>
    </>
  )
}