import axios from 'axios';
import { createBrowserHistory } from 'history';

import { baseURL } from '../configs';
import { authService } from './auth.service';

export const history = createBrowserHistory();

export const axiosService = axios.create({ baseURL });

let isRefreshingToken = false;

// 1st param - callback with config; 2nd - callback for handling errors
// interceptors can influence every request and response like middleware; config = request info
axiosService.interceptors.request.use((config) => {
  // find if we have access token and add it to the header of request by modifying config
  const access = authService.getAccessToken();

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config; // like next()
});

// interceptor to refresh tokens when access token expires
axiosService.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const refreshToken = authService.getRefreshToken();

    if (error.response?.status === 401 && refreshToken && !isRefreshingToken) {
      isRefreshingToken = true;

      try {
        const tokens = await authService.refresh(refreshToken); // post request on server to get new token pair
        authService.setTokens(tokens);
      } catch (err) {
        // refresh token has expired or request to refresh token was invalid etc.
        authService.deleteTokens();
        history.replace('/login?expiredSession=true');
      } finally {
        isRefreshingToken = false;
      }

      return axiosService(error.config); // doing same REQUEST as before error, but now with refreshed token
    }

    // if it was not Unauthorized error, return it as any other error
    return Promise.reject(error)
  }
);
