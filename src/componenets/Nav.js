import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar bg-dark fixed-top">
        <div className="container-fluid ">
          <div className="spinner-grow spinner-grow-sm  bg-danger m-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <Link className="navbar-brand text-danger" to="/">I Coder</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Home</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>

              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/blog">Blog</Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* <div className="spinner-grow spinner-grow-sm  bg-light m-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> */}
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

              <button style={{ "margin-Right": "10px" }} className="btn btn-outline-light" type="submit">Search</button>
              <Link to="/login" style={{ "margin-right": "10px", "marginLeft": "10px" }} className="btn btn-danger w-50 " >Login</Link>
              <Link className="btn btn-danger w-50 " type="submit" to='/signup'>SignUp</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}