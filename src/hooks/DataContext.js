import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

//Act as Observer
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Fecth data from API
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:3000/db/data.json"
        );
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
