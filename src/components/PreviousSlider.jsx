import React from 'react'
import Slider from "react-slick";
 import '../../node_modules/slick-carousel/slick/slick.css';
 import '../../node_modules/slick-carousel/slick/slick-theme.css';
import { useGlobalContext } from '../Context/GlobalState';
import '../styles/slickStyle.scss'
const PreviousSlider = () => {
 const {data}=useGlobalContext()
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
//  const tekKisi=data.filter((dt)=>dt.actors.lenght===1)
//  console.log(data.actors)
// console.log(tekKisi)
  return (
    <div className='p-4'>
       <h5 className='text-muted'>Kaçırılan Etkinlikler</h5>
    <Slider {...settings}>
    {data.map((dt)=>(

<div className="card my-4 mx-auto">

<div className="card-top">
    <img src={dt.img.banner} alt="" />
<h5>{dt.title}</h5>
</div>
<div className="card-bottom">{dt.location}</div>
</div>

        ))}
    </Slider>
     
    </div>
  )
}

export default PreviousSlider