import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import RNBootSplash from 'react-native-bootsplash';

import Slider from '../screens/Slider';
import Intro from '../screens/Intro';
import MainHeading from '../components/MainHeading';
import { Input } from '../components';
import { SignIn } from '../screens';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import ChangePassword from '../screens/ChangePassword';
import Trial from '../screens/Trial';
import Home from '../screens/Home';
import FlatlistHistory from '../components/FlatlistHistory';
import History from '../screens/History';
import Notifications from '../screens/Notifications';
import Result from '../screens/Result';

const AppContainer = () => {
    useEffect(() => {
        setTimeout(() => {
          RNBootSplash.hide({fade: true});
        }, 3000);
        
      }, []);
    
  return (
    <View style={{flex:1}} >
      {/* <Slider/> */}
      {/* <Intro/> */}
      {/* <SignIn/> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPassword/> */}
      {/* <ChangePassword/> */}
      {/* <Trial/> */}
      {/* <Home/> */}
      {/* <History/> */}
      {/* <FlatlistHistory/> */}
      {/* <Signup/> */}
      {/* <MainHeading/> */}
      {/* <Notifications/> */}
      <Result/>
    </View>
  )
}

export default AppContainer