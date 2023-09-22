import {createContext, JSX, ReactNode, useContext, useReducer} from "react";
import {reducer, initializeArg, IInitializeArg} from "./TimerReducer.tsx";

const TimerContext = createContext();

export const TimerContextProvider = ({children}: {children: ReactNode}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initializeArg);

  return <TimerContext.Provider value={{
    state,
    dispatch
  }}>
    {children}
  </TimerContext.Provider>
}

export const useTimer = () => useContext(TimerContext);
