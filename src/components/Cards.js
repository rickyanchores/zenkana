import React from "react";

export default function Cards(){
    return(
        <div className="Cards">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1519704917829-68da6d72c5a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1062&q=80" alt=""/>
                <h3>Title</h3>
                <button>View</button>
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1520172977227-0c8006d570b6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1010&q=80" alt=""/>
                <h3>Title</h3>
                <button>View</button>
            </div>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1503990264798-c3f4cd657162?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                <h3>Title</h3>
                <button>View</button>
            </div>
        </div>
    )
}