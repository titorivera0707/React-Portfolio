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
            <div className="picture">
            <h1 className="center">Project Early Bird</h1>
            <p className="center">Created using: React, CSS, Bootstrap</p>
            <Carousell FirstP={Early1} D1="How does this work" P1="It works like this I think"
            SecondP={Early2}
            ThirdP={Early3}/>
            <div class="row">
            <div className="col-8">
            <h4>Project early bird was created for those of us who are always made late by the little things in life. We always have big things saved in our calendar about things that will be happening during our week or even month, but we always forget to take into account how much time we need to make it on time for those certain events. Most calendars don't take into account things ike brushing your teeth, getting dressed, eating breakfast. All those few minutes wasted doing necessary time is time that we sometimes don't take into account and thus we are made late. Early bird solves this issue by allowing the user to input things in their daily calendar by 1 or 5 minute increments rather than by hour as most daily planners do.</h4>
            </div>
            <div className="col-4">
                
            </div>

            </div>
            </div>
            <h1>Project Two</h1>

            <h1>Project Three</h1>

            <h1>Project Four</h1>
            {/* <div class="container box portfolio-container">
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
            </div> */}
            <Footer />
        </div>
    )
}

export default Portfolio