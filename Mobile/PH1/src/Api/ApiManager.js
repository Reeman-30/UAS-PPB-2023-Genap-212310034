import axios from 'axios';

const ApiManager = axios.create({
  baseURL: "http://localhost:3306/Api",
  responseType: "json",
  withCredentials: true,
});

export default ApiManager;
