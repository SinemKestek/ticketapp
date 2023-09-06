import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import CategoriesRow from "../components/CategoriesRow";
import Filter from "../components/Filter";
import EventCategory from "../components/EventCategory";
import AdvEvent from "../components/AdvEvent";
import { useGlobalContext } from "../Context/GlobalState";
import PreviousSlider from "../components/PreviousSlider";

const Home = () => {
  const { data } = useGlobalContext;

  return (
    <>
      <Header />
      <Filter></Filter>
      <PreviousSlider></PreviousSlider>
      <EventCategory />
      <CategoriesRow />
      {/* <AdvEvent></AdvEvent> */}
    </>
  );
};

export default Home;
