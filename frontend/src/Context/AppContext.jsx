/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState } from 'react';



export const AppContext = createContext();

const AppContextProvider = (props) =>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL_REGISTER;
    // const [token, setToken] = useState('null')
    const [token, setToken] = useState(() => localStorage.getItem("token"));


    const value = {
        token, setToken,
        backendUrl
    }

  return (
    <AppContext.Provider value = {value}>
        {props.children }

    </AppContext.Provider>
   
  );
};
export default AppContextProvider