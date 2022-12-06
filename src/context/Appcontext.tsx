import React, { useState, useEffect, createContext } from "react";

const context:any = createContext('');

export function AppcontextProvider({ children }: any) {
  const [appstate  , setAppstate] = useState<any>({});

  useEffect(() => {
    console.log({ appstate, setAppstate });
  }, [appstate, setAppstate]);
  return (
    <context.Provider value={{ appstate, setAppstate }}>
      {children}
    </context.Provider>
  );
}
export default context;