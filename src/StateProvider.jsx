import react, { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

//context store
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState , children  }) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
export  const useStateValue = () => useContext(StateContext)

