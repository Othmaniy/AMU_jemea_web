import React from 'react'
import thumbnail1 from "../../assets/template_assets/images/thumbnail/01.png"
import thumbnail2 from "../../assets/template_assets/images/thumbnail/02.png"

// import thumbnail3 from "../../template_assets/images/thumbnail/03.png"
import thumbnail3 from "../../assets/template_assets/images/thumbnail/03.png"
function Testimonial() {
  return (
    <>
    <section>

        <h1 className='text-center'>ጀመአችን ተመርቀው በወጡ ሰወች አንደበት </h1>
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="owl-carousel" data-items="2" data-sm-items="1" data-margin="30" data-autoplay="true">
          <div className="item">
            <div className="testimonial style-3 mx-3">
              <div className="testimonial-avatar">
                <div className="testimonial-img">
                  <img className="img-fluid" src={thumbnail1} alt="" />
                </div>
              </div>
              <div className="testimonial-content"> <span><i className="fas fa-quote-left"></i></span>
                <p>consectetur adipisicing elit, Totam mollitia incidunt vero cupiditate obcaecati iusto tempora unde! Numquam officiis, quae adipisci quam laudantium nulla modi. adipisci quam laudantium nulla modi.</p>
                <div className="testimonial-caption">
                  <h6>John Doe -</h6>
                  <label>Architect</label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial style-3 mx-3">
              <div className="testimonial-avatar">
                <div className="testimonial-img">
                  <img className="img-fluid" src={thumbnail2} alt="" />
                </div>
              </div>
              <div className="testimonial-content"> <span><i className="fas fa-quote-left"></i></span>
                <p>consectetur adipisicing elit, Totam mollitia incidunt vero cupiditate obcaecati iusto tempora unde! Numquam officiis, quae adipisci quam laudantium nulla modi. adipisci quam laudantium nulla modi.</p>
                <div className="testimonial-caption">
                  <h6>Kelly Rain -</h6>
                  <label>Engineers</label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial style-3 mx-3">
              <div className="testimonial-avatar">
                <div className="testimonial-img">
                  <img className="img-fluid" src={thumbnail3} alt="" />
                </div>
              </div>
              <div className="testimonial-content"> <span><i className="fas fa-quote-left"></i></span>
                <p>consectetur adipisicing elit, Totam mollitia incidunt vero cupiditate obcaecati iusto tempora unde! Numquam officiis, quae adipisci quam laudantium nulla modi. adipisci quam laudantium nulla modi.</p>
                <div className="testimonial-caption">
                  <h6>Jamy Lynn -</h6>
                  <label>Manager</label>
                </div>
              </div>
            </div>
          </div>
            

          
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    </>
  )
}

export default Testimonial