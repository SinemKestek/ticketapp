import React from "react";
import "../styles/card.scss";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";

//categoris-cardtıkladığın kartın detay sayfasına yönlendireceksin

const CategoriesRow = () => {
  return (
    <>
      <div className=" categoriesWrapper">
        <div className="categoryName">
          <h2 className="fs-4">Öne Çıkanlar</h2>
        </div>
        <div className="row  justify-content-center my-2  ">
          <div className="categoriesCard col-2  ">
            <div className=" cardBanner">
              <img
                src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg"
                alt=""
              />
              <div className="eventTime">
                <CiCalendarDate size={19}></CiCalendarDate>
                <span className="small"> 22.09.2023</span>
              </div>
            </div>
            <div className="categoryInf">
              <h5> 39 basamak</h5>
              <div className="eventLoc">
                <small>İstanbul,Fişekhane</small>
              </div>
            </div>
          </div>

          <div className="categoriesCard col-2  ">
            <div className=" cardBanner">
              <img
                src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg"
                alt=""
              />
              <div className="eventTime">
                <CiCalendarDate size={19}></CiCalendarDate>
                <span className="small"> 22.09.2023</span>
              </div>
            </div>
            <div className="categoryInf">
              <h5> 39 basamak</h5>
              <div className="eventLoc">
                <small>İstanbul,Fişekhane</small>
              </div>
            </div>
          </div>

          <div className="categoriesCard col-2  ">
            <div className=" cardBanner">
              <img
                src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg"
                alt=""
              />
              <div className="eventTime">
                <CiCalendarDate size={19}></CiCalendarDate>
                <span className="small"> 22.09.2023</span>
              </div>
            </div>
            <div className="categoryInf">
              <h5> 39 basamak</h5>
              <div className="eventLoc">
                <small>İstanbul,Fişekhane</small>
              </div>
            </div>
          </div>
        </div>
        <div className="allBtn btn ">
          {" "}
          Tümünü gör<IoMdArrowDropright size={20}></IoMdArrowDropright>{" "}
        </div>
      </div>
    </>
  );
};

export default CategoriesRow;
