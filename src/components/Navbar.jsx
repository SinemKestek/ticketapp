import React, { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import logo from "../logo2.jpg";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../Context/GlobalState";

const Navbar = () => {
  const { data, setFilterData, filterData } = useGlobalContext();
  const inputRef = useRef();
  const navigate = useNavigate();

  // const actor = data.map((e) => e.actors);
  // const spr = actor.flat(Infinity);
  // const actorFilt = spr.map((el) => el.toLowerCase());
  // console.log(actorFilt);

  const handleFilter = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();

    let filteredData = data.filter(
      (dt) =>
        dt.title.toLowerCase().includes(value) ||
        dt.location.toLowerCase().includes(value) ||
        dt.city.toLowerCase().includes(value)
    );

    // console.log(filteredData);
    inputRef.current.value = "";
    setFilterData(filteredData);
    navigate("/filter");
  };
  // console.log(filterData);
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

          <form className="search" onSubmit={handleFilter}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Mekan,etkinlik yada sanatçı arayın"
            />{" "}
            <button type="submit" className="searchBtn">
              {" "}
              <BiSearch size={20}></BiSearch>
            </button>
          </form>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
