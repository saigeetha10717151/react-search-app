import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/DataContext";
import { LOADING, SEARCH_RESULTS } from "../../constants";
import "./searchResult.css";

function SearchResult({ isOpen }) {
  const { data, loading } = useData();
  const { searchTerm } = useParams();
  const [filteredResuls, setFilteredResults] = useState([]);
  const container = `${
    isOpen ? "margin-left-wrapper" : "margin-center-wrapper"
  }`;

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      const filteredData = data.states.filter((item) =>
        item.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  }, [data, searchTerm]);

  const renderSearchResults = () => {
    return filteredResuls.length > 0 ? (
      filteredResuls.map((result) => {
        return (
          <article>
            <img
              className="card-image"
              src={result.imgurl}
              alt="tourist_place"
            />
            <div className="content">
              <h3>{result.place}</h3>
              <p>{result.desc}</p>
            </div>
          </article>
        );
      })
    ) : (
      <div className="err-wrapper">
        <p>
          Your search{" "}
          <span className="content-color">
            <b>{searchTerm}</b>
          </span>{" "}
          did not match any documents
        </p>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div>{LOADING}</div>
      ) : (
        <div className={container}>
          <div className="wrapper-header">{SEARCH_RESULTS}</div>
          <div className="card-grid">{renderSearchResults()}</div>
        </div>
      )}
    </>
  );
}

export default SearchResult;
