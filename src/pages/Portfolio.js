import React from "react"
import "./Portfolio.css"
import First from "../components/images/calendar.png"
import Second from "../components/images/weather.png"
import Third from "../components/images/Quarantine.png"
import Fourth from "../components/images/scheduler.png"

function Portfolio() {
    return(
    <div class="container portfolio-container">

        <div class="row">

            <div id="portfolio">
                <div class="col-md-5" id="margin">
                <p>Interactive Calendar</p>
                <a class="brdclr" target="_blank" href="https://brandonleepiercy.github.io/project-1/"><img class="rounded float-left img-fluid" src={First} alt="Calendar"/></a>
                <a class="github" target="_blank" href="https://github.com/brandonleepiercy/project-1">Github Repository!</a>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5" id="margin">
                <p>Weather Dashboard</p>
                <a class="brdclr" target="_blank" href="https://titorivera0707.github.io/Weather-Dashboard/"><img class="rounded float-left img-fluid" src={Second} alt="Weather Dashboard"/></a>
                <a class="github" target="_blank" href="https://github.com/titorivera0707/Weather-Dashboard">Github Repository!</a>
                </div>
            </div>

            <div id="portfolio">
                <div class="col-md-5" id="margin">
                <p>Quarantine Game</p>
                <a class="brdclr" target="_blank" href="https://gentle-cliffs-28390.herokuapp.com/"><img class="rounded float-left img-fluid" src={Third} alt="Quarantine Game"/></a>
                <a class="github" target="_blank" href="https://github.com/ttngu/QuarantineGame">Github Repository!</a>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5" id="margin">
                <p>Work Day Scheduler</p>
                <a class="brdclr" target="_blank" href="https://titorivera0707.github.io/Work-Day-Scheduler/"><img class="rounded float-left img-fluid" src={Fourth} alt="Workday Scheduler"/></a>
                <a class="github" target="_blank" href="https://github.com/titorivera0707/Work-Day-Scheduler">Github Repository!</a>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Portfolio