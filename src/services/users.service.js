import { apiUrls, jsonPlaceholderEndpoints } from '../utils/urls';
import axiosService from './axios.service';

export const usersService = {
  getAll: () =>
    axiosService(apiUrls.jsonPlaceholderApi)
      .get(jsonPlaceholderEndpoints.users)
      .then((res) => res.data),
};
