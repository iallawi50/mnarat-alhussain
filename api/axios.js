import axios from "axios";

export default axios.create({
  baseURL: "https://manarat.svod.app/",
  withCredentials: true,
});
