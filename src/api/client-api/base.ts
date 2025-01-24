import { useAuth } from "@/components/AuthProvider";
import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:8000",
});

export default Axios;
