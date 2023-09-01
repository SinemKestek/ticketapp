import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import CategoriesRow from "../components/CategoriesRow";
import Filter from "../components/Filter";
import EventCategory from "../components/EventCategory";
import AdvEvent from "../components/AdvEvent";
import { GlobalContext } from "../Context/GlobalState";
import PreviousSlider from "../components/PreviousSlider";

const Home = () => {
  const { data } = useContext(GlobalContext);
  //konser ve sinemayı aşağı dağır propsla

  return (
    <>
      <Header />
      <Filter></Filter>

      <EventCategory />
      <PreviousSlider></PreviousSlider>
      <PreviousSlider></PreviousSlider>

      {/* <CategoriesRow/> */}
      <AdvEvent></AdvEvent>
    </>
  );
};

export default Home;
