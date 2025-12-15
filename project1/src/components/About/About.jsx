import React from 'react'

export default function About() {
  return (
    <>
     <section className=" d-flex flex-column justify-content-center align-items-center text-white" id='About'>
  <h2 className="text-uppercase fw-bold mb-4">About Component</h2>

  
  <div className="d-flex justify-content-center align-items-center mb-4">
    <div className="line mx-3"></div>
    <i className="fa-solid fa-star fs-4"></i>
    <div className="line mx-3"></div>
  </div>

  
  <div className="container">
    <div className="row">

      <div className="col-md-6">
        <p className="text-center fs-5">
          Freelancer is a free bootstrap theme created by Route. The download includes
          the complete source files including HTML, CSS, and JavaScript as well as
          optional SASS stylesheets for easy customization.
        </p>
      </div>

      <div className="col-md-6">
        <p className="text-center fs-5">
          Freelancer is a free bootstrap theme created by Route. The download includes
          the complete source files including HTML, CSS, and JavaScript as well as
          optional SASS stylesheets for easy customization.
        </p>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
