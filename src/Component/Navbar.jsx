import React from 'react'
import logo from '../Images/Cart.png'
import '../CSS/navbar.css'

function Navbar() {
  return (
    <div>
      <div className="container-fluid border-bottom">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary fs-2">
              <div className="container-fluid">
                <a className="navbar-brand fs-1" href="#">Navbar</a>
                <input className="form-control ms-5 w-25 d-sm-block " id='Search-btn' type="search" placeholder="Search" aria-label="Search" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    </li>
                  </ul>
                  <form className="d-flex me-4  d-none d-lg-block " role="search">
                    <img src={logo} height={30} alt="logo" />
                  </form>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar