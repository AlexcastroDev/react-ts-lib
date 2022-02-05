import React, { createContext, FunctionComponent, useState } from "react";

const SwapiContext = createContext({})

export const SwapiProvider: FunctionComponent = ({ children }) => {
  const [number, setNumber] = useState(0)
  React.useEffect(() => {
    setNumber(1)
    console.log(number)
  }, [number])
  return (
    <SwapiContext.Provider value={{ test: "text"}}>
      { children }
    </SwapiContext.Provider>
  )
}