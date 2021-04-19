import React from 'react';

const home = () => {

    const Img = 'img/robotics.jpg';
    return (
        <>
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card ">
                            <div className="card-image">
                            <img src="img/robotics1.jpg" alt="" sizes="" srcset=""/>
                            <span className="card-title">Course</span>
                            </div>
                            <div className="card-content">
                            <p class="size2 bold2">course description </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima nesciunt minus fugiat modi ipsum qui quia tempore optio, harum architecto porro suscipit
                                , ratione quas deserunt blanditiis amet unde autem.</p>
                            </div>
                            {/* <div className="card-action">
                            <a href="#">This is a link</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card ">
                            <div className="card-image">
                            <img src="img/robotics2.jpg" alt="" sizes="" srcset=""/>
                            <span className="card-title">Course 2</span>
                            </div>
                            <div className="card-content">
                            <p class="size2 bold2">course description </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima nesciunt minus fugiat modi ipsum qui quia tempore optio, harum architecto porro suscipit
                                , ratione quas deserunt blanditiis amet unde autem.</p>
                            </div>
                            {/* <div className="card-action">
                            <a href="#">This is a link</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card ">
                            <div className="card-image">
                            <img src="img/robotics3.jpg" alt="" sizes="" srcset=""/>
                            <span className="card-title">Course 3</span>
                            </div>
                            <div className="card-content">
                            <p class="size2 bold2">course description </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima nesciunt minus fugiat modi ipsum qui quia tempore optio, harum architecto porro suscipit
                                , ratione quas deserunt blanditiis amet unde autem.</p>
                            </div>
                            {/* <div className="card-action">
                            <a href="#">This is a link</a>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="center-align ">
                            <a href="#" className="bold size2  indigo-text">view all our courses..</a>
                </div>
            </div>
           
        </section>

        <div className="header-divider"></div>

        <section className="market-phrase">
            <div className="container">
                <div className="row">
                    <div className="col s12 l7">
                        <h2 class="white-text">Learn With Us</h2>
                        <p> <i class="material-icons">check_circle </i>Affordable, with flexible terms of payment</p>
                        <p><i class="material-icons">check_circle </i>Enhance your professional potential</p>
                        <p><i class="material-icons">check_circle </i>Challenge yourself and acquire skills to change your career</p>
                        <p><i class="material-icons">check_circle </i>Learn in a non-rigid and fun way</p>
                        <p><i class="material-icons">check_circle </i>Enhance your professional potential</p> 
                    </div>
                </div>

            </div>


        </section>
        

        <div className="header-divider"></div>
        
         <section className="testimonies">
           <div className="container">
               <div><h2>What are our students saying?</h2></div>
              
               <div className="row">
                    <div className="testimonies-wrapper">
                        <div className="col l4 m4 s12">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error reprehenderit 
                                obcaecati quaerat perspiciatis amet, 
                                nulla voluptatibus nobis, ratione atque nostrum dolores porro et! Dolores repellat reiciendis ad et facere.
                            </p>
                            <ul class="collection">
                                    <li class="collection-item avatar">
                                    <img src="img/avatar.jpg" alt="" class="circle"/>
                                    <span class="title">Title</span>
                                    <p>First Line <br/>
                                        Second Line
                                    </p>
                                    
                                    </li>
                                </ul>
                        </div>
                    </div>   
                    <div className="testimonies-wrapper">
                        <div className="col l4 m4 s12">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error reprehenderit 
                                obcaecati quaerat perspiciatis amet, 
                                nulla voluptatibus nobis, ratione atque nostrum dolores porro et! Dolores repellat reiciendis ad et facere.
                            </p>
                            <ul class="collection">
                                    <li class="collection-item avatar">
                                    <img src="img/avatar.jpg" alt="" class="circle"/>
                                    <span class="title">Title</span>
                                    <p>First Line <br/>
                                        Second Line
                                    </p>
                                    
                                    </li>
                                </ul>
                        </div>
                    </div>   
                    <div className="testimonies-wrapper">
                        <div className="col l4 m4 s12">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error reprehenderit 
                                obcaecati quaerat perspiciatis amet, 
                                nulla voluptatibus nobis, ratione atque nostrum dolores porro et! Dolores repellat reiciendis ad et facere.
                            </p>
                            <ul class="collection">
                                    <li class="collection-item avatar">
                                    <img src="img/avatar.jpg" alt="" class="circle"/>
                                    <span class="title">Title</span>
                                    <p>First Line <br/>
                                        Second Line
                                    </p>
                                    
                                    </li>
                                </ul>
                        </div>
                    </div>   
                   
               </div>
           </div>

        </section>

        <section>
            <div className="join-wrapper">
                <div className="join center-align">
                    <h2>Join our growing community now</h2>
                    <div className="button center">Join Now !!</div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default home
