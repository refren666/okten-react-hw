import { urls } from '../configs';
import { axiosService } from './axios.service';

export const carService = {
  getAll: (page=1) =>
    axiosService.get(urls.cars, { params: { page } }).then(({ data }) => data),
  create: (car) => axiosService.post(urls.cars, car).then(({ data }) => data),
  deleteById: (id) =>
    axiosService.delete(`${urls.cars}/${id}`, id).then(({ data }) => data),
  addPhotoById: (id, data) =>
    axiosService.patch(`${urls.cars}/${id}`, data).then(({ data }) => data),
};
