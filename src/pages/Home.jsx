import React from 'react'
import Header from '../components/Header'
import CategoriesRow from '../components/CategoriesRow'
import Filter from '../components/FilterMenü'
import EventCategory from '../components/EventCategory'
import AdvEvent from '../components/AdvEvent'

const Home = () => {


  return (
    <>
     <Header/>
     <Filter></Filter>
     <CategoriesRow/>
     <AdvEvent></AdvEvent>
     <EventCategory/>
    
    </>
  )
}

export default Home