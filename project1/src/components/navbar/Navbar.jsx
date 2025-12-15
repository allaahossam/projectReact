import React from 'react'

import { Link , NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" >
  <div className="container">
    <NavLink className="navbar-brand text-white fw-bold fs-3" to="/Start">START FRAMEWORK</NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold mx-3" to="/About"> ABOUT</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold mx-3" to="/Portfolio">PORTFOLIO</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold mx-3" to="/Contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
