import { endpoints } from '../utils/urls';
import { axiosService } from './axios.service';

export const jsonPlaceholderService = {
  getAllTodos: () =>
    axiosService.get(endpoints.todos).then(({ data }) => data),
  getAllAlbums: () =>
    axiosService.get(endpoints.albums).then(({ data }) => data),
  getAllComments: () =>
    axiosService.get(endpoints.comments).then(({ data }) => data),
  getCommentPost: (postId) =>
    axiosService.get(`${endpoints.posts}/${postId}`).then(({ data }) => data),
};