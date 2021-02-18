import React from "react"
import { Carousel } from "react-bootstrap"

function Carousell({FirstP, SecondP, ThirdP, D1, D2, D3, P1, P2, P3}) {



    return(

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={FirstP}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{D1}</h3>
      <p>{P1}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SecondP}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>{D2}</h3>
      <p>{P2}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ThirdP}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{D3}</h3>
      <p>{P3}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Carousell