import React, { useEffect, useState } from 'react'
export default function Home() {

  

  const [count, setcount] = useState(10);


  
  function ChangeCount(){

    setcount( Math.round(Math.random()*100))

  }

  useEffect( function(){

    if( count == 10){
      return  
    }


    console.log("updateddddddd");
    
  } , [count])



  return (
    <>
      <h2 >Count Is {count}</h2>
      <button onClick={()=> ChangeCount()} className='btn btn-primary  '>Change Count</button>
    </>
  )
}

