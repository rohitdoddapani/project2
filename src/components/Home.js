import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Testimonials from './Testimonials';

class Home extends Component {
  render(){
    return (
        <React.Fragment>
        <Router>
        <div className="App">
        
            <div className="animationload">
              <div className="loader"></div>
            </div>
            

              <div id="oc-fullslider" className="banner">
                <div className="owl-carousel owl-stage owl-theme full-screen" style={{height:'650px'}}>
                  <div className="item">
                      <img src="images/dummy-img-1920x900.jpg" alt="Slider" />
                      <div className="overlay-bg"></div>
                      <div className="container d-flex align-items-center text-center">
                          <div className="wrap-caption">
                              <p className="caption-supheading">The Best Landscaping in Pekanbaru</p>
                              <h1 className="caption-heading">We Are Gaco Landscaping</h1>
                              <p>Alluri seeta rama raju spices and horticulture producer company limited</p>
                              <a href="#" className="btn btn-secondary">MORE ABOUT US</a> 
                          </div>  
                        </div>
                  </div>
                  <div className="item">
                        <img src="images/dummy-img-1920x900-2.jpg" alt="Slider" />
                        <div className="overlay-bg"></div>
                        <div className="container d-flex align-items-center text-center">
                          <div className="wrap-caption">
                            <p className="caption-supheading">The Best Landscaping in Pekanbaru</p>
                              <h1 className="caption-heading">Landscaping & Gardening</h1>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                              <a href="#" className="btn btn-secondary">MORE ABOUT US</a> <a href="#" className="btn btn-primary">HIRE US NOW</a>
                          </div>  
                        </div>
                    </div> 
                  <div className="item">
                        <img src="images/dummy-img-1920x900-3.jpg" alt="Slider" />
                        <div className="overlay-bg"></div>
                        <div className="container d-flex align-items-center text-center">
                          <div className="wrap-caption">
                            <p className="caption-supheading">The Best Landscaping in Pekanbaru</p>
                              <h1 className="caption-heading">High Quality & Guaranted</h1>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                              <a href="#" className="btn btn-secondary">MORE ABOUT US</a> <a href="#" className="btn btn-primary">HIRE US NOW</a>
                          </div>  
                        </div>
                    </div> 
                </div>
                <div className="custom-nav owl-nav"></div>
              </div>		
            <div className="section">
              <div className="content-wrap">
                <div className="container">

                  <div className="row">

                    <div className="col-sm-12 col-md-12">
                      <h2 className="section-heading text-center mb-4">
                        Why Choose Us?
                      </h2>
                      <p className="subheading text-center mb-5">Every case is very important to us and we always take care of them seriously.</p>
                    </div>
                    
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                      <div className="box-icon-1 text-center">
                        <div className="icon">
                          <i className="fa fa-globe"></i>
                        </div>
                        <div className="body-content">
                          <h4>The Best in Pekanbaru</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                      <div className="box-icon-1 text-center">
                        <div className="icon">
                          <i className="fa fa-certificate"></i>
                        </div>
                        <div className="body-content">
                          <h4>Certified Expert</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>
                  
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                      <div className="box-icon-1 text-center">
                        <div className="icon">
                          <i className="fa fa-thumbs-up"></i>
                        </div>
                        <div className="body-content">
                          <h4>Affordabel Pricing</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                      <div className="box-icon-1 text-center">
                        <div className="icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="body-content">
                          <h4>High Quality Services</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          
            <div className="section bgi-cover-center" data-background="images/dummy-img-1920x900-3.jpg">
              <div className="content-wrap py-0">
                <div className="container">
                  <div className="row align-items-end">
                    
                    <div className="col-sm-12 col-md-12 col-lg-7">
                      
                      <div className="text-white mt-5">
                        <h1 className="section-heading no-after text-primary">
                          Have Problem with your Gardening?
                        </h1>
                        <p className="mb-5">Sed orci dolor, pulvinar nec luctus a, malesuada ac nisl. Aliquam eleifend et dui et suscipit. Nam semper accumsan ante, ac dapibus urna dapibus et.</p>

                      </div>
                      <a href="#" className="btn btn-primary">CONTACT NOW</a>	
                      <div className="spacer-content"></div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-5">
                      <div className="img-cta">
                        <img src="images/dummy-img-400x400.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          
            <div className="section">
              <div className="content-wrap">
                <div className="container">

                  <div className="row">

                    <div className="col-sm-12 col-md-12">
                      <h2 className="section-heading text-center mb-4">
                        Our Services
                      </h2>
                      <p className="subheading text-center mb-5">Every case is very important to us and we always take care of them seriously.</p>
                    </div>
                    
                  </div>
                  
                  <div className="row">
                  
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
                      <div className="box-image-1">
                        <div className="media-box">
                          <img src="images/dummy-img-600x400.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="body-content">
                          <h4>Landscape Design</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
                      <div className="box-image-1">
                        <div className="media-box">
                          <img src="images/dummy-img-600x400.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="body-content">
                          <h4>Planting & Removal</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
                      <div className="box-image-1">
                        <div className="media-box">
                          <img src="images/dummy-img-600x400.jpg"
                          className="img-fluid" alt="" />
                        </div>
                        <div className="body-content">
                          <h4>Garden Care</h4>
                          <p>Dolor sit amet dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            
            <div className="section bg-secondary">
              <div className="content-wrap">
                <div className="container">

                  <div className="row">

                    <div className="col-sm-12 col-md-12">
                      <h2 className="section-heading text-center text-white mb-4">
                        Recent Project
                      </h2>
                      <p className="subheading text-center mb-5">Start growing with Gaco Html Template</p>
                    </div>
                    
                  </div>

                  <div className="row popup-gallery gutter-5">
                    
                    <div className="col-xs-12 col-md-6 col-lg-3">
                      <div className="box-gallery">
                        <a href="images/dummy-img-900x600.jpg" title="Gallery #1">
                          <img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid" />
                          <div className="project-info">
                            <div className="project-icon">
                              <span className="fa fa-search"></span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  
                    <div className="col-xs-12 col-md-6 col-lg-3">
                      <div className="box-gallery">
                        <a href="images/dummy-img-900x600.jpg" title="Gallery #2">
                          <img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid" />
                          <div className="project-info">
                            <div className="project-icon">
                              <span className="fa fa-search"></span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  
                    <div className="col-xs-12 col-md-6 col-lg-3">
                      <div className="box-gallery">
                        <a href="images/dummy-img-900x600.jpg" title="Gallery #3">
                          <img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid" />
                          <div className="project-info">
                            <div className="project-icon">
                              <span className="fa fa-search"></span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  
                    <div className="col-xs-12 col-md-6 col-lg-3">
                      <div className="box-gallery">
                        <a href="images/dummy-img-900x600.jpg" title="Gallery #4">
                          <img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid"/>
                          <div className="project-info">
                            <div className="project-icon">
                              <span className="fa fa-search"></span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-sm-12 col-md-12">
                      <div className="text-center mt-5">
                        <a href="#" className="btn btn-primary">VIEW MORE</a>
                      </div>
                    </div>
                    
                  </div>

                </div>
              </div>
            </div>

            
            <div className="section">
              <div className="content-wrap">
                <div className="container">
                  <div className="row">

                    <div className="col-sm-12 col-md-12">
                      <h2 className="section-heading text-center mb-4">
                        OUR LATEST BLOG
                      </h2>
                      <p className="subheading text-center mb-5">Start growing with Gaco Html Template</p>
                    </div>
                    
                  </div>
                  <div className="row">
                    
                    
                    <div className="col-12 col-md-6 mb-3">
                      <div className="rs-news-1">
                        <div className="media-box">
                          <a href="page-news-single.html">
                            <img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="body-box">
                          <div className="meta-date"><span>30</span>May</div>
                          <div className="title"><a href="page-news-single.html">Why you have difficult to clean your lawn</a></div>
                          <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                        </div>
                      </div>
                    </div>

                    
                    <div className="col-12 col-md-6 mb-3">
                      <div className="rs-news-1">
                        <div className="media-box">
                          <a href="page-news-single.html">
                            <img src="images/dummy-img-900x600.jpg" alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="body-box">
                          <div className="meta-date"><span>02</span>Des</div>
                          <div className="title"><a href="page-news-single.html">We Open Recruitment for Landscaping</a></div>
                          <p>We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

              
            <Testimonials />

            
            <div className="section">
              <div className="content-wrap">
                <div className="container">
                  <div className="row">

                    <div className="col-sm-12 col-md-12">
                      <h2 className="section-heading text-center mb-4">
                        Our Pricing Plans
                      </h2>
                      <p className="subheading text-center mb-5">Start growing with Gaco Html Template</p>
                    </div>
                    
                  </div>
                  <div className="row">
                    
                    
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <div className="rs-pricing-1 bg-primary-1 mb-5">
                              <h3 className="title">BASIC PLAN</h3>
                              <div className="price">
                                <span className="unit">$</span>20<span className="mon">/month</span>
                              </div>
                              <div className="features">
                                <ul>
                                  <li>Consectetuer adipiscing elit</li>
                                  <li>Dolor sit amet</li>
                                  <li>Sed diam nonummy</li>
                                  <li>Nibh euismod tincidunt</li>
                                  <li>Ut laoreet dolore</li>
                                  <li>1 Day Finish</li>
                                </ul>
                              </div>
                              <div className="action">
                                <a href="#" className="btn btn-primary">Learn More</a>
                              </div>
                            </div>
                    </div>

                    
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <div className="rs-pricing-1 bg-primary-1 mb-5">
                              <h3 className="title">SILVER PLAN</h3>
                              <div className="price">
                                <span className="unit">$</span>40<span className="mon">/month</span>
                              </div>
                              <div className="features">
                                <ul>
                                  <li>Consectetuer adipiscing elit</li>
                                  <li>Dolor sit amet</li>
                                  <li>Sed diam nonummy</li>
                                  <li>Nibh euismod tincidunt</li>
                                  <li>Ut laoreet dolore</li>
                                  <li>1 Day Finish</li>
                                </ul>
                              </div>
                              <div className="action">
                                <a href="#" className="btn btn-primary">Learn More</a>
                              </div>
                            </div>
                    </div>

                    
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <div className="rs-pricing-1 bg-primary-1 mb-5">
                              <h3 className="title">GOLD PLAN</h3>
                              <div className="price">
                                <span className="unit">$</span>80<span className="mon">/month</span>
                              </div>
                              <div className="features">
                                <ul>
                                  <li>Consectetuer adipiscing elit</li>
                                  <li>Dolor sit amet</li>
                                  <li>Sed diam nonummy</li>
                                  <li>Nibh euismod tincidunt</li>
                                  <li>Ut laoreet dolore</li>
                                  <li>1 Day Finish</li>
                                </ul>
                              </div>
                              <div className="action">
                                <a href="#" className="btn btn-primary">Learn More</a>
                              </div>
                            </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            

        </div>
      </Router>
      </React.Fragment>
    );
  }
}

export default Home;
