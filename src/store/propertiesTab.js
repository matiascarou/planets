import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPropertiesTab = createAction("PROPERTIESTAB");

const propertiesTabReducer = createReducer(
  {
    name: "OVERVIEW",
    imgPath: `planet-earth.svg`,
  },
  {
    [setPropertiesTab]: (state, action) => {
      return (state = action.payload);
    },
  }
);

export default propertiesTabReducer;
