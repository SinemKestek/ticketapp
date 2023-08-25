import React from 'react'
import Slider from './Slider'
import CategoriesRow from './CategoriesRow'

const Header = () => {

  return (
    <div className='container' >
     <Slider></Slider>
     <CategoriesRow></CategoriesRow>
     <CategoriesRow></CategoriesRow>
     <CategoriesRow></CategoriesRow>
     
     
   </div>
  )
}

export default Header