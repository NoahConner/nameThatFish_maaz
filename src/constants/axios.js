
const baseURL = 'https://buybestthemes.com/mobile_app_api/nameThatfish/api';

export default API = {
  // authentication management
  signup: `${baseURL}/auth/register`,
  login: `${baseURL}/auth/login`,
  profile: `${baseURL}/profile`,
  changePass: `${baseURL}/change-pass`,
  sendMail: `${baseURL}/mail`,
  forgotPassword: `${baseURL}/forgot-password`,
  deleteUser: `${baseURL}/user/`,
  updateUser: `${baseURL}/user-update`,
  userImage: `${baseURL}/image-upload`,
  postBase64: `${baseURL}/image-upload-64`,
  googleLogin: `${baseURL}/auth/google-login`,
  userSupport: `${baseURL}/support`,
  logout: `${baseURL}/logout`,
  termsCondition:`${baseURL}/get-term`,
  privacyPolicy:`${baseURL}/get-privacy`,
  aboutUs:`${baseURL}/get-about`,
  postUrlHistory:`${baseURL}/history`,
  getUrlHistory:`${baseURL}/search-history`,
  deleteHistory:`${baseURL}/delete-history`,
  uploadProfilePic:`${baseURL}/img_update`,
  getUserData:`${baseURL}/profile`,
};