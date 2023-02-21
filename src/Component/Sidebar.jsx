import React, { useEffect } from 'react'
import '../CSS/sidebar.css'

function Sidebar() {
  useEffect (()=>{
    
  },[])
  return (
   <>
  <div className="b-example-divider b-example-vr " />
  <div className="d-flex flex-column flex-shrink-0  bg-light" id='sidebar'>
    <ul className="nav nav-pills flex-column mb-auto fs-4">
      <li className="nav-item mt-4">
        <a href="#" className="nav-link link-dark" aria-current="page">
          <i class="fa fa-home bi pe-none me-4" aria-hidden="true"></i>
          OVERVIEW
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <i class="fa fa-filter bi pe-none me-4" aria-hidden="true"></i>

          FUNNELS
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <i class="fa fa-book bi pe-none me-4" aria-hidden="true"></i>

          MERCHANTS
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <i class="fa fa-line-chart bi pe-none me-4" aria-hidden="true"></i>

          REPORTS
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <i class="fa fa-pie-chart bi pe-none me-4" aria-hidden="true"></i>
          CAMPAIGN
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <i class="fa fa-calculator bi pe-none me-4" aria-hidden="true"></i>
          CALCULATOR
        </a>
      </li>
    </ul>
    
    <div className="dropdown">
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>


 
</>

  )
}

export default Sidebar