import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className='menu-main'>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title={props.title}>
            <img src='https://themazine.com/html/snappy/images/logo/logo.png' alt='logo' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">{props.LinkText}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="TextForm">TextForm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="DataForms">Forms</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">{props.NavNumber}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}

      <div className='layout'>
        <div className='menu-inner'>
          <div className='logo-part'>
            <Link className="navbar-brand" to="/">
              <img src='https://themazine.com/html/snappy/images/logo/logo2.png' alt='logo' />
            </Link>
          </div>
          <div className='menu-part'>
            <ul className="flex">
                <li className="">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="CrudOpration">Services</Link>
                </li>
                <li className="">
                <Link className="nav-link" to="Blog">Blog</Link>
                </li>
                <li className="">
                  <Link className="nav-link" to="Contact">Contact Us</Link>
                </li>              
              </ul>
          </div>
        </div>        
      </div>
    </div>
  )
}

Navbar.propTypes = {
    // title: PropTypes.string.isRequired,
    title: PropTypes.string,
    LinkText: PropTypes.string,
    NavNumber: PropTypes.number
} 

// default props passs
Navbar.defaultProps = {
    title: 'Set title here',
    LinkText: 'Link text here',
    NavNumber: 1
}
