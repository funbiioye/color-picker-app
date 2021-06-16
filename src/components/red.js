import React from 'react'
import { Link } from "react-router-dom"

function red() {
    return (
        <div className= "red-div">
            <p className="red-par">This is Colour Red with Hex Colour #FF0000</p>
            <div className="red-home-div">
                <Link to="/"> Go Back </Link>
            </div>
        </div>
      
      
      
    )
}

export default red