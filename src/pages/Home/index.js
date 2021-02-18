import React from "react"
import "./style.css"
import Me from "../../components/images/image14.jpeg"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

function Home() {
    return(
    <div>
        <Nav />
        <div className="container">

            <div className="row"> 

            <div className="col-8 box" id="index">
                
                <h1>About Me</h1>

                <div className="stripe">
                </div>

                <div className="row">
                
                <div>

                    <img src={Me} alt="Place Holder" className= "center"/>
                    <p>I am a web developer.</p>
                  
                    
                </div>
                </div>

            </div>

            </div>

        </div>
        <Footer />
    </div>  
    )
}

export default Home