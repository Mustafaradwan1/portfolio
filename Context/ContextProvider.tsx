'use client'
import { createContext, useState,useContext  } from "react";
  type ActiveSectionContextType = {
    ActiveData: string;
    setActiveData: React.Dispatch<React.SetStateAction<string>>;
    OnClick: number;
    setOnClick: React.Dispatch<React.SetStateAction<number>>;
  };
  

export const contextData = createContext<ActiveSectionContextType | null>(null)


const ContaxtProvider = ({children}:{children:React.ReactNode})=>{
     const [ActiveData,setActiveData] = useState<string>("Home")
     const [OnClick,setOnClick] = useState(0)
    return <contextData.Provider value={{ActiveData,setActiveData,OnClick,setOnClick}}>
    {children}
  </contextData.Provider>
}

export default ContaxtProvider

export function useActiveSectionContext() {
    const context = useContext(contextData);
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
      );
    }
  
    return context;
  }