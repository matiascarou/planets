import React from "react";
import planetColorChanger from "../../helpers/planetColorChanger";

const SinglePlanetButtons = ({ clickHandler, colorBoolean, singlePlanet }) => {
  const isButtonFocused = Object.keys(colorBoolean);

  const buttonStyle = (buttonName, boolean) => ({
    background: boolean.includes(buttonName)
      ? planetColorChanger(singlePlanet.name)
      : "none",
    padding: "1em 2em",
    color: "#fbe9fe",
    fontSize: "1em",
    textAlign: "start", 
    marginTop: "0.5em",
    marginBottom: "0.5em",
    border: "1px solid #393950", 
    outline: "none",
  });

  return (
    <div className="descriptionButtonSelectorDiv">
      <button
        name="planet"
        className={!isButtonFocused.includes("planet") ? "descriptionButton" : ""}
        style={buttonStyle("planet", isButtonFocused)}
        onClick={(e) => clickHandler(e)}  
      >
        OVERVIEW
      </button>
      <button
        name="internal"
        className={!isButtonFocused.includes("internal") ? "descriptionButton" : ""}
        style={buttonStyle("internal", isButtonFocused)}
        onClick={(e) => clickHandler(e)}
      >
        INTERNAL STRUCTURE
      </button>
      <button
        name="geology"
        className={!isButtonFocused.includes("geology") ? "descriptionButton" : ""}
        style={buttonStyle("geology", isButtonFocused)}
        onClick={(e) => clickHandler(e)}
      >
        SURFACE GEOLOGY
      </button>
    </div>
  );
};

export default SinglePlanetButtons;
