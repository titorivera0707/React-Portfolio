import React, {Image} from "react"
import Particles from "react-particles-js"

function Initial() {

    function clickButton() {

    }

    return(
      <div className="newback">
        <button href="/home"type="submit"onClick={()=>clickButton()}>
      Click Me!
      </button>
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

      </div>
    )
}

export default Initial