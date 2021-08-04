import React from "react";
import { Link } from "react-router-dom";
import planetColorChanger from "../../helpers/planetColorChanger";

const NavBar = ({
  planets,
  onMouseOverHandler,
  isBoxHovered,
  isBoxClicked,
  clickHandler,
  onMouseLeaveHandler,
}) => {
  const navBarTitleBoxes = () => ({
    height: "100%",
    fontWeight: "200",
    fontSize: "0.8em",
    color: "white",
    padding: "0.8vw",
    margin: 0,
    textAlign: "center",
  });

  const navBarTitleBorderDiv = (planetName) => ({
    borderTopStyle:
      planetName === isBoxHovered || planetName === isBoxClicked
        ? "solid"
        : "none",
    borderTopColor: planetColorChanger(planetName),
    borderTopLength: "2px",
  });

  return (
    <div>
      <nav className="navBarMainDiv">
        <h1 className="navBarTitle">THE PLANETS</h1>
        <div className="navBarPlanetsDiv">
          {planets.map((planet, index) => { 
            return (
              <div
                key={planet.name}
                style={navBarTitleBorderDiv(planet.name)}
                onMouseOver={() => onMouseOverHandler(planet.name)}
                onClick={() => clickHandler(planet.name)}
                onMouseLeave={() => onMouseLeaveHandler()}
              >
                <Link
                  to={`/${planet.name.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    name={planet.name}
                    className="navBarTitleBoxes"
                    style={navBarTitleBoxes()}
                  >
                    {planet.name.toUpperCase()}
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      {/* <hr style={{margin: 0}}/> */}
    </div>
  );
};

export default NavBar;
