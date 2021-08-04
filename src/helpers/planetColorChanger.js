const planetColorChanger = (planetName) => {
  switch (planetName) {
    case "Mercury":
      return "#419ebb";
    case "Venus":
      return "#eda249";
    case "Earth":
      return "#6d2ed5";
    case "Mars":
      return "#d14c32";
    case "Jupiter":
      return "#d83a33";
    case "Saturn":
      return "#cd5120";
    case "Uranus":
      return "#3fc1a2";
    case "Neptune":
      return "#2c67f0";
  }
};

export default planetColorChanger;
