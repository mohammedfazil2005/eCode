import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg container">
  <div class="container-fluid">
    <Link class="navbar-brand" id='logo-png' to={'/'}>E-CODE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
          <li class="nav-item">
          <Link class="nav-link nav-link-tag" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link nav-link-tag" to={'/patterns'}>Resources</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        {/* <button class="btn btn-nav" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
