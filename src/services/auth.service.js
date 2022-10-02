import { urls } from '../configs';
import { axiosService } from './axios.service';

const _accessTokenKey = 'access';
const _refreshTokenKey = 'refresh';

export const authService = {
  register: (user) =>
    axiosService.post(urls.users, user).then(({ data }) => data),
  login: (user) =>
    axiosService.post(urls.auth.login, user).then(({ data }) => data),
  refresh: (refreshToken) =>
    axiosService
      .post(urls.auth.refresh, { refresh: refreshToken })
      .then(({ data }) => data),

  setTokens: ({ access, refresh }) => {
    localStorage.setItem(_accessTokenKey, access);
    localStorage.setItem(_refreshTokenKey, refresh);
  },
  deleteTokens: () => {
    localStorage.removeItem(_accessTokenKey);
    localStorage.removeItem(_refreshTokenKey);
  },
  getAccessToken: () => localStorage.getItem(_accessTokenKey),
  getRefreshToken: () => localStorage.getItem(_refreshTokenKey),
};
