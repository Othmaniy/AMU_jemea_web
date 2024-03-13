import React from 'react'

function Login1() {
  return (
    <><section className="contact pb-lg-0 z-index-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="contact-main white-bg p-5">
            <h2 className="title mb-4">Contact Us For <span>Help</span></h2> 
            <form id="contact-form" method="post" action="https://themeht.com/template/misto/html/ltr/php/contact.php">
              <div className="messages"></div>
              <div className="form-group">
                <input id="form_name" type="text" name="name" className="form-control" placeholder="User Name" required="required" data-error="Username is required."/>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required."/>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                <div className="help-block with-errors"></div>
              </div>
              <button className="btn btn-border btn-radius"><span>Submit Now</span>
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 form-info mt-4">
          <h2 className="title">Get In <span>Touch!</span></h2>
          <p>Contact for any help dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros.</p>
          <ul className="contact-info list-unstyled mt-4">
            <li className="mb-4"><i className="flaticon-paper-plane"></i><span>Address:</span>
              <p>423B, Road Wordwide Country, USA</p>
            </li>
            <li className="mb-4"><i className="flaticon-phone-call"></i><span>Phone:</span><a href="tel:+912345678900">+91-234-567-8900</a>
            </li>
            <li><i className="flaticon-message"></i><span>Email</span><a href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default Login1