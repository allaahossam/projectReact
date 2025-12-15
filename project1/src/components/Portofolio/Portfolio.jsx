import { Modal } from 'bootstrap';
import React, { useState } from 'react'




export default function Portfolio() {


  const [images, setimages] = useState([{
     img_cover:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      title: "Project 1"},
      {
         img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
      title: "Project 2"},
      {
        img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
      title: "Project 3"},
      {
        img_cover:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      title: "Project 4"},
      {
         img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
      title: "Project 5"},
      {
        img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
      title: "Project 6"
      }
    ]);
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">PORTFOLIO COMPONENT</h2>

      <div className="row g-4">
        {imegs.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className={styles.card}>
              <img src={item.img_cover} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
      
      



    
  




        
        
