// import React, { useEffect } from 'react';
import '../css/login.css';
import { useRef } from 'react';
import { useState } from 'react';

export default function Login() {

	const inp1 = useRef();
	const inp2 = useRef();





	const [showpassword, setShowpassword] = useState('password')
	const [visible, setVisible] = useState('fa-solid fa-eye-slash');
	const toggleshowpassword = () => {
		if (showpassword === "password") {
			setShowpassword("text");
			setVisible("fa-solid fa-eye");


		}
		else {

			setShowpassword("password");
			setVisible("fa-solid fa-eye-slash");


		}

	}

	const [hide, setHide] = useState('alert alert-danger alert-dismissible fade hide')


	function login() {

		if ((inp1.current.value === "")) {
			inp1.current.placeholder="Please Enter Username"
			setHide('alert alert-danger alert-dismissible fade show  amze');
			setTimeout(function () {
				setHide('alert alert-danger alert-dismissible fadeout');

			}, 3000)

		}
		else if (inp1.current.value !== "") {
			inp1.current.placeholder = "";
			inp1.current.style.border = "3px solid green";

		}
		if (inp2.current.value === "") {
			inp2.current.placeholder="Please Enter Password"
			setHide('alert alert-danger alert-dismissible fade show amze');
			setTimeout(function () {
				setHide('alert alert-danger alert-dismissible fadeout');

			}, 3000)



		}
		else if (inp2.current.value !== "") {
			inp2.current.value = "";
			inp2.current.style.border = "3px solid green";

		}
	}




	return (
		<>
			<div style={{ "marginBottom": "0px" }} className={hide}>
				<strong>Not Login</strong>__________Empty Field__________
				<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
			</div>
			<div className='diff'>
				<div className="container diff1">
					<div className="d-flex justify-content-center h-100">
						<div className="card diff2">
							<div className="card-header">
								<h3>Sign In</h3>
								<div className="d-flex justify-content-end social_icon">
									<span ><i className="fab fa-facebook-square"></i></span>
									<span><i className="fab fa-google-plus-square"></i></span>
									<span><i className="fab fa-twitter-square"></i></span>
								</div>
							</div>
							<div className="card-body">

								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-user diff7 mt-3"></i></span>
									</div>

									<input ref={inp1} type="text" required className="form-control diff5" placeholder="username" /><br />

								</div>

								<div className="input-group form-group">
									<div className="input-group-prepend ">
										<span style={{ "height": "50px" }} className="input-group-text "><i onClick={toggleshowpassword} className={visible} ></i></span>
									</div>
									<input ref={inp2} type={showpassword} required className="form-control diff6" placeholder="password" />
								</div>
								<div className="row align-items-center remember mt-4">
									<input type="checkbox" />Remember Me
								</div>

								<button onClick={login} className='btn float-right login_btn '>Login In</button>


							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
									Don't have an account?<a href=" ">Sign Up</a>
								</div>
								<div className="d-flex justify-content-center">
									<a href=" ">Forgot your password?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}