import axios from "axios";
import AxiosInstance from "../config/AxiosInstance";
import APIConstants from "../config/APIConstants";

const sendGet = async (endPoint: string, token?: string) => {
  try {
    let axiosInstance = await AxiosInstance(token);
    const apiResponse = await axiosInstance.get(
      APIConstants.BASE_URL + endPoint
    );
    return apiResponse;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response;
    } else {
      return err;
    }
  }
};
export { sendGet };
