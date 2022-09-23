import { endpoints } from "../utils/urls";
import { axiosService } from "./axios.service";

export const commentsService = {
  create: (comment) =>
    axiosService.post(endpoints.comments, comment),
};