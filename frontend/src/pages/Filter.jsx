import List from "../components/List";
import { useGlobalContext } from "../Context/GlobalState";
import NotFound from "../components/NotFound";

const Filter = () => {
  const { filterData, setFilterData } = useGlobalContext();
  console.log(filterData.length);
  return (
    <div>
      {/* <List event={filterData}></List> */}
      {filterData.length > 0 ? (
        <List event={filterData}></List>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
};

export default Filter;
