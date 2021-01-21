import { GET_PROPERTICES, GET_PROPERTIES_DETAILS } from "../action/types";
const initalState = {};

export const properties = (state = initalState, action) => {
  switch (action.type) {
    case GET_PROPERTICES:
      const land = action.payload.filter((fil) => fil.type === "land");
      const house = action.payload.filter((fil) => fil.type === "house");
      return {
        ...state,
        properties: action.payload,
        land: land,
        house: house,
      };

    case GET_PROPERTIES_DETAILS:
      console.log('detailed product',action.payload);
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
