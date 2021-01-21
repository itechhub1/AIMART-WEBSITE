import axios from "../../api/auhothorizedAPI";
import { GET_PROPERTICES, GET_PROPERTIES_DETAILS } from "../types";

export const getPropertices = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/aimart/v1/property/get");
    console.log("properties", res.data.properties);
    dispatch({
      type: GET_PROPERTICES,
      payload: res.data.properties,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPropertiesDetails = (propertyId) => async (dispatch) => {
  console.log(propertyId);
  try {
    const res = await axios.get(`/api/aimart/v1/property/get?id=${propertyId}`);

    console.log("details", res.data.property);
    dispatch({
      type: GET_PROPERTIES_DETAILS,
      payload: res.data.property,
    });
  } catch (error) {
    console.log(error);
  }
};
