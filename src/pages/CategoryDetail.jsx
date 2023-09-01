import React, { useEffect } from 'react'
import  { useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/categoriespage.scss'
import {CiCalendarDate} from 'react-icons/ci'
import PreviousSlider from '../components/PreviousSlider'
import { GlobalContext } from '../Context/GlobalState'

 const CategoryDetail = () => {
    let {categoryName}=useParams()
    const {data}=useContext(GlobalContext)



 const dtCategory= data.filter((dt)=> dt.category==categoryName)
  // console.log(dtCategory)

  return (
    <div className='container my-4'>
     
     <div className='banner'>
      <div className='bannerTitle'><h4>{categoryName}</h4></div>
      <img className='bannerjpg' src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
     </div>
      <PreviousSlider></PreviousSlider>
     <div className='my-4 cardContainer'>
       { dtCategory.map((dt,id)=>(
       <Link to={`/detailpage/${dt.id}`} className='link'>
       <div className='cardWrapper' key={id} >
       <div  className='cardBanner'> <img src={dt.img.banner} alt={dt.title} /> 
         <div className='categoryInf'>
         <h5>{dt.title}</h5>
        <div className='eventLoc'><small>{dt.location},{dt.city}</small></div>
       <div className='eventTime'><CiCalendarDate size={19}></CiCalendarDate><span className='small'>{dt.released}</span></div>
     </div>
     </div>  

</div>


     </Link>

  )) }
     </div>
    </div>
  )
}

export default CategoryDetail