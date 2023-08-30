import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import CategoriesRow from '../components/CategoriesRow'
import Filter from '../components/FilterMenü'
import EventCategory from '../components/EventCategory'
import AdvEvent from '../components/AdvEvent'
import { GlobalContext } from '../Context/GlobalState'


const Home = () => {
const {data}=useContext(GlobalContext)


  return (
    <>
     <Header/>
     <Filter></Filter>
     <EventCategory/>
  
     <CategoriesRow/>
     <AdvEvent></AdvEvent>
  
    
    </>
  )
}

export default Home