import React, { useState, useEffect, useRef } from "react";
import brandLogo from "../assets/brand-logo.png";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.png";
import { baseUrl } from "../constants/baseUrl";

const Header = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [employeeData, setEmployeeData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchEmployees = (event) => {
    setInputValue(event.target.value);
    const searchInput = event.target.value;
    if (searchInput.length > 2) {
      setShowResults(true);
      setSearchResults(() => {
        return Object.keys(employeeData).filter((id) => {
          return (
            employeeData[id].fullName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            employeeData[id].email
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          );
        });
      });
    } else {
      setShowResults(false);
    }
  };
  const navigateTo = (id) => {
    navigate("/employee/" + id);
    setInputValue("");
    setShowResults(false);
    setSearchResults([]);
  };
  useEffect(() => {
    fetch(baseUrl + "employees.json")
      .then((res) => res.json())
      .then((data) => {
        setEmployeeData(data);
      });
  });

  return (
    <div className="Header">
      <Link to="/" className="Logo">
        <img src={brandLogo} alt="Brand Logo" className="Logo_img"></img>
        <h1 className="Logo_text">Employee Directory</h1>
      </Link>
      <div className="Search">
        <input
          type="text"
          placeholder="Search for an employee"
          className="SearchBox"
          onChange={searchEmployees}
          value={inputValue}
          onFocus={() => {
            setInputValue("");
          }}
        ></input>
        <img src={searchIcon} alt="Search Icon" className="SearchIcon"></img>
        {showResults && (
          <div className="SearchResults">
            {!searchResults.length && (
              <div className="NoResults">No results found</div>
            )}
            {searchResults.map((id) => {
              return (
                <div
                  key={id}
                  className="SearchResultItem"
                  onClick={() => {
                    navigateTo(id);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {employeeData[id].fullName} , {employeeData[id].email}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
