import { BASE_URL } from "@/config.server";
import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:8000",
});

export default Axios;
