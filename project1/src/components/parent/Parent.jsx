import React, { useState } from 'react'
import Child from '../child/Child';


export default function Parent() {

    const [products, setproducts] = useState( [
        {id:11 , code:"Samsung" , price:9000 , onSale: true , cat: "android"},
        {id:12 , code:"Oppo" , price:27000 , onSale: true , cat: "android"},
        {id:13 , code:"Iphone15" , price:60000 , onSale: false , cat: "IOS"},
        {id:14 , code:"Infinix" , price:9000 , onSale: true , cat: "android"},
        {id:15 , code:"Vivo" , price:13000 , onSale: false , cat: "android"},
        {id:16 , code:"Nokia" , price:750 , onSale: true , cat: "NaN"},
    ]);

     function updateProduct(iden){
      let myProducts = structuredClone(products);
      myProducts[iden].price +=100;
      setproducts(myProducts);

     
    }


    function deleteProduct(id){
      const newProducts = structuredClone(products);
      newProducts.splice(id ,1);
      setproducts(newProducts)

    }

  return (
    <>
      <h1 className='bg-info text-white text-center '>Home Section</h1>

     <div className="container">
      <div className="row g-4">

        { products.map( function( currentProduct , id , index ){
          return<Child   key={index}    pro = {currentProduct}    handelDelete ={deleteProduct}  i = {id}  update={updateProduct}  num = {index} />
        }   )   }
         
         
      </div>
     </div>
 </>
  )
}
