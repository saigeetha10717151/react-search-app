/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/DataContext";
import { LOADING } from "../../constants";
import "./searchBox.css";

function SearchBar() {
  const { data, loading } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSugegestions] = useState(false);
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    if (searchTerm.length > 0) {
      const filterByState = [...new Set(data.states.map((item) => item.state))];
      const filteredData = filterByState.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredData.length > 0) {
        setSuggestions(filteredData);
        setShowSugegestions(true);
      }
    } else {
      setShowSugegestions(false);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, handleSearch]);

  const handleSugessionClick = (suggestion) => {
    setSearchTerm(suggestion.state);
    setShowSugegestions(false);
    navigate(`/search/${suggestion}`);
  };

  const handleKeyDown = (e) => {
    var enterValue = e.key;
    if (enterValue === "Enter") {
      const searchValue = e.target.value;
      navigate(`/search/${searchValue}`);
    }
  };

  return (
    <>
      {loading ? (
        <div>{LOADING}</div>
      ) : (
        <div className="search">
          <div className="input-box relative-position">
            <i className="icon curser-pointer fa fa-search"></i>
            <input
              type="text"
              name="search"
              autocomplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <div className="slider-icon curser-pointer">
              <i className="fas fa-sliders-h"></i>
            </div>
          </div>

          {showsuggestions && (
            <div className="search-list">
              {suggestions.map((suggestion, index) => (
                <div
                  className="search-item"
                  key={index}
                  onClick={() => handleSugessionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SearchBar;
