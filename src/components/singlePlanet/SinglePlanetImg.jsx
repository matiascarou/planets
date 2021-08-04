import React from "react";

const SinglePlanetImg = ({ img, singlePlanet }) => {
  return Object.values(img).length < 2 ? (
    <div className="planetImage">
      <img src={img.default} alt={`${singlePlanet.name} fails loading`}></img>
    </div>
  ) : (
    <div className="planetImage">
      <div className="planetImageDescriptionAndGeology">
        <img
          src={img.planet.default}
          alt={`${singlePlanet.name} fails loading`}
        ></img>
        <img
          className="planetImageGeology"
          src={img.geology.default}
          alt={`${singlePlanet.name} fails loading`}
        ></img>
      </div>
    </div>
  );
};

export default SinglePlanetImg;
