import React from "react";
import "../styles/card.scss";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { useGlobalContext } from "../Context/GlobalState";
import { Link } from "react-router-dom";

const CategoriesRow = () => {
  const { data } = useGlobalContext();

  const post = data.filter((dt) => dt.category == "Diger").slice(0, 6);

  return (
    <>
      <div className=" container my-5">
        <div className="categoryName">
          <h2 className="fs-4">WorkShop & Diğer</h2>
        </div>
        <div className=" row justify-content-center ">
          {post.map((dt) => (
            <div className="categoriesCard   col-md-3 col-sm-6 " key={dt.id}>
              <div className=" cardBanner">
                <Link to={`/detailpage/${dt.id}`}>
                  <img src={dt.img.banner} alt="" />
                </Link>
                <div className="eventTime">
                  <div className="categoryInf">
                    <h5>{dt.title}</h5>
                    <div className="eventLoc">
                      <small>{dt.location}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesRow;
