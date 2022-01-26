import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID D_9caP-EDTlDMGHx1qlPO8gI2Ff0DqvRVgUkXf1pfaU",
  },
});
