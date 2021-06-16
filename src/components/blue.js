import React from 'react'
import { Link } from "react-router-dom"

function blue() {
    return (
        <div className= "blue-div">
            <p className="blue-par">This is Colour Blue with Hex Colour #0000FF</p>
            <div className="blue-home-div">
                <Link to="/"> Go Back </Link>
            </div>
        </div>
      
      
      
    )
}

export default blue
