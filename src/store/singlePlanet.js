import { createAction, createReducer } from "@reduxjs/toolkit";
import planets from "../assets/data.json";

const initialState = planets[0]

export const setSinglePlanet = createAction("SINGLEPLANET");

const singlePlanetReducer = createReducer(initialState, {
  [setSinglePlanet]: (state, action) => {
    return (state = action.payload);
  },
});

export default singlePlanetReducer;
