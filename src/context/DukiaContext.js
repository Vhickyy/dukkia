import { createContext, useContext,useState } from "react";
const DukiaContext = createContext({})
export const DukiaContextProvider = ({children})=>{
    const [show,setShow] = useState(false)
    const openSidebar = ()=>{
        setShow(true)
    }
    const closeSidebar = ()=>{
        setShow(false)
    }
    return (
        <DukiaContext.Provider value={{openSidebar,closeSidebar,show}}>
            {children}
        </DukiaContext.Provider>
    )
}
export const useDukia = ()=>{
    return useContext(DukiaContext)
}