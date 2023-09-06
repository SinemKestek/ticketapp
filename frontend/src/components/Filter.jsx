import React, { useState } from "react";
import "../styles/filter.scss";
import { HiOutlineEye, HiLocationMarker } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";
import DateFilter from "./DateFilter";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { Button } from "bootstrap";
import moment from "moment";
import "moment/locale/tr";
import { useGlobalContext } from "../Context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
moment.locale("tr");

const Filter = () => {
  const navigate = useNavigate();
  const { data } = useGlobalContext();
  const { filterData, setFilterData } = useGlobalContext();
  const selectedCity = data.map((dt) => dt.city.toUpperCase());
  const setCity = [...new Set(selectedCity)].sort();
  const [show, setShow] = useState(false);

  const [categoryOpt, setCategoryOpt] = useState("all");
  const [cityOpt, setCityOpt] = useState("all");
  const [timing, setTiming] = useState([]);

  const handleCategory = (event) => {
    const categoryValue = event.target.value;
    setCategoryOpt(categoryValue);
  };
  const handleCity = (event) => {
    const cityValue = event.target.value;
    console.log(cityValue);
    setCityOpt(cityValue);
  };
  console.log(categoryOpt);
  const cityControl = (city) => {
    if (city === cityOpt || cityOpt === "all") {
      return true;
    }
    return false;
  };
  const categoryControl = (category) => {
    if (category === categoryOpt || categoryOpt === "all") {
      return true;
    }
    return false;
  };

  const dateControl = (date) => {
    const date1 = moment(date, "DD/MM/YYYY").format("YYYY/MM/DD");

    if (timing.length === 0) {
      return true;
    }
    if (
      moment(date1).isAfter(timing[0], "h:mma") &&
      moment(date1).isBefore(timing[1], "h:mma")
    ) {
      return true;
    }

    return false;
  };

  const handleFilter = (e) => {
    const userFiltered = data.filter(
      ({ city, category, date }) =>
        categoryControl(category) && cityControl(city) && dateControl(date)
    );
    setFilterData(userFiltered);
    console.log(userFiltered);
    navigate("/filter");
  };

  return (
    <>
      <div className=" filterMobileMenü bg-warning ">
        <div className="toggle-mobil" onClick={() => setShow(!show)}>
          {" "}
          <HiMiniAdjustmentsHorizontal size={22} />
        </div>
        {show && (
          <div className="mobileContainer">
            <form className="">
              <div className="filter-m  ">
                <div className="title-m">
                  <HiOutlineEye size={19}></HiOutlineEye>
                  <span>Kategori</span>
                </div>
                <div>
                  <select
                    class="form-select"
                    id="category"
                    onChange={(e) => handleCategory(e)}
                  >
                    <option value="all">Hepsi</option>
                    <option value="Müzik">Müzik</option>
                    <option value="tiyatro">Tiyatro</option>
                    <option value="Sinema">Sinema</option>
                    <option value="Diger">Etkinlikler</option>
                  </select>
                </div>
              </div>
              <div className="filter-m">
                <div className="title-m">
                  <BsCalendarDate size={19}></BsCalendarDate>
                  <span>Tarih</span>
                </div>
                <div>
                  <div class="filter">
                    <DateFilter
                      timing={timing}
                      setTiming={setTiming}
                    ></DateFilter>
                  </div>
                </div>
              </div>
              <div className="filter-m  ">
                <div className="title-m">
                  <HiLocationMarker size={19}></HiLocationMarker>
                  <span>Şehir</span>
                </div>
                <div>
                  <select
                    class="form-select"
                    id="city"
                    onChange={(e) => handleCity(e)}
                  >
                    <option value="all">Türkiye</option>
                    {setCity.map((city, index) => (
                      <option key={index}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="btn  filter " onClick={handleFilter}>
                Filtrele
              </button>
            </form>
          </div>
        )}
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
              <option value="all">Hepsi</option>
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
              <DateFilter timing={timing} setTiming={setTiming}></DateFilter>
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
              <option value="all">Türkiye</option>
              {setCity.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-warning filter "
          onClick={() => handleFilter()}
        >
          Filtrele
        </button>
      </form>
    </>
  );
};

export default Filter;
