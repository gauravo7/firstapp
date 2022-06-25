import Header from "./layouts/Header";

export default function Dashboard(){
    return(
        <>
            <div className="container-fluid bg-light">
        <div className="row">
            <div className="col">
                <div className="container"> 
                    <Header/>


                    <div className="row mt-4">
                        <div className="col-3">
                            <div className="row ab1 ">
                                <img src="assests/img/abt1.jpg" alt=""/></div>
                            <div className="row ab2 mt-2 mb-5 mx-2">
                                <img src="assests/img/about-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="row ab3 mt-5 mx-2"><img src="assests/img/about-3.jpg" alt=""/></div>
                            <div className="row ab4 mt-2"><img src="assests/img/about-2.jpg" alt=""/></div>
                        </div>
                        <div className="col-6 mt-5 about">
                            <h4 style={{"color": "rgb(232, 128, 9)"}}>ABOUT US</h4>
                            <h2>WELCOME TO Delicious</h2>
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 menu">
                                    <h1 style={{"color": "rgb(232, 128, 9)"}}> OUR MENU</h1>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <div className="card-group">
                                        <div className="card">
                                          <img src="assests/img/hero-bg.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Burger</h5>
                                           
                                          </div>
                                        </div>
                                        <div className="card">
                                          <img src="assests/img/slider3.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Food</h5>
                                           
                                          </div>
                                        </div>
                                        <div className="card">
                                          <img src="assests/img/slider2.jpg" className="card-img-top" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Food</h5>
                                        
                                          </div>
                                        </div>
                                      </div>
                                </div>
                            </div>
                                        
                        </div>                
                    </div>


                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="row"> 
                                <div className="col-md-12 menu">
                                    <h1 style={{"color": "rgb(232, 128, 9)"}}> OUR CHEF</h1>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <div className="card-group">
                                        <div className="card">
                                          <img src="assests/img/chef1.jpg" className="card-img-top chef" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Chef Vaneet kaur</h5>
                                            <p className="card-text">chef</p>
                                           
                                          </div>
                                        </div>
                                        <div className="card">
                                          <img src="assests/img/chef2.jpg" className="card-img-top chef" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Chef Vikas</h5>
                                            <p className="card-text">chef</p>
                                           
                                          </div>
                                        </div>
                                        <div className="card">
                                          <img src="assests/img/chef3.jpg" className="card-img-top chef" alt="..."/>
                                          <div className="card-body">
                                            <h5 className="card-title">Chef Manmeet</h5>
                                            <p className="card-text">chef</p>
                                        
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
	</div>
        </>
    )
}
