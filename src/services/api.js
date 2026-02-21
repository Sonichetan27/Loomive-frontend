import axios from "axios";
import api from "./api";
const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default API;
