import axios from 'axios';
import {API} from '../constants';

export const getPrivacyPolicy = () => {
    return axios.get(API.privacyPolicy);
  };
  
  export const getTermsCondition = () => {
    return axios.get(API.termsCondition);
  };
  
  export const getAboutUs = () => {
    return axios.get(API.aboutUs);
  };
  