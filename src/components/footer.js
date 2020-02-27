import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
              <div className="content-wrap pb-0">
                <div className="container">
                  
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-item">
                        <img src="images/logo_w.png" alt="logo bottom" className="logo-bottom"/>
                        <div className="spacer-30"></div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                        <div className="sosmed-icon icon-bg-primary d-inline-flex">
                          <a href="#"><i className="fa fa-facebook"></i></a> 
                          <a href="#"><i className="fa fa-twitter"></i></a> 
                          <a href="#"><i className="fa fa-instagram"></i></a> 
                          <a href="#"><i className="fa fa-pinterest"></i></a> 
                          <a href="#"><i className="fa fa-linkedin"></i></a> 
                        </div>
                      </div>
                    </div>					

                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <div className="footer-item">
                        <div className="footer-title">
                          Contact Info
                        </div>
                        
                        <div className="row mb-3">
                          <div className="col-5">Address :</div>
                          <div className="col-7">99 Park Jomblo Street, Panam, Pekanbaru 28292, Riau</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">Office  :</div>
                          <div className="col-7">(123) 65412309</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">Fax :</div>
                          <div className="col-7">(123) 65412309</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">Email :</div>
                          <div className="col-7">info@yoursite.com</div>
                        </div>

                      </div>
                    </div>

                    {/* <div className="col-sm-6 col-md-6 col-lg-3">
                      <div className="footer-item">
                        <div className="footer-title">
                          Opening Hours
                        </div>
                        
                        <div className="row mb-3">
                          <div className="col-5">Mon - Sat :</div>
                          <div className="col-7">08:00 - 17:00</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">Sunday :</div>
                          <div className="col-7">09:00 - 15:00</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-5">Friday :</div>
                          <div className="col-7">Closed</div>
                        </div>
                          
                      </div>
                    </div> */}
                    
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <img src="images/dummy-img-600x800.jpg" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fcopy">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <p className="ftex">Copyright 2020 &copy; <span className="color-primary">Alluri Seeta Rama Raju Spices and Horticulture Producer Company</span>. Designed by <span className="color-primary">DevRushi.</span></p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Footer;