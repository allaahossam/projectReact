import React from 'react'

export default function Child( props ){


  
   
    // console.log(props.pro);

    let { handelDelete , i , update,  num} = props

    let {id , code ,price , onSale , cat } = props.pro
    
  return (
    <>
      <div className="col-md-3">
        <div className="inner border p-3 shadow rounded  position-relative">

          {onSale == true ?<div className=' position-absolute top-0 end-0 p-2 bg-danger'>Sale</div> : null }

            <h2>Name :{code}</h2>
            <h3>Price : {price}</h3>
            <h4>Cat :{cat}</h4>
            <button  onClick={function(){
               handelDelete(i)
            }} className='btn btn-outline-danger text-black '>Delete <i className="fa-solid fa-trash"></i></button> 
            <button onClick={()=>update(num) } className='btn btn-outline-warning ms-3 text-black'>UpDate<i className="fa-solid fa-pen-to-square"></i></button>
        </div>
      </div>
    </>
  )
}
