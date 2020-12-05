import Axios, { AxiosInstance } from "axios";
import { API_URL } from "../constans";

export const instance: AxiosInstance = Axios.create({
  baseURL: API_URL,
});
