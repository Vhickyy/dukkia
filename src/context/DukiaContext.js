import { createContext, useContext } from "react";
const DukiaContext = createContext({})
const DukiaContextProvider = ({children})=>{
    return (
        <DukiaContext.Provider>
            {children}
        </DukiaContext.Provider>
    )
}
export const useDukia = ()=>{
    return useContext(DukiaContext)
}