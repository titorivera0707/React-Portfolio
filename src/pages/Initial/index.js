import React, {Image} from "react"
import Particles from "react-particles-js"

function Initial() {

    function clickButton() {

    }

    return(
        <Particles
        style={{ position: "absolute" }}
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
        >
Hello
        </Particles>
    )
}

export default Initial