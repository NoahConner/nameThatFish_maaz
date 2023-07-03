import React, {useState} from 'react';
import AppContext from './src/context/AuthContext';
import AppContainer from './src/navigation';

const App = () => {
  const [userToken, setuserToken] = useState(null);
  const [userId, setuserId] = useState(null);
  const [deviceToken, setDeviceToken] = useState(null);
  const [fcmtoken ,setFcm] =useState(null)

  const userSettings = {
    userToken,
    setuserToken,
    userId,
    setuserId,
    deviceToken,
    setDeviceToken,
    setFcm,
    fcmtoken
  };

  return (
    <AppContext.Provider value={userSettings}>
      <AppContainer />
    </AppContext.Provider>
  );
};

export default App;
