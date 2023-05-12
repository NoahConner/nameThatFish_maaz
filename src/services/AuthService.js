import axios from 'axios';
import {API} from '../constants';

export const login = ({email, password}) => {
  return axios.post(API.login, {
    email,
    password,
  });
};

export const logout = ({userToken}) => {
  return axios.post(API.logout, {
    headers: {
      'X-Authorization': `${userToken}`,
    },
  });
};

export const signup = ({first_name, last_name, email, password}) => {
  return axios.post(API.signup, {
    email,
    password,
    first_name,
    last_name,
  });
};