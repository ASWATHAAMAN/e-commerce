import { createContext, useContext, useEffect, useState } from "react";
import {
  createEcommerceDb,
  onAuthStateChangedFunction,
} from "../utils/firebase";

const UserContext = createContext();
const UserProvider = ({ Children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const signOff = onAuthStateChangedFunction((user) => {
      setCurrentUser(user);
      if (user) {
        createEcommerceDb(user);
      }
    });
    return signOff;
  }, []);
  const values = { currentUser, setCurrentUser };
  <UserContext.Provider value={values}>{Children}</UserContext.Provider>;
};

const useUserGlobalContext = () => {
  return useContext(UserContext);
};
export { UserProvider, useUserGlobalContext };
