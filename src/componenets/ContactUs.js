import React, { useState } from "react";
import '../css/contactus.css';
export default function ContactUs(){
    const[text,setText]=useState('');
    const uppercase=()=>{
    const    newtext=text.toUpperCase()
        setText(newtext);

    }
    const lowercase=()=>{
        const newtext=text.toLowerCase()
        setText(newtext);
    }
    const handleonchange=(event)=>{
           setText(event.target.value)
    }
    
    
    
    return(
        <div className="amazing w100 py-3">
        <div className="container contact-form ">
        <div className="contact-image">
            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
        </div>
        
            <h3>Drop Us a Message</h3>
           <div className="row ">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <input type="text" name="txtName" className="form-control" placeholder="Your Name *"  />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text"   name="txtEmail" className="form-control" placeholder="Your Email *"  />
                    </div>
                    <div className="form-group mb-3">
                        <input type="number" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit"  name="btnSubmit" className="btnContact"  />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <h4 style={{"marginTop":"-45px"}}>Enter Text Below</h4>
                        <textarea  name="txtMsg" value={text} onChange={handleonchange}  className="form-control mb-4" placeholder="Your Message *" style={{"width": "100%","height": "150px"}}></textarea>
                        <button onClick={uppercase}   className="btn btn-primary mx-1">Click to Uppercase</button>
                        <button onClick={lowercase} className="btn btn-primary">Click to lowercase</button>
                        <p className="mt-2">{ text.split(" ").length} words and {text.length} Character</p>
                        <p>Text Summary</p>
                        <p>{text.split('')}</p>
                    </div>
                </div>
            </div>
        
</div>
</div>








    )
}