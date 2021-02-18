import React from "react"
import "./style.css"
import First from "../../components/images/calendar.png"
import Second from "../../components/images/weather.png"
import Third from "../../components/images/Quarantine.png"
import Fourth from "../../components/images/scheduler.png"
import Fifth from "../../components/images/Googlebook.png"
import Projects from "../../components/Projects"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Carousell from "../../components/Carousel"
import Early1 from "../../components/images/Early1.png"
import Early2 from "../../components/images/Early2.png"
import Early3 from "../../components/images/Early3.png"

function Portfolio() {
    return(
        <div>
            <Nav />
            <Carousell FirstP={Early1} D1="How does this work" P1="It works like this I think"
            SecondP={Early2}
            ThirdP={Early3}/>
            <div class="container box portfolio-container">
                <div class="row">

                    <div id="portfolio">
                        <Projects Name={"Interactive Calendar"} Page={"https://brandonleepiercy.github.io/project-1/"} Git={"https://github.com/brandonleepiercy/project-1"} Pic={First} Alt={"Calendar"} />
                        <div class="col-md-2"></div>
                        <Projects Name={"Weather Dashboard"} Page={"https://titorivera0707.github.io/Weather-Dashboard/"} Git={"https://github.com/titorivera0707/Weather-Dashboard"} Pic={Second} Alt={"Weather Dashboard"} />
                    </div>

                    <div id="portfolio">
                        <Projects Name={"Quarantine Game"} Page={"https://gentle-cliffs-28390.herokuapp.com/"} Git={"https://github.com/ttngu/QuarantineGame"} Pic={Third} Alt={"Quarantine Game"} />  
                        <div class="col-md-2"></div>
                        <Projects Name={"Google Books"} Page={"https://infinite-citadel-85782.herokuapp.com/"} Git={"https://github.com/titorivera0707/GoogleBook"} Pic={Fifth} Alt={"Google Book"} />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio