import React,{Component} from 'react';

class Testimonials extends Component{
    render(){
        return(
            <div className="section bgi-cover-center" data-background="images/dummy-img-1920x900-3.jpg">
              <div className="content-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <h2 className="section-heading text-center text-white">
                        Happy Costumers
                      </h2>
                      <p className="subheading text-center mb-5 text-white">Every case is very important to us and we always take care of them seriously.</p>
                    </div>
                  </div>
                  <div className="row">
                    
                    <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                      <div id="testimonial" className="owl-carousel owl-theme owl-light">
                        
                        <div className="item">
                          <div className="rs-box-testimony">
                            
                            <div className="media-box">
                              <img src="images/dummy-img-400x400.jpg" alt="" className="rounded-circle" />
                            </div>
                            <div className="quote-box">
                              <blockquote className="quote">
                              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam
                              </blockquote>
                              <div className="quote-name">
                                Johnathan Doel <span>Businessman</span>
                              </div> 
                            </div>

                          </div>
                        </div>
                        
                        <div className="item">
                          <div className="rs-box-testimony">
                            
                            <div className="media-box">
                              <img src="images/dummy-img-400x400.jpg" alt="" className="rounded-circle" />
                            </div>
                            <div className="quote-box">
                              <blockquote className="quote">
                              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam
                              </blockquote>
                              <div className="quote-name">
                                Alisha Doel <span>Businessman</span>
                              </div> 
                            </div>
                            
                          </div>
                        </div>
                      
                        <div className="item">
                          <div className="rs-box-testimony">
                            
                            <div className="media-box">
                              <img src="images/dummy-img-400x400.jpg" alt="" className="rounded-circle" />
                            </div>
                            <div className="quote-box">
                              <blockquote className="quote">
                              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam
                              </blockquote>
                              <div className="quote-name">
                                Johny Doel <span>Businessman</span>
                              </div> 
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Testimonials;