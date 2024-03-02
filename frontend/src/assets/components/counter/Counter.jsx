import React from 'react'
import "./counter.css"
function Counter() {
  return (
    <>

<section>
  <div className="container">
    <div className="row counterr">
      <div className="col-lg-3 col-sm-6">
        <div className="counter style-3 mt-3 mt-lg-0"> <i className="flaticon-innovation"></i>
          <span className="count-number" data-to="20" data-speed="100">20</span>
          <label>years</label>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="counter style-3 mt-3 mt-lg-0"> <i className="flaticon-pencil"></i>
          <span className="count-number" data-to="500" data-speed="100">500</span>
          <label>members</label>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="counter style-3 mt-3 mt-lg-0"> <i className="flaticon-coffee-cup"></i>
          <span className="count-number" data-to="300" data-speed="100">300</span>
          <label>Current students</label>
        </div>
      </div>
      {/* <div className="col-lg-3 col-sm-6">
        <div className="counter style-3 mt-3 mt-lg-0"> <i className="flaticon-employee"></i>
          <span className="count-number" data-to="125" data-speed="1000">125</span>
          <label>Happy Clients</label>
        </div>
      </div> */}
    </div>
  </div>
</section>


    </>
  )
}

export default Counter