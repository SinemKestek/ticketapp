import React, { useState } from "react";
import "../styles/filter.scss";
import { HiOutlineEye, HiLocationMarker } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";
import DateFilter from "./DateFilter";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { useGlobalContext } from "../Context/GlobalState";
import { Button } from "bootstrap";

const Filter = () => {
  const { data } = useGlobalContext();

  const selectedCity = data.map((dt) => dt.city.toUpperCase());
  const setCity = [...new Set(selectedCity)].sort();
  // console.log(setCity);
  const { dates, setDates } = useGlobalContext();
  const [categoryOpt, setCategoryOpt] = useState();
  const [cityOpt, setCityOpt] = useState();

  const handleCategory = (event) => {
    const categoryValue = event.target.value;
    console.log(categoryValue);
    setCategoryOpt(categoryValue);
    console.log(categoryOpt);
  };
  const handleCity = (event) => {
    const cityValue = event.target.value;
    console.log(cityValue);
    setCityOpt(cityValue);
  };

  const userFilter = (categoryOpt, cityOpt) => {
    const userFiltered = data.filter(
      ({ city, category }) => category === categoryOpt || city === cityOpt
    );

    // userFiltered.map((item) => console.log(item.title));
    console.log("clikkkk");
    console.log(userFiltered);
  };

  return (
    <>
      <div className="filterMenu bg-warning p-1">
        <HiMiniAdjustmentsHorizontal size={26} />
      </div>
      <form className="filterContainer ">
        <div className="filter  ">
          <div className="title">
            <HiOutlineEye size={19}></HiOutlineEye>
            <span>Kategori</span>
          </div>
          <div>
            <select
              class="form-select"
              id="category"
              onChange={(e) => handleCategory(e)}
            >
              <option value="Müzik">Müzik</option>
              <option value="tiyatro">Tiyatro</option>
              <option value="Sinema">Sinema</option>
              <option value="Diger">Etkinlikler</option>
            </select>
          </div>
        </div>
        <div className="filter">
          <div className="title">
            <BsCalendarDate size={19}></BsCalendarDate>
            <span>Tarih</span>
          </div>
          <div>
            <div class="filter">
              <DateFilter></DateFilter>
            </div>
          </div>
        </div>
        <div className="filter  ">
          <div className="title">
            <HiLocationMarker size={19}></HiLocationMarker>
            <span>Şehir</span>
          </div>
          <div>
            <select
              class="form-select"
              id="city"
              onChange={(e) => handleCity(e)}
            >
              <option>-</option>
              {setCity.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {" "}
          <div className="btn btn-light filter" onClick={() => userFilter()}>
            Ara
          </div>
        </div>
      </form>
    </>
  );
};

export default Filter;
