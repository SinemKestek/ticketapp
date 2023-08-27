import React from 'react'
import Header from '../components/Header'
import CategoriesRow from '../components/CategoriesRow'
import Filter from '../components/FilterMenü'

const Home = () => {


  return (
    <>
     <Header/>
     <Filter></Filter>
   
     <CategoriesRow/>
    
    </>
  )
}

export default Home