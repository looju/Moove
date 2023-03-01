import React, { createContext, useState } from "react";


export const UserData = createContext();


export const UserDataProvider = ({ children }) => {
  

  const [userTel, setUserTel] = useState(null);
  const [userName, setUserName] = useState("");

  return (
    <UserData.Provider
      value={{
        userTel,
        setUserTel,
        userName,
        setUserName,
      }}
    >
      {children}
    </UserData.Provider>
  );
};
