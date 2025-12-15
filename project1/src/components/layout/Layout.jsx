import React from 'react'
import Navbar from './../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
      

      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}




{/* <section className=' container' id='Portfolio'>
        <h2 className='fw-bold text-uppercase m-3 text-center'>portfolio component</h2>
        <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="lineContact mx-3"></div>
               <i className="fa-solid fa-star fs-4"></i>
            <div className="lineContact mx-3"></div>
        </div>

        <div className="container py-5">
  <div className="row g-4">
    <div className="col-md-4">
      <img src="./poert1.png" className="portfolio-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src="./port2.png" className="portfolio-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src="./port3.png" className="portfolio-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src="./poert1.png" className="portfolio-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src="./port2.png" className="portfolio-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src="./port3.png" className="portfolio-img" alt="" />
    </div>
  </div>
</div>

      </section> */}