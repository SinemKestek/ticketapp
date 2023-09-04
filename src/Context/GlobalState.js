import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useCallback,
} from "react";

const URL = "http://localhost:3000/posts";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterData]);

  return (
    <GlobalContext.Provider
      value={{
        setFilterData,
        data,
        filterData,
      }}
    >
      {" "}
      {children}{" "}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
