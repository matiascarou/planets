import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import singlePlanetReducer from "./singlePlanet";
import propertiesTabReducer from "./propertiesTab";

//{serializableCheck: false}

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singlePlanet: singlePlanetReducer,
    propertiesTab: propertiesTabReducer
  },
});

export default store;
