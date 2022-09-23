import { endpoints } from "../utils/urls";
import { axiosService } from "./axios.service";

export const postsService = {
  getAll: () => axiosService.get(endpoints.posts).then(data => data.data)
}