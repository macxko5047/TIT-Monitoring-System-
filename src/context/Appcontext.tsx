import React, { useState, useEffect, createContext } from "react";

const context:any = createContext('');

export function AppcontextProvider({ children }: any) {
  const [appstate  , setAppstate] = useState<any>({});

  useEffect(() => {
    console.log({ appstate, setAppstate });
  }, [appstate, setAppstate]);
  return (
    <div>
    <context.Provider value={{ appstate, setAppstate }}>
      {children}
    </context.Provider>
    </div>
  );
}
export default context;