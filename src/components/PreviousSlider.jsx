import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "../Context/GlobalState";
import "../styles/slickStyle.scss";
import { Link } from "react-router-dom";
const PreviousSlider = () => {
  const { data } = useGlobalContext();

  const props = data.filter((dt) => dt.category === "tiyatro").slice(0, 12);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container overflow-hidden ">
      <h5 className="my-4">Popüler Tiyatrolar</h5>
      <Slider {...settings}>
        {props.map((props) => (
          <div className="card my-4 mx-auto">
            <div className="card-top" key={props.id}>
              <img src={props.img.banner} alt="" />
              <Link to={`detailPage/${props.id}`}>
                <h5>{props.title}</h5>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PreviousSlider;
