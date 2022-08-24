import axios from "axios";
import { API_URL } from "./config";
export const ApiService = {
  getOneLaunch: (id) => {
    return axios.get(API_URL + "/launches/" + id);
  },
};
