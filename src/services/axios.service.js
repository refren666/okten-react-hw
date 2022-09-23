import axios from "axios";

import { baseURL } from '../utils/urls';

export const axiosService = axios.create({ baseURL })