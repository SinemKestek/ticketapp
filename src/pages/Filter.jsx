import List from "../components/List";
import { useEffect } from "react";
import { useGlobalContext } from "../Context/GlobalState";

const Filter = () => {
  const { filterData, setFilterData } = useGlobalContext();
  useEffect(() => {
    console.log(filterData);
  });
  return (
    <>
      <List event={filterData}></List>
    </>
  );
};

export default Filter;
