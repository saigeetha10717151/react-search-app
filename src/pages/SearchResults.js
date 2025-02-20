import React from "react";
import SearchResult from '../components/SearchResult/SearchResult'

function SearchFilter({isOpen}) {
  return (
    <>
      <div>
        <SearchResult isOpen={isOpen}/>
      </div>
    </>
  );
}
export default SearchFilter;
