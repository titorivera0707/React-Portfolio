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
                    <p>I am an aspiring Full Stack Web Developer currently enrolled in the UCLA Full Stack Web Development Boot Camp. I hope to be able to create and develop software that is both functional and innovative. My knowledge in automotive technologies has prepared me for software development by being able to troubleshoot quickly and effectively. Rather than figuring out why a vehicle won't start, I am figuring out why a certain line of code breaks the entire application. I hope to someday create software for electrical vehicles and self driving cars combining both of my expertises.</p>
                  
                    
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