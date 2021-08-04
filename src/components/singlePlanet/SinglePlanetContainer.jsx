import React from "react";
import SinglePlanet from "./SinglePlanet";
import { useDispatch, useSelector } from "react-redux";
import { setSinglePlanet } from "../../store/singlePlanet";
import { useEffect, useState } from "react";
import planets from "../../assets/data.json";

const SinglePlanetContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { name } = match.params;
  const result = planets.filter((planet) => planet.name.toLowerCase() === name);
  dispatch(setSinglePlanet(result[0]));
  const { singlePlanet } = useSelector((store) => store);
  const [imgPath, setImgPath] = useState({});
  const [colorBoolean, setColorBoolean] = useState({});
  const [planetContent, setPlanetContent] = useState({});

  useEffect(() => {
    setImgPath(
      require(`../../assets/planet-${singlePlanet.name.toLowerCase()}.svg`)
    );
    setColorBoolean({ planet: true });
    setPlanetContent(singlePlanet.overview);
  }, [singlePlanet]);

  const clickHandler = (e) => {
    const { name } = e.target;
    const colorBooleanChecker = Object.keys(colorBoolean).includes(name);
    switch (name) {
      case "planet":
        setImgPath(
          require(`../../assets/planet-${singlePlanet.name.toLowerCase()}.svg`)
        );
        if (!colorBooleanChecker)
          setColorBoolean({ [name]: !colorBoolean[name] });
        setPlanetContent(singlePlanet.overview);
        break;
      case "internal":
        setImgPath(
          require(`../../assets/planet-${singlePlanet.name.toLowerCase()}-internal.svg`)
        );
        if (!colorBooleanChecker)
          setColorBoolean({ [name]: !colorBoolean[name] });
        setPlanetContent(singlePlanet.structure);
        break;
      case "geology":
        setImgPath({
          planet: require(`../../assets/planet-${singlePlanet.name.toLowerCase()}.svg`),
          geology: require(`../../assets/geology-${singlePlanet.name.toLowerCase()}.png`),
        }
        );
        if (!colorBooleanChecker)
          setColorBoolean({ [name]: !colorBoolean[name] });
        setPlanetContent(singlePlanet.geology);
        break;
    }
  };

  return (
    <SinglePlanet
      clickHandler={clickHandler}
      img={imgPath}
      colorBoolean={colorBoolean}
      planetContent={planetContent}
    />
  );
};

export default SinglePlanetContainer;
