import React from "react"
import Particles from "react-particles-js"

function Initial() {

    return(
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
    )
}

export default Initial