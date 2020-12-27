import React from "react";

export default function Header(){
    return(
         <div className="Header">
             <div className="logo">
                 <h1>Zenkana</h1>
             </div>
             <div className="Nav">
                 <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Gallery</a></li>
                     <li><a href="#">About</a></li>
                 </ul>
             </div>
         </div>
    )
}