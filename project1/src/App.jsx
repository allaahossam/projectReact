import { useState } from 'react'
import './App.css'
import About from './components/About/About';

import{ createBrowserRouter, RouterProvider } from "react-router-dom"
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portofolio/Portfolio';
import Layout from './components/layout/Layout';
import Start from './components/Start/Start';


let x = createBrowserRouter([
    {path:"" , element:<Layout/> , children: [
    {path: "Start", element:<Start/>},
    { path : "About", element:<About/>},
    {path: "Portfolio" , element:<Portfolio/>},
    {path : "Contact" , element:<Contact/> }
  ]}
]);

function App() {
  

  return (
    <>
      <RouterProvider router={x} />
      
    </>
  )
}

export default App
