import React from "react";
import icon from "../../assets/icon-source.svg";

const SinglePlanetContent = ({ singlePlanet, planetContent }) => {
  const tagStyle = () => ({
    color: "#838391",
  });

  return (
    <div className="singlePlanetContentMainDiv">
      <div className="singlePlanetTitleParagraphAndSourceDiv">
        <h1 className="singlePlanetTitleColumn">
          {singlePlanet.name.toUpperCase()}
        </h1>
        <div className="paragraphDiv">
          <p>{planetContent.content}</p>
        </div>
        <div className="sourceAndWikipediaLink">
          <p style={tagStyle()}>Source :&nbsp;</p>
          <div className="sourceAndImgDiv">
            <a
              href={`${planetContent.source}`}
              target="_blank"
              style={tagStyle()}
            >
              Wikipedia
            </a>
            &nbsp;
            <img src={icon}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlanetContent;
