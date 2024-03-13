import React from 'react'
import leaderimage from "../../assets/template_assets/images/thumbnail/01.png"

import "./message.css"
function Message() {
  return (
    <>
     <div className="item mt-5 dark-bg">
            <div className="row messagerow">
              <div className="col-lg-10">
                <div className="testimonial position-relative">
                  <div className="d-md-flex align-items-center">
                    <div className="flex-shrink-0 ">
                      <div className="testimonial-avatar">
                        <div className="testimonial-img  ">
                          <img className="img-fluid " src={leaderimage} alt=""/>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-md-5 mt-5 mt-md-0">
                        <h3 className='text-center' style={{color:"orange"}}>message from  main leader</h3>
                      <div className="testimonial-content"> <span><i className="fas fa-quote-left"></i></span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore tempora eaque eos facilis ea voluptatibus a fugiat consequuntur porro nulla dignissimos id ab officiis, commodi neque molestias qui dolor laboriosam temporibus nesciunt eius recusandae, quibusdam, enim doloremque? Aliquid labore ipsam quibusdam libero consectetur autem tenetur. Unde cum possimus animi nisi quae odit illo, architecto perferendis magni reprehenderit, blanditiis soluta nulla explicabo esse excepturi quibusdam sapiente! Ex aperiam voluptate est ipsam, itaque ullam, impedit tenetur dolores porro laborum repellat alias! Ipsam nam laudantium aspernatur autem repellat. A voluptatibus cum molestias maiores quae reprehenderit, laboriosam, similique nobis voluptates laudantium, maxime voluptatum cupiditate?</p>
                        <div className="testimonial-caption">
                          <h6>Mensur Seid</h6>
                          <br />
                          <label> Amir</label>
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

export default Message