import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useGlobalContext } from "../Context/GlobalState";
import { Link } from "react-router-dom";

const Slider = () => {
  const { data } = useGlobalContext();

  const slideShow = data.slice(22, 26).filter((dt) => dt.category === "Müzik");

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carouselWrapper">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        {slideShow.map((item) => (
          <Carousel.Item>
            <Link to={`detailpage/${item.id}`} key={item.id}>
              <img
                text="First slide"
                className="slide"
                src={item.img.banner}
                className="sliderImg"
              />

              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{truncateString(item.sum, 120)}</p>
                <button className="btn btn-light">Bilet Al</button>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
