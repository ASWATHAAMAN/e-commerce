import { createContext, useState } from "react";

const userContext = createContext();
const userProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const values = { user, setUser };
  <userContext.Provider value={values}>{Children}</userContext.Provider>;
};
export { userProvider };
