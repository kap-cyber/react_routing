import React from 'react';
import '../css/signup.css';
import { useRef,useState } from 'react';
export default function SignUp() {
  const inp1=useRef();
  const inp2=useRef();
  const inp3=useRef();
  const inp4=useRef();
  const inp5=useRef();
  const inp6=useRef();
  const inp7=useRef();
  function validateEmailAddress(input) {
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(input)) {
        return 1;
    } else {
        return -1;
    }
}
  
  const[hide,setHide]=useState('alert alert-danger alert-dismissible fade hide')
  const main=()=>{
      if(inp1.current.value===""){
        inp1.current.placeholder="Enter Your First Name*"
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      }
      else{
        inp1.current.style.border="1px solid green";
        
      }
      if(inp2.current.value===""){
        inp2.current.placeholder="Enter Your Last Name*"
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      }
      else{
        inp2.current.style.border="1px solid green";
        
      }
      if(inp3.current.value===""){
        
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      }
      else{
        inp3.current.style.border="1px solid green";
        
      }
      if(inp4.current.value===""){
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      } 
      else{
        inp4.current.style.border="1px solid green";
        
      }
      if(inp5.current.value===""){
        inp5.current.placeholder="Enter Your Email*"
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      } 
      else{
        inp5.current.style.border="1px solid green";
        
      }
      if(inp6.current.value===""){
        inp6.current.placeholder="Enter Your Phone No.*"
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      } 
      else{
        inp6.current.style.border="1px solid green";
        
      }
      if(inp7.current.value===""){
        inp7.current.placeholder="Please Suggest Your Answer*"
        setHide('alert alert-danger alert-dismissible fade show  w-25 amze');
        setTimeout(function(){
         setHide('alert alert-danger alert-dismissible fadeout w-25');
         
        },3000)
      } 
      else{
        inp7.current.style.border="1px solid green";
        
      }
      
      if((inp3.current.value==="")&&(inp4.current.value==="")){
       inp3.current.placeholder="Password not valid*";
       inp4.current.placeholder="Password not valid*";

      }
      else{
        inp3.current.placeholder="Password valid*";
       inp4.current.placeholder="Password valid*";
      }
      
  }
  return (
    <>
    <div style={{"marginBottom":"0px"}}   className={hide}>
					<strong>Not Register</strong>__________ Empty Field__________
					<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
			</div>
      <div classNameName='sign'>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>You are 30 seconds away from earning your own money!</p>
              <input onClick={()=>{main()}}  type="submit" name="" value="Login" /><br />
            </div>
            <div className="col-md-9 register-right">
              <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Achieve</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Goal</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3 className="register-heading">Register Here</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input ref={inp1} type="text" className="form-control mb-2" placeholder="First Name *"  />
                        
                      </div>
                      <div className="form-group">
                        <input ref={inp2} type="text" className="form-control mb-2" placeholder="Last Name *" />
                      </div>
                      <div className="form-group">
                        <input ref={inp3} type="password" className="form-control mb-2" placeholder="Password *"/>
                      </div>
                      <div className="form-group">
                        <input ref={inp4} type="password" className="form-control mb-4" placeholder="Confirm Password *" />
                      </div>
                      <div className="form-group">
                        <div className="maxl">
                          <label className="radio inline">
                            <input type="radio" name="gender" value="male" checked />
                            <span> Male </span>
                          </label>
                          <label className="radio inline">
                            <input type="radio" name="gender" value="female" />
                            <span>Female </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input ref={inp5} type="email" onChange={()=>{validateEmailAddress()}} className="form-control mb-2" placeholder="Your Email *"  />
                      </div>
                      <div className="form-group">
                        <input ref={inp6} type="number" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control mb-2" placeholder="Your Phone *"  />
                      </div>
                      <div className="form-group">
                        <select className="form-control mb-2">
                          <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                          <option>What is your Birthdate?</option>
                          <option>What is Your old Phone Number</option>
                          <option>What is your Pet Name?</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input ref={inp7} type="text" className="form-control" placeholder="Enter Your Answer *"/>
                      </div>
                      <input type="submit" className="btnRegister" value="Register" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <h3 className="register-heading">Apply as a Hirer</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name *" value="" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name *" value="" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email *" value="" />
                      </div>
                      <div className="form-group">
                        <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                      </div>


                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password *" value="" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                      </div>
                      <div className="form-group">
                        <select className="form-control">
                          <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                          <option>What is your Birthdate?</option>
                          <option>What is Your old Phone Number</option>
                          <option>What is your Pet Name?</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="`Answer *" value="" />
                      </div>
                      <input  type="submit" class="btnRegister" value="Register"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


    </>



  )
}