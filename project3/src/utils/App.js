import React from "react";
//  import { BrowserRouter as Router} from "react-router-dom";
// import Home from "./pages/Home";
// import FindReader from "./pages/FindReader";
// import CreateRegistry from "./pages/CreateRegistry";
//  import Navbar from "../components/Navbar";
// import Footer from "./components/Footer";
//  import Wrapper from "./components/Wrapper";

function App() {
  return (
    //  <Router>
    <div>
        {/* <Wrapper> */}
        <meta name="viewport" content="width=device-width"></meta>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Sign In
                    <i className="fa fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#FindReader">Find Reader</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Create Registry</a></li>
                        
                    </ul>
                </div>
            </div>
            
        
           
                
               
                
        <div>
            <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To HIGHbrow!</div>
                <div className="masthead-heading text-uppercase">A Readers' Paradise</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
        </header>
        </div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">What is HIGHbrow?</h2>
                    <h3 className="section-subheading text-muted">Avid Readers Gift Ideas</h3>
                    <h3 className="section-subheading text-muted">Just Got Easy!</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">E-Commerce</h4>
                        <p className="text-muted">Various sites to choose from to gift a loved one, classmate or friends with just a click of a button.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Electronic Delivery</h4>
                        <p className="text-muted">Are your readers tech savvy, a minimalist or environmentalist? No problem!Your reader can select their book preference when options are available.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className=" fas fa-virus-slash fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">COVID free</h4>
                        <p className="text-muted">No trips to the bookstore. You have just cut your contraction reduce done all while making a book lovers paradise that more fanastic!</p>
                    </div>
                </div>
            </div>
        </section>
        
       
           
       
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">How it Works</h2>
                    <h3 className="section-subheading text-muted">4 Easy Steps.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 1</h4>
                                <h4 className="subheading">Create a Registry</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Create your wishlist for your friends to see.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 2</h4>
                                <h4 className="subheading">Share your Link </h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"> Whether its your birthday, anniversary, entering college or in a book club.Share your list anytime of the year! </p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Step 3</h4>
                                <h4 className="subheading">Just listen out!  </h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Just listen out for the doorbell or email that your gift has arrived! </p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>Find Your HIGHbrower!</h4>
                                <h4 className="subheading">Search and Shop for Your Loved One</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Search the regritry or book clubs to gift your favorite reader! </p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                               Click 
                                <br />
                                to get 
                                <br />
                                Started!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
       
       
    
          
        
           
        
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                   
                <div className="col-lg-4 text-lg-left"> Created by Alvin Cox |Marcia Paige | Lisa Survana Copyright ©2020  HIGHbrow</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        
      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        
       
        <script src="js/scripts.js"></script>
        </nav>
     
        {/* </Wrapper> */}
    </div> 
  );
}

export default App;

