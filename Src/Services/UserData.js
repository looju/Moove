import React, { createContext, useState } from "react";

export const UserData = createContext();

export const UserDataProvider = ({ children }) => {
  const [verificationId, setVerificationId] = useState(null);
  const [userTel, setUserTel] = useState(null);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [userVerifiedNumber,setUserVerifiedNumber] = useState(null);

  return (
    <UserData.Provider
      value={{
        userTel,
        setUserTel,
        userName,
        setUserName,
        verificationId,
        setVerificationId,
        userData,
        setUserData,
        userVerifiedNumber,
        setUserVerifiedNumber
      }}
    >
      {children}
    </UserData.Provider>
  );
};
