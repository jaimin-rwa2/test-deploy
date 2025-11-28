import { createContext, useContext, useEffect, useState } from "react";

// 1: context to store data
export const userContext = createContext();

// 2: to provide context data to child
export default function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

// 3. custom hook to access user context
export const useUser = () => useContext(userContext);
