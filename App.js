import React, {useState} from 'react';
import AppContext from './src/context/AuthContext';
import AppContainer from './src/navigation';

const App = () => {
  const [userToken, setuserToken] = useState(null);
  const [userId, setuserId] = useState(null);

  const userSettings = {
    userToken,
    setuserToken,
  };

  return (
    <AppContext.Provider value={userSettings}>
      <AppContainer />
    </AppContext.Provider>
  );
};

export default App;
