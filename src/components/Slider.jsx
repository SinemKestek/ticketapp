import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return ( 
    <div div className=' slideContainer'>
     
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img text="First slide" className='slide'  src="https://www.cloudsdomain.com/uploads/icerikresim/23988.jpeg" />
        <Carousel.Caption>
          <h3>Zengin Mutfağı</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className='btn btn-light'>Bilet Al</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item> 
        <img text="Second slide" className='slide' src='https://pbs.twimg.com/media/EK3Zd9ZWsAI3dkt.jpg' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='btn btn-light'>Bilet Al</button>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img text="Third slide" className='slide' src='https://ippasso.mediatriple.net/eventgroup/22082023222537-toz.jpg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button className='btn btn-light'>Bilet Al</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
  
  
    
  )
}

export default Slider