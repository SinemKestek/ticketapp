
import React,{useState,useContext,useEffect,createContext} from "react";

const URL="http://localhost:3000/posts";

export const GlobalContext=createContext();
export const GlobalProvider= ({children})=>{
  const[searchTerm,SetSearchTerm]=("");
  const [data,setData]=useState([]);
  const [resultTitle,setResultTitle]=("")



 const fetchData=async()=>{
    try{
        const response=await fetch(`${URL}`);
        const data=await response.json();
        setData(data)
     
        //  console.log(data);
    
    }
    catch(error){
        console.log(error)
    }
 };

 useEffect(()=>{
    fetchData()
 },[])



 return (
     <GlobalContext.Provider value={{data}}> {children} </GlobalContext.Provider>
 )

}

export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}