import React, {useState, createContext, useContext} from 'react';

const Context = createContext();
export const useAuth = () => useContext(Context);

export const AuthProvider = ({children}) => {
  const [userToken, setuserToken] = useState(null);
  const [userId, setuserId] = useState(null);

  return (
    <Context.Provider value={{userToken, setuserToken, userId, setuserId}}>
      {children}
    </Context.Provider>
  );
};