import React from 'react'
import List from '../components/List'
import  { useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


//tıklanan lokasyonda olan etkinlinler çıkacak
//locasyonu başlık olarak alll
//listedendetailPage routiing
const Location = () => {


  const {data}=useContext(GlobalContext)
     

  return (
    <div>

  {/* <LocationHeader></LocationHeader> */}


    <List></List>



    </div>
  )
}

export default Location