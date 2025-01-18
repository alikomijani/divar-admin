import { BASE_URL } from "@/config.server";
import axios from "axios";
const Axios = axios.create({
  baseURL: BASE_URL,
});

export default Axios;
