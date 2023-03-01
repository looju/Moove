import React, { createContext, useState } from "react";

export const UserData = createContext();

export const UserDataProvider = ({ children }) => {
  const [verificationId, setVerificationId] = useState(null);
  const [userTel, setUserTel] = useState(null);
  const [userName, setUserName] = useState("");

  return (
    <UserData.Provider
      value={{
        userTel,
        setUserTel,
        userName,
        setUserName,
        verificationId,
        setVerificationId,

      }}
    >
      {children}
    </UserData.Provider>
  );
};
