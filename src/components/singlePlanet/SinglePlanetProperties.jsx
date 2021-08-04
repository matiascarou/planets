import React from "react";
import { useSelector } from "react-redux";

const SinglePlanetProperties = () => {
  const { singlePlanet } = useSelector((store) => store);

  return (
    <div className="planetPropertiesMainDiv">
      <div className="planetOnePropertyDiv">
        <h5 className="planetOnePropertyTitle">ROTATION TIME</h5>
        <h2 className="planetOnePropertySubtitle">{singlePlanet.rotation}</h2>
      </div>
      <div className="planetOnePropertyDiv">
        <h5 className="planetOnePropertyTitle">REVOLUTION TIME</h5>
        <h2 className="planetOnePropertySubtitle">{singlePlanet.revolution}</h2>
      </div>
      <div className="planetOnePropertyDiv">
        <h5 className="planetOnePropertyTitle">RADIUS</h5>
        <h2 className="planetOnePropertySubtitle">{singlePlanet.radius}</h2>
      </div>
      <div className="planetOnePropertyDiv">
        <h5 className="planetOnePropertyTitle">AVERAGE TEMP</h5>
        <h2 className="planetOnePropertySubtitle">
          {singlePlanet.temperature}
        </h2>
      </div>
    </div>
  );
};

export default SinglePlanetProperties;
