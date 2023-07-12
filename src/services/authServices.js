import axios from 'axios';
import {API} from '../constants';

export const login = ({email, password,device_token}) => {
  return axios.post(API.login, {
    email,
    password,
    device_token
  });
};

export const signup = ({
  fullname,
  contact,
  email,
  password,
  confirmPassword,
  countryCode,
}) =>
  axios.post(API.signup, {
    headers: {
      'Content-Type': `application/json`,
    },
    name: fullname,
    email,
    password,
    phone: contact,
    password_confirmation: confirmPassword,
    code: countryCode,
  });

export const changePassword = ({
  userToken,
  Password,
  newPassword,
  confirmPassword,
}) => {
  console.log(`${userToken} ${Password} ${newPassword} ${confirmPassword}`);
  return axios.post(
    API.changePass,
    {
      old_password: Password,
      new_password: newPassword,
      confirm_password: confirmPassword,
    },
    {
      headers: {
        Accept: `application/json`,
        Authorization: `Bearer ${userToken}`,
      },
    },
  );
};

export const forgotPass = ({ email, changePassword, confirmPassword}) => {
  return axios.post(API.forgotPassword, {
    email,
    password: changePassword,
    confirm_password: confirmPassword,
  });
};
export const checkOTPValid = ({code, email}) => {
  return axios.post(API.OTPCheck, {
    otp:code,
    email,
    
  });
};
export const sendMail = ({email}) => {
  return axios.post(API.sendMail, {
    email,
  });
};

export const googleLogin = ({email,name,user_img,password,device_token}) => {
  return axios.post(API.googleLogin, {
    name,
    email,
    user_img,
    password,
    device_token
  });
};

export const logout = ({userToken}) => {
  return axios.get(API.logout, {
    headers: {
      Accept: `application/json`,
      Authorization: `Bearer ${userToken}`,
    },
  });
};
