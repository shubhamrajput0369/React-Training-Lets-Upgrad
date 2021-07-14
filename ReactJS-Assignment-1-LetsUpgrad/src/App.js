//Author: Shubham Rajput
//ReactJS

import React from "react"
import "./style.css"
import Button from "./Button"

const App=()=>{
    return(
        <div>
            <h1 style={{textAlign : "center"}}> Hello World</h1>
            <h2> Namaste React.js </h2>
            <Button buttonText="React.js"/>
            <Button buttonText="Node.js"/>
            <Button buttonText="Express.js"/>
        </div>
    )
}

export default App
