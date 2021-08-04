import React from "react";
import SinglePlanetProperties from "./SinglePlanetProperties";
import { useSelector } from "react-redux";
import SinglePlanetButtons from "./SinglePlanetButtons";
import SinglePlanetContent from "./SinglePlanetContent";
import SinglePlanetImg from "./SinglePlanetImg";

const SinglePlanet = ({ clickHandler, img, colorBoolean, planetContent }) => {
  const { singlePlanet } = useSelector((store) => store);

  return !!Object.entries(singlePlanet).length ? (
    <div className="singlePlanetMainDiv">
      <div className="planetColumnAndPlanetPropertiesDiv">
        <div className="planetAndColumnDescriptionDiv">
          <SinglePlanetImg img={img} singlePlanet={singlePlanet} />
          <div className="singlePlanetDescriptionColumnDiv">
            <SinglePlanetContent
              singlePlanet={singlePlanet}
              planetContent={planetContent}
            />
            <SinglePlanetButtons
              clickHandler={clickHandler}
              colorBoolean={colorBoolean}
              singlePlanet={singlePlanet}
            />
          </div>
        </div>
        <SinglePlanetProperties />
      </div>
    </div>
  ) : null;
};

export default SinglePlanet;
