import React from 'react'

import '../styles/card.scss'
 //katewgoriye tıklayınca list sayfasına etkinlikleri listele
const EventCart = ({data}) => {
  return (
    <div>

  <div className='eventContainer '>
    <div className=' cardBanner' >
        <img src={data.img} alt="" />
    </div>
    <div className='categoryInf'>
     <h5> {data.tittle}</h5>
  </div>
  </div>
    </div>
  )
}

export default EventCart