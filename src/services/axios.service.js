import axios from 'axios';

const axiosService = (url) =>
  axios.create({
    baseURL: url,
  });

export default axiosService;
