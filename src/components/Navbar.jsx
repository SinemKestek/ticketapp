import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import logo from "../logo2.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Filter from "../pages/Filter";
import CategoryDetail from "../pages/CategoryDetail";
import { useGlobalContext } from "../Context/GlobalState";

const Navbar = () => {
  const { data, setSearchTerm, searchTerm, setFilterData } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  const handleFilter = (value) => {
    setSearchTerm(value);
    const filteredData = data.filter(
      (dt) =>
        dt.title.toLowerCase().includes(value) ||
        dt.location.toLowerCase().includes(value) ||
        dt.city.toLowerCase().includes(value)
    );
    console.log(filteredData);
    setFilterData(filteredData);
    navigate("/list");
  };

  return (
    <>
      <div className="wrapper">
        <nav className="navbar-container">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>{" "}
          </div>
          <ul className="d-flex justify-content-center categoryMenü">
            <li>
              <Link to={"categoryDetail/Müzik"}>Müzik</Link>
            </li>
            <li>
              <Link to={"categoryDetail/tiyatro"}>Tiyatro</Link>
            </li>
            <li>
              <Link to={"categoryDetail/Sinema"}>Sinema</Link>
            </li>
            <li>
              <Link to={"categoryDetail/Diger"}>Diger</Link>
            </li>
          </ul>

          <div className="search">
            <input
              onChange={(e) => handleFilter(e.target.value.trim())}
              ref={searchText}
              type="text"
              placeholder="Mekan,etkinlik yada sanatçı arayın"
            />
            <BiSearch className="searchBtn" size={20}></BiSearch>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
