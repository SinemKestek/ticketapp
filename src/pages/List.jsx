import React, { useEffect } from "react";
import { useGlobalContext } from "../Context/GlobalState";
// import List from "../components/List";
const List = () => {
  const { filterData } = useGlobalContext();
  console.log(filterData);

  return (
    <div>
      {filterData.map((dt) => (
        <p>{dt.title}</p>
      ))}
      <List event={filterData}></List>
    </div>
  );
};

export default List;
