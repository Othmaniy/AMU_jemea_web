import React from 'react'
import { Link } from 'react-router-dom'

function FileDashboard() {
  return (
    <>
    <section className="feuture-main">
  <div className="container">
    <div className="row  p-2">
        
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/software"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-industrial-robot"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>software engineering</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div></Link>
       
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/mechanical"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-maintenance"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Mechanical engineering</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p> 
          </div>
        </div></Link>
      
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/computerscience"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-fuel-station"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>computer science</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div></Link>
        
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/it"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-growth"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Information technology</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div></Link>
        
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/electrical"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-settings"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Electrical engineering</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div></Link>
     
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/civil"} style={{textDecoration:"none",color:"inherit"}}><div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-worker"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Civil Engineering</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p> 
          </div>
        </div></Link>
        
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/hydraulic"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-fuel-station"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Hydraulic and water resource engineering</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p> 
          </div>
        </div></Link>
      
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/irrigation"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-fuel-station"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Irrigation Engineering</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p> 
          </div>
        </div></Link>
       
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={'/files/choosefiles/metro'} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-fuel-station"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Metrology</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p> 
          </div>
        </div></Link>
       
      </div>
      <div className="col-lg-4 col-md-6">
        <Link to={"/files/choosefiles/supply"} style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item text-center">
          <div className="featured-icon"> <i className="flaticon-fuel-station"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5>Water supply</h5>
          </div>
          <div className="featured-desc">
            <p className="mb-3">Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p> 
          </div>
        </div></Link>
        
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default FileDashboard