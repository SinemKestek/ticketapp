import React from 'react'

import '../styles/card.scss'
import {  Link} from 'react-router-dom'
import Filter from '../pages/Filter'
 //katewgoriye tıklayınca list sayfasına etkinlikleri listele
const EventCart = ({data}) => {
//   const navigate=useNavigate()
 
//   const routePage=(e)=>{
//     console.log(e.target)
//   navigate("/`${}`")
//   // navigate({
//   //   pathname:/`${}`
//   // })
//  }


  return (
   
  <Link to="CategoryDetail/`${data.tittle}`"> 
  <div className='eventContainer  ' >
    <div className=' cardBanner' >
        <img src={data.img} alt="" />
    </div>
    <div className='categoryInf'>
     <h5>{data.tittle}</h5>
  </div>
  </div>
  </Link>

 
  )
}

export default EventCart