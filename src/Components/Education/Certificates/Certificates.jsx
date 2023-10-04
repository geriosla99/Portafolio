import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Certificates = () => {
    
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/iZyIbae.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/y8bnpzB.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/rsr9iCQ.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/9aZOjn0.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/qBkGKZq.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="https://i.imgur.com/hh6TzIK.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Certificates