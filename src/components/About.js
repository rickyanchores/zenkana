import React from "react";

export default function About(){
    return(
         <div className="About">
             <div className="txt-box">
                 <h3>About</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut est fuga aliquid nostrum nemo quidem nam quo, quam accusantium earum ea voluptatibus ratione voluptate deleniti adipisci asperiores quaerat placeat!</p>
                 <button>Read more</button>
             </div>
             <div className="img-box">
                 <img src="https://images.unsplash.com/photo-1517330486404-33542d376afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt=""/>
             </div>
             
         </div>
    )
}