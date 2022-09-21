import { axiosService } from './axios.service';
import { endpoints } from '../utils/urls';

export const usersService = {
  getAll: () => axiosService.get(endpoints.users).then((res) => res.data),
  getPostsByUserId: (id) => axiosService.get(`${endpoints.users}/${id}${endpoints.posts}`).then(res => res.data),
};
