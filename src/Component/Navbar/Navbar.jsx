import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function Navbar() {
  const [navbar,setNavbar]=useState(false);
  const changeBackground = ()=>{
    if (window.scrollY>=80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)
  return (
    <>
<nav className={navbar ? 'navbar active navbar-expand-lg  fixed-top ps-5':' navbar navbar-expand-lg  fixed-top ps-5'}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='' >START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  pe-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </>
  )
}

