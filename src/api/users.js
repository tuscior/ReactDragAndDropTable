import axios from "axios";

export default axios.create({
  baseURL: "https://basic-api-recruitment.herokuapp.com/users"
});
