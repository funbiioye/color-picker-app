import React from 'react'
import { Link } from "react-router-dom"

function green() {
    return (
        <div className= "green-div">
            <p className="green-par">This is Colour Green with Hex Colour #008000</p>
            <div className="green-home-div">
                <Link to="/"> Go Back </Link>
            </div>
        </div>
      
      
      
    )
}

export default green