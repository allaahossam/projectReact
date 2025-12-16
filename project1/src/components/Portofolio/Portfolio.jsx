import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  const images = [
    {
      img_cover:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      title: "Project 1",
    },
    {
      img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
      title: "Project 2",
    },
    {
      img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
      title: "Project 3",
    },
    {
      img_cover:
        "https://routeegy.github.io/startFramework/assets/images/poert1.png",
      title: "Project 4",
    },
    {
      img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port2.png",
      title: "Project 5",
    },
    {
      img_cover:
        "https://routeegy.github.io/startFramework/assets/images/port3.png",
      title: "Project 6",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">PORTFOLIO COMPONENT</h2>
      <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="lineContact mx-3"></div>
               <i className="fa-solid fa-star fs-4"></i>
            <div className="lineContact mx-3"></div>
        </div>  
       

      <div className="row g-4">
        {images.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="portfolio-card position-relative">
              <img
                src={item.img_cover}
                alt={item.title}
                className="img-fluid rounded"
              />

              <div className="overlay d-flex justify-content-center align-items-center">
                <h4 className="text-white fw-bold">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
      
      



    
  




        
        
