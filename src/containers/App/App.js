import React, { useState } from "react";
import "../../style/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../../pages/Search";
import SearchResults from "../../pages/SearchResults";
import Navbar from "../../components/NavigationMenu/NavBar";
import { DataProvider } from "../../hooks/DataContext";
import Menu from "../../components/common";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar handleBurgerClick={handleBurgerClick} />
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/menu/:menu" element={<Menu />} />
          <Route
            path="/search/:searchTerm"
            element={<SearchResults isOpen={isOpen} />}
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
