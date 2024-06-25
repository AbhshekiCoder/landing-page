import { useEffect } from "react";
import { useState } from "react";

function Navbar({form, navbar, form1, item}){
   
   

       
    
    return (
        <>
        <div className = "navbar sticky-top">
        <div className="logo">
         Shopify

        </div>
        <ul type = "none">
            <li className="item">
                <a href = "#">Home</a>
            </li>
            <li className="item">
            <a href = "#product">Product</a>

            </li>
            <li className="item">
           <a href = "#features">
           Features


           </a>
          
            </li>
            <li className="item">
          <a href =  "#">
            Services
          </a>

            </li>
            <li className="item">
           <a href = "#" onMouseOver = {form} >Contact</a>{item == 'block'? <i class="fa-solid fa-caret-down"></i>:<i class="fa-solid fa-caret-up"></i>} 

            </li>
           
        </ul>
        <div className="sidebar">
        <i class="fa-solid fa-bars" onClick={navbar}></i>
        </div>

        </div>
        <div className="Sidebar modal">
        <div className="items">
        <a href = "#">Home</a>

        </div>
        <div className="items">
        <a href = "#product">Product</a>
        </div>
        <div className="items">
       <a href = "#">Services</a>
        </div>
        <div className="items">
        <a href = "#" onClick = {form1}>
            Contact
        </a>
        </div>
       


        </div>

        </>
    )

}
export  default Navbar;
