import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Default extends Component{
    render(){
        return(
            <div className="section">
                <div className="content-wrap">
                    <div className="container">				

                        <div className="row">
                            
                            <div className="col-12 col-md-12">
                                <div className="text-center page404">
                                    <h1 className="title">404</h1>
                                    <h3 className="text-secondary">The requested page cannot be found!</h3>
                                    <p className="mb-5">The page you are looking for was moved, removed, renamed or might never existed.</p>
                                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                                </div>
                            </div>	

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;