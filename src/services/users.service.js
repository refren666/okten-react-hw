import { axiosService } from './axios.service';
import { endpoints } from '../utils/urls';

export const usersService = {
  getAll: () => axiosService.get(endpoints.users).then((data) => data.data),
  create: (user) =>
    axiosService.post(endpoints.users, user).then((data) => data.data),
};
