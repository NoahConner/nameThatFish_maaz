import axios from 'axios';
import {API} from '../constants';

export const userProfile = ({userToken}) => {
    return axios.post(API.profile,{}, {
        headers: {
            'Accept': `application/json`,
            'Authorization': `Bearer ${userToken}`,
          },
    });
  };
  
  export const deleteUser = ({id}) => {
    return axios.delete(`${API.deleteUser}${id}`, {
    });
  };
  
  export const updateUserProfile = ({id,name,email,contactNumber,address,countryCode}) => {
    return axios.post(API.updateUser, {
        id,
        name,
        email,
        phone:contactNumber,
        address,
        code:countryCode
    });
  };

  export const uploadDp = ({id,imageUrl}) => {
    return axios.post(API.uploadProfilePic, {
        id,
      user_img:imageUrl
    });
  };

  export const uploadProfilePicture = ({imgUri}) => {
    // const formData = new FormData();
    // formData.append('image', {
    //   uri: imgUri,
    //   name: 'image.jpg',
    //   type: 'image/jpeg',
    // });
  
    return axios.post(API.userImage, {
      image:imgUri
    });
  };
  
  export const userSupport = ({userToken,helpQuery }) => {
    return axios.post(`${API.userSupport}?description=${helpQuery}`,{}, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
            'Accept': `application/json`,
          },
    });
  };

  export const uploadBase64 = ({base64}) => {
    return axios.post(API.postBase64, {
      image:base64
    });
  };