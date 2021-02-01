import React from "react"
import Particles from "react-particles-js"
import { Link } from "react-router-dom";

function Initial() {

    function clickButton() {
      
    }

    return(
      <div>
        <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
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
      <button
        to="/home"
      >
      Click Me!
      </button>

      </div>
    )
}

export default Initial