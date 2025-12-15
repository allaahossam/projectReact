import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className=' text-white py-5' id='Footer'>
        
        <div className="container">
          <div className="row text-center">
            <div className=' col-md-4 mb-4'>
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>
            <div className=' col-md-4 mb-4'>
              <h4 className="text-uppercase mb-4">Around the web</h4>
              <div>
                 <i className="fa-brands fa-facebook"></i>
                 <i className="fa-brands fa-twitter"></i>
                 <i className="fa-brands fa-linkedin-in"></i>
                 <i className="fa-solid fa-globe"></i>
               </div>
            </div>
            <div className=' col-md-4 mb-4'>
              <h4 className="text-uppercase mb-4">About freelancer</h4>
              <p className=' lead mb-0'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
       



      </footer>
    </>
  )
}
