import React from 'react'
import { Link } from "react-router-dom"

function welcome() {
    return (
        <div className="welcome-container-div">
            <div className= "welcome-div">
                <label className= "welcome-label">
                 <p>Welcome To The Colour Factory</p>
                </label>
               
                <div className="add-colour-div">
                 <Link to="/picker">Add a Colour</Link>
                </div>  
            </div>
            <div>
                <p className= "select-colour">Please select a Colour</p>
                <label className= "label-colour">
                 <Link to="/red">red</Link><br />
                </label>  
                <label className= "label-colour">
                 <Link to="/green">green</Link><br />
                </label>  
                <label className= "label-colour">
                 <Link to="/blue">blue</Link>
                </label>                  
            </div>
        </div>
    )
}

export default welcome
