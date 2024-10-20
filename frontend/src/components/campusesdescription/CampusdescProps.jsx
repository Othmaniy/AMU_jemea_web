import React from 'react'

function CampusdescProps({campusdesc,images,departments}) {
  return (
    <>
    <section className="pt-4">
				<div className="image-container mt-0 pt-0 mb-4" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                {images.map((image, index) => (
            <img
              key={index}
              className="mt-0 pt-0"
              src={image}
              alt={`Campus ${index}`}
              style={{ width: '400px', objectFit: 'contain', borderRadius: '10px', margin: '0 10px' }}
            />
          ))}

				</div>
				<div className="container">
					<p className="campus-intro text-center">
						{campusdesc}
					</p>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="accordion" id="accordion">
                                {departments.map((dept,index)=>(
                                 <div className="accordion-item" key={index}>
                                 <h2 className="accordion-header" id={`heading${index}`}>
                                 <button
                        className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${index}`}
                      >
                                        {dept.name}
                                     </button>
                                 </h2>
                                 <div
                                     id={`collapse${index}`}
                                     className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                     aria-labelledby={`heading${index}`}
                                     data-bs-parent="#accordion"
                                 >
                                     <div className="accordion-body">
                                        {dept.description}
                                     </div>
                                 </div>
                             </div>
                                ))}
								
								
									
								{/* end of sections */}
							</div>
						</div>
					</div>
				</div>
			</section>
    
    </>
  )
}

export default CampusdescProps