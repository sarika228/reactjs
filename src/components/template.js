import React from 'react'
import "./card-style.css"


function Template(props) {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="img3" className="card-img-top"/>
               
            </div>
            <div className="card-body text-Danger">
                <h4 className="card-title">{props.title}</h4>
            </div>
        </div>
    )
}

export default Template
