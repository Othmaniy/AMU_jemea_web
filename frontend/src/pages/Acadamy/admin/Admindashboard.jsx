import React from 'react'

function Admindashboard() {
  return (
    <>
    <section>
        
  <div className="container">
    <div className="row">
      
      <div className="col-md-4">
      <a href="addfile" style={{textDecoration:"none",color:"inherit"}}>  <div className="featured-item left-icon">
          <div className="featured-icon"> <i className="flaticon-innovation"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5 className='fs-1'>AddFiles</h5>
          </div>
          <div className="featured-desc">
            <p>Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div></a>
      
      </div>
      <div className="col-md-4 mt-3 mt-md-0">
        <a href="managefiles" style={{textDecoration:"none",color:'inherit'}}>
        <div className="featured-item left-icon">
          <div className="featured-icon"> <i className="flaticon-innovation-1"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5 className='fs-1'>Manage files</h5>
          </div>
          <div className="featured-desc">
            <p>Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div>
        </a>
       
      </div>
      <div className="col-md-4 mt-3 mt-md-0">
        <a href="addexams" style={{textDecoration:"none",color:"inherit"}}>
        <div className="featured-item left-icon">
          <div className="featured-icon"> <i className="flaticon-chat-bubble"></i>
          </div>
          <div className="featured-title text-uppercase">
            <h5 className='fs-1'>Add Exams</h5>
          </div>
          <div className="featured-desc">
            <p>Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque et porttitor. Praesent sed nisi eleifend.</p>
          </div>
        </div>
        </a>
       
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Admindashboard