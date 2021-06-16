import React from 'react'
import { Link } from "react-router-dom"

function picker() {
    return (
        <div className="picker-container">
            <div className="enter-colour-div">
                <label>
                    <p>Enter a Colour</p>
                </label>
                <label>
                    <input className="colour-input" type="text"></input>
                </label>
            </div><br />
            <div className="pick-colour-div">
                <label>
                    <p>select a Colour</p>
                </label>
                <label>
                    <input className="colour-input" type="color"></input>
                </label>
            </div>
            <br />
            <div>
                <button className ="color-btn">Add Colour</button>
            </div>
            <div>
             <Link  to="/" className="picker-home"> Go Back to Home</Link>
            </div>
        </div>
    )
}

export default picker
