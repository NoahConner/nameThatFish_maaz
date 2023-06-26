import axios from 'axios';
import {API} from '../constants';

export const postImgUrlhistory = ({userToken, imgUrl}) => {
  return axios.post(
    `${API.postUrlHistory}`,
    {
      img_url: imgUrl,
    },
    {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Accept': `application/json`,
      },
    },
  );
};


export const getImgUrlhistory = ({userToken}) => {
  return axios.get(
    `${API.getUrlHistory}`,
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${userToken}`,
      },
    },
  );
};

export const deleteHistory = ({userToken}) => {
  return axios.delete(
    `${API.deleteHistory}`,
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${userToken}`,
      },
    },
  );
};