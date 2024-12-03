import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounceFn, filteredData } from "../utils/helpers";

const Header = ({ getImages, backImage, searchImage }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const data = useSelector((state) => state.data);

  const debounceFilterChange = debounceFn(
    (e) => filteredData(e, dispatch, data),
    400
  );
  return (
    <header className="header">
      <div className="parallex-container">
        <div className="leftContainer">
          <img src={getImages(backImage)} height={30} width={30} />
          {!isInputVisible && (
            <h1 className="header-heading">Romantic Comedy</h1>
          )}
        </div>
        <div className="rightContainer">
          {isInputVisible && (
            <input
              ref={inputRef}
              type="text"
              onChange={debounceFilterChange}
              placeholder="Enter text"
            />
          )}
          <img
            onClick={() => setIsInputVisible(!isInputVisible)}
            src={getImages(searchImage)}
            height={30}
            width={30}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
