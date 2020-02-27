import React,{Component} from 'react';
import {Router } from 'react-router-dom';

class About extends Component{
    render(){
        return(
            <div className="section">
                <div className="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <img src="images/dummy-img-600x400.jpg" alt="" className="img-fluid shadow-lg mb-3"/>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <h2 className="section-heading">
                                    We Have 20 Years Experience
                                </h2>
                                <p className="subheading mb-4">"We Are Gaco Landscaping"</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus.</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default About;