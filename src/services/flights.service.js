import axiosService from './axios.service';
import { apiUrls, spaceXEndpoints } from '../utils/urls';

export const flightsService = {
  getAll: () =>
    axiosService(apiUrls.spaceXApi)
      .get(spaceXEndpoints.launches)
      .then((res) => res.data),
};
