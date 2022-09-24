import { endpoints } from "../utils/urls";
import { axiosService } from "./axios.service";

export const carsService = {
  getAll: () =>
    axiosService
      .get(endpoints.cars)
      .then((data) => data.data),
  
  create: (car) =>
    axiosService
      .post(endpoints.cars, car)
      .then((data) => data.data),
  
  deleteById: (carId) =>
    axiosService
      .delete(`${endpoints.cars}/${carId}`, carId)
      .then((data) => data.data),
  
  update: (carId, car) =>
    axiosService
      .patch(`${endpoints.cars}/${carId}`, car)
      .then((data) => data.data),
};