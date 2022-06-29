import Sidebar from "./Sidebar";

export default function Header(){
    return(
        <>
          <Sidebar name="Gaurav" allow="false"/>
            <div className="row background pt-2">
                        <div className="col-md-6">
                            <h1>Delicious</h1>
                        </div>

                        <div className="col-md-6">
                            <div className="row mt-4 nav">
                                <div className="col">HOME</div>
                                <div className="col">ABOUT</div>
                                <div className="col">CONTACT</div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="row  bg">
                        <div className="col-md-12 ">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img src="assests/img/slider4.webp" className="d-block w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="assests/img/slider3.jpg" className="d-block w-100" alt="..."/>
                                  </div>
                                  <div className="carousel-item">
                                    <img src="assests/img/slider2.jpg" className="d-block w-100" alt="..."/>
                                  </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span className="visually-hidden">Next</span>
                                </button>
                              </div>
                        </div>
                    </div>
        </>
    );
}