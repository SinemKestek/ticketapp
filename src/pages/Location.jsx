import React from 'react'
import List from '../components/List'
import  { useContext} from 'react'
import {  useGlobalContext } from '../Context/GlobalState'
import { useParams } from 'react-router-dom'


//tıklanan lokasyonda olan etkinlinler çıkacak
//locasyonu başlık olarak alll
//listedendetailPage routiing

const Location = () => {

const {loc}=useParams()
// console.log(loc)
  const {data}=useGlobalContext()
  const filteredLocation=data.filter((data)=>data.location==loc)
   console.log(filteredLocation)
 

  return (
    <div>
         <h3>{loc}</h3>
         {filteredLocation.map((loc)=>(
          <p>{loc.title}</p>
         ))}
  {/* <LocationHeader></LocationHeader> */}
   {
     filteredLocation.map((loc)=>{
      <List location={loc}></List>

     })
 
   }
   



    </div>
  )
}

export default Location