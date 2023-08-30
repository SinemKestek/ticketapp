import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/categoriespage.scss'
import {CiCalendarDate} from 'react-icons/ci'
import PreviousSlider from '../components/PreviousSlider'
 const CategoryDetail = () => {
    let {categoryName}=useParams()


  return (
    <div className='container my-4'>
     
     <div className='banner'>
      <div className='bannerTitle'>  <h4>{categoryName}</h4></div>
      <img className='bannerjpg' src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
     </div>
      <PreviousSlider></PreviousSlider>
     <div className='my-4 cardContainer'>
   
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>  <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>
    <div className='cardWrapper   '>
     <div className='cardBanner' >
      <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" /> 
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div className='eventLoc'><small>İstanbul,Fişekhane</small></div>
     <div className='eventTime' ><CiCalendarDate size={19}></CiCalendarDate><span className='small'> 22.09.2023</span></div>
  </div>
    </div>


     </div>
   
    
    
    
    </div>
  )
}

export default CategoryDetail