import React, {Image} from "react"
import { Link } from "react-router-dom";
import Particles from "react-particles-js"
import "./style.css"

function Initial() {

    function clickButton() {
      console.log("Hello")
    }

    return(
      <div>
        <Particles
        style={{ position: "fixed" }}
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 100
            },
            size: {
              value: 3
            }
          }
        }}
        />
          <div className="newDiv">
            <h1 className="newTop">Hello World</h1>
            <button className="buttonInit">
            <Link className="navbar-brand" to="/home">
          Home
        </Link>
            </button>
          </div>
        </div>
        
    )
}

export default Initial