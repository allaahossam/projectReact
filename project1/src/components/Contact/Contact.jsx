import React from 'react'

export default function Contact() {
  return (
    <>
      <section className='' id='Contact'>
        <h2 className='fw-bold text-uppercase m-3 text-center'>conatct section</h2>
        <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="lineContact mx-3"></div>
               <i className="fa-solid fa-star fs-4"></i>
            <div className="lineContact mx-3"></div>
        </div>  

        <div className=' container w-50 mx-auto mt-5'>

          <input type="text" className=' form-control mb-4 border-0 border-bottom rounded-0 shadow-none ' placeholder='userName' />
          <input type="number" className=' form-control mb-4 border-0 border-bottom rounded-0 shadow-none ' placeholder='userAge' />
          <input type="email" className=' form-control mb-4 border-0 border-bottom rounded-0 shadow-none ' placeholder='userEmail' />
          <input type="password" className=' form-control mb-4 border-0 border-bottom rounded-0 shadow-none ' placeholder='userPassword' />

          <button className='btn btn-success px-4 py-2'>send Message </button>

        </div>

       
       
      </section>
    </>
  )
}
