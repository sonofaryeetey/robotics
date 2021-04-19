import React from 'react';


const header = () => {
    return (
        <>
        <header className="light-grey">
            <nav className="nav-wrapper transparent">

                <div class="container">
                    <a href="#" class="brand-logo  "><img src="img/robotLogo2.jpg" alt="" width="50px" height="50px" srcset=""/></a>
                    <a href="#" class="sidenav-trigger" data-target="mobile-menu">
                    <i class="material-icons indigo-text">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <a href="" className="btn btn-nav indigobg right hide-on-med-and-down">Contact Us</a>
                    </ul>
                   
                    <ul class="sidenav grey lighten-2" id="mobile-menu">
                        <li><a class="sidenav-close"  href="#">Home</a></li>
                        <li><a class="sidenav-close" href="#">Courses</a></li>
                        <li><a class="sidenav-close" href="#">About Us</a></li>
                        <li><a class="sidenav-close" href="#">Contact</a></li>
                        {/* <li ><a class="button2 indigobg"href="#">Contact Us</a></li> */}
                    </ul>
                     
                </div>                
            </nav>
            {/* <div className="header-divider"></div> */}
            <div className="container banner-info hide-on-medium-down">
                <div className="row">
                    <div className="col l6 m6 s12 ">
                        <div className="banner-info-wrapper">
                            <h2>Learn Robotics </h2>
                            <p class="bold2 size5">Now!!</p>
                            <p>learn robotics in an interactive way.. </p>
                        </div>
                        <div className="button">
                            Contact Us Now!
                         </div>
                    </div>
                    <div className="col l5 m5 s12 ">
                        <div className="image-wrapper">
                            <img src="img/header-robot.png" alt="" className="responsive-img"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
            
        </>
    )
}

export default header
