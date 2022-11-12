import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-darkBlue ps-5 fw-bold fixed-top">
  <div className="container">
    <Link className="navbar-brand text-light ms-5 fs-2 " to='/'>START REACT
    </Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation ">
      <span className=" bg-green w-100 h-100 text-light py-1 px-1 rounded">Menu</span>
    </button>
    <div className="collapse navbar-collapse text-left justify-content-end me-5" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link text-light p-3 m-1 active-nav":"nav-link  text-light p-3 m-1"}  to='Portfolio'>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link text-light p-3 m-1 active-nav":"nav-link  text-light p-3 m-1"} to='About'>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link text-light p-3 m-1 active-nav":"nav-link  text-light p-3 m-1"} to='Contact'>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
