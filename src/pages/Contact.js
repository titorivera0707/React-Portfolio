import React from "react"
import "./Contact.css"

function Contact() {

    return(
    <div>
    <div class="container">

        <div class="row"> 

        <div class="col-md-8 box" id="contact">

            <h1>Contact</h1>
            <p class="black">Lets get in contact and work together!</p>
            <div class="stripe">
            </div>

            <form>
                <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    
                </div>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        
        </div>
        </div>
    </div>
    </div>
    )
}

export default Contact