import React, { useState } from "react";
import Header from "./Header";
import planets from "../../assets/data.json";

const HeaderContainer = () => {
  const [isBoxHovered, setIsBoxHovered] = useState("");
  const [isBoxClicked, setIsBoxClicked] = useState("Mercury");

  const onMouseOverHandler = (planetName) => {
    setIsBoxHovered(planetName);
  };

  const onMouseLeaveHandler = () => {
    setIsBoxHovered("");
  };

  const clickHandler = (planetName) => {
    setIsBoxClicked(planetName);
  };

  return (
    <Header
      planets={planets}
      onMouseOverHandler={onMouseOverHandler}
      isBoxHovered={isBoxHovered}
      isBoxClicked={isBoxClicked}
      clickHandler={clickHandler}
      onMouseLeaveHandler={onMouseLeaveHandler}
    />
  );
};

export default HeaderContainer;
