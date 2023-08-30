import React from 'react'

import '../styles/card.scss'
import { Navigate, useNavigate } from 'react-router-dom'
 //katewgoriye tıklayınca list sayfasına etkinlikleri listele
const EventCart = ({data}) => {
  const navigate=useNavigate()
  const routePage=(e)=>{
    console.log(e.target)
  navigate("/Filter")
 }


  return (
   
  <div className='eventContainer  ' onClick={routePage}>
    <div className=' cardBanner' >
        <img src={data.img} alt="" />
    </div>
    <div className='categoryInf'>
     <h5>{data.tittle}</h5>
  </div>
  </div>
 
  )
}

export default EventCart