import React from "react"

function Projects({Name, Page, Git, Pic, Alt }) {
    return(
        <div class="col-md-5" id="margin">
            <p>{Name}</p>
            <a class="brdclr" target="_blank" href={Page}><img class="rounded float-left img-fluid" src={Pic} alt={Alt}/></a>
            <a class="github" target="_blank" href={Git}>Github Repository!</a>
        </div>
    )
}

export default Projects
