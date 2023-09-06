import React from "react";

import "../styles/card.scss";
import { Link } from "react-router-dom";

//katewgoriye tıklayınca list sayfasına etkinlikleri listele
const EventCart = ({ data }) => {
  return (
    <Link to={`/categoryDetail/${data.value}`}>
      <div className="eventContainer  ">
        <div className=" cardBanner">
          <img src={data.img} alt="" />
        </div>
        <div className="categoryInf">
          <h5>{data.title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default EventCart;
