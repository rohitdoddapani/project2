import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Nav extends Component {
  render(){
    return (
        <div className="App">
        
            <div className="animationload">
              <div className="loader"></div>
            </div>
            
            <a href="#0" className="cd-top cd-is-visible cd-fade-out">Top</a>
              <div className="header header-1">

                <div className="topbar d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-sm-8 col-md-10 col-lg-9">
                      <div className="info">
                        <div className="info-item">
                          <i className="fa fa-phone"></i> +62 7144 3300
                        </div>
                        <div className="info-item">
                          <i className="fa fa-clock-o"></i> Mon - Sat : 08:00 - 17:00
                        </div>
                        <div className="info-item">
                          <i className="fa fa-map-marker"></i> 99 Park Jomblo, Pekanbaru
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-2 col-lg-3">
                      <div className="sosmed-icon pull-right d-inline-flex">
                        <a href="#"><i className="fa fa-facebook"></i></a> 
                        <a href="#"><i className="fa fa-twitter"></i></a> 
                        <a href="#"><i className="fa fa-instagram"></i></a> 
                        <a href="#"><i className="fa fa-linkedin"></i></a> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="navbar-main">
                <div className="container">
                    <nav id="navbar-example" className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                      <img src="images/logo.png" alt="" />
                    </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                    <Link className="nav-link" to="/" role="button" aria-haspopup="true" aria-expanded="false">
                                HOME
                              </Link>
                                </li>
                              <li className="nav-item">
                                    <Link className="nav-link" to="/about">ABOUT US</Link>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" href="services.html">SERVICES</a>
                                </li>
                              <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PAGES
                              </a>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="page-gallery.html">GALLERY</a>
                                      <a className="dropdown-item" href="page-testimonials.html">TESTIMONIALS</a>
                                  <a className="dropdown-item" href="page-faq.html">FAQ</a>
                                  <a className="dropdown-item" href="page-404.html">404 PAGE</a>
                                  <a className="dropdown-item" href="page-news.html">NEWS</a>
                                  <a className="dropdown-item" href="page-news-single.html">SINGLE NEWS</a>
                            </div>
                                </li>
                              <li className="nav-item">
                                    <Link className="nav-link" to="/contact">CONTACT US</Link>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-primary btn-nav ml-auto">GET MEMBERSHIP</a>
                        </div>
                    </nav>
                </div>
              </div>
            </div>
            </div>
    );
    }
}

export default Nav