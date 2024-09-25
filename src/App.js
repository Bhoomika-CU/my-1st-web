
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import logo from '../src/images/logo.jpg';
import home1 from '../src/images/home1.jpg';
import home2 from '../src/images/home2.jpg';
import home3 from '../src/images/home3.jpg';
import buy1 from '../src/images/buy1.jpg';
import buy2 from '../src/images/buy2.jpg';
import buy3 from '../src/images/buy3.jpg';
import buy4 from '../src/images/buy4.jpg';
import eye from '../src/images/face pack.jpg';
import lip from '../src/images/lipgloss.jpg';
import powder from '../src/images/hair spray.jpg';
import lipst from '../src/images/lipstick.jpg';
import lipstick1 from '../src/images/shoplipstick.jpg';
import lipstick2 from '../src/images/shoplipstick1.jpg';
import lipstick3 from '../src/images/shoplipstick2.jpg';
import lipstick4 from '../src/images/shoplipstick3.jpg';
import lipstick5 from '../src/images/shoplipstick4.jpg';
import roller1 from '../src/images/roller_model.jpg'
import roller2 from '../src/images/roller.jpg'
import serum1 from '../src/images/face serum.jpg'




function App() {
  return (
    
    <div className="App ">
      <div className="container-fluid bg-lightpink opacity-6 py-1 d-flex justify-content-between align-items-center"style={{backgroundColor:'lightpink'}}>
        <div><p><i className="bi bi-telephone"></i> Orders: 834 567 5963</p></div>
        <div><p>Get <strong>5% off</strong> and enjoy <strong>free shipping</strong> on orders over ₹500!</p></div>
        <div>
          <a style={{ textDecoration: 'none', color: 'black' }} href="#">My Account </a>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>

 
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ">
            <img src={logo} width="60" height="50" alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#aboutUs">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#pages">PAGES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#shop">SHOP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#portfolio">PORTFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactUs">CONTACT US</a>
              </li>
            </ul>
            <a style={{ textDecoration: 'none', paddingLeft: '5px' }} href='#account'>
              <i style={{color:'black'}}className="bi bi-cart fs-5">(4)</i> 
            </a>
          </div>
        </div>
      </nav>

  <div className='d-sm-flex'>
  <div className='image-container'>
    <img src={home1} className="img-fluid img-same-height w-100" alt="Responsive image" />
    <div className='overlay'>Transform Your Look Now!</div>
  </div>
  <div className='image-container'>
    <img src={home2} className="img-fluid img-same-height w-100" alt="Responsive image" />
    <div style={{backgroundColor:'rgb(245, 183, 139)'}} className='overlay'>Glow Like Never Before!<br></br><button type='button' className='btn btn-outline-danger btn-sm'>Explore</button></div>
  </div>
  <div className='image-container'>
    <img src={home3} className="img-fluid img-same-height w-100" alt="Responsive image" />
    <div className='overlay'>Embrace Your Unique Style!</div>
  </div>
  </div>

    <div className='d-sm-flex justify-content-between'style={{color:'brown'}}>
      <h4>#FACE CREAM</h4><h4>#BODY WASH</h4><h4>#SHAMPOO</h4><h4>#LIPSTICK</h4><h4>#EYEBROW</h4>
      
    </div>

    <p style={{fontSize:'13px', textAlign:'center',marginTop:'70px',color:'brown'}}><b>SHOP ESSENTIALS</b></p>
    <h4 style={{fontSize:'30px', textAlign:'center'}}><span style={{color:'brown'}}>SHOP</span> <span style={{color:'grey'}}>CATEGORIES</span></h4>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active">
     <img style={{ position: "relative" }} className="d-block w-100" src={eye} alt="First slide" />
      <div style={{ backgroundColor: 'black',opacity:'0.6', position: "absolute", top: '0px', width: '100%', height: '100%' }}></div>
      <div className='carousel-caption'>
        <p>Most attractive</p>
        <h3>GlowGlam Face Pack</h3>
        <div className='btn text-black btn-outline-light mb-4'>SHOP NOW</div>
      </div>
  </div>

    <div className="carousel-item" >
      <img style={{ position: "relative" }} className="d-block w-100" src={lip} alt="Second slide"height='50%'/>
      <div class="carousel-caption">
      <p>Most attractive</p>
        <h3>GlamGloss</h3>
        <div className='btn text-black btn-outline-light mb-4'>SHOP NOW</div>
      </div>
      <div style={{ backgroundColor: 'black',opacity:'0.6', position: "absolute", top: '0px', width: '100%', height: '100%' }}></div>
    </div>

    <div className="carousel-item">
      <img style={{ position: "relative" }} className="d-block w-100" src={powder} alt="Third slide"height='50%'/>
      <div class="carousel-caption">
      <p>Most attractive</p>
        <h3>NourishGlow Serum</h3>
        <div className='btn text-black btn-outline-light mb-4'>SHOP NOW</div>
      </div>
      <div style={{ backgroundColor: 'black',opacity:'0.6', position: "absolute", top: '0px', width: '100%', height: '100%' }}></div>
    </div>
  </div>

  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
    </div>

    <h4 style={{fontSize:'30px', textAlign:'center',marginTop:"40px"}}><span style={{color:'brown'}}>LIPSTICK</span> <span style={{color:'grey'}}>COLLECTION</span></h4>
    
    <div className='d-md-flex ' >  
      <div className="card-md" style={{width: '18rem',borderRight:'2px solid grey'}}>
        <img src={lipstick1} className="card-img-top" alt="lipsticks" style={{height:"255px" ,objectFit:"cover"}}/>
        <div className="card-body">
          <h5 className="card-title">Red Matt Lipstick </h5>
          <p className="card-text">Price: ₹1290</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>

      <div className="card-md" style={{width: '288pcx',borderRight:'2px solid grey'}}>
        <img src={lipstick2} className="card-img-top" alt="lipsticks" style={{height:"255px" ,objectFit:"cover"}}/>
        <div className="card-body">
          <h5 className="card-title">Red Matt Lipstick </h5>
          <p className="card-text">Price: ₹1290</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>

      
      <div className="card-md" style={{width: '288px',borderRight:'2px solid grey'}}>
        <img src={lipstick3} className="card-img-top" alt="lipsticks" style={{height:"255px" ,objectFit:"cover"}}/>
        <div className="card-body">
          <h5 className="card-title">Red Matt Lipstick </h5>
          <p className="card-text">Price: ₹1290</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
      

      <div className="card-md" style={{width: '288px',borderRight:'2px solid grey'}}>
        <img src={lipstick5} className="card-img-top" alt="lipsticks" style={{height:"255px" ,objectFit:"cover"}}/>
        <div className="card-body">
          <h5 className="card-title">Red Matt Lipstick </h5>
          <p className="card-text">Price: ₹1290</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
      
      <div className="card-md" style={{width: '288px', height:'50%'}}>
        <img src={lipstick4} className="card-img-top" alt="lipsticks"style={{height:"255px" ,objectFit:"cover"}} />
        <div className="card-body">
          <h5 className="card-title">Red Matt Lipstick </h5>
          <p className="card-text">Price: ₹1290</p>
          <a href="#" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
      
    

    </div>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
      
    
  );
}

export default App;
