import React from 'react'

import '../styles/card.scss'
 //katewgoriye tıklayınca list sayfasına etkinlikleri listele
const EventCart = ({title}) => {
  return (
    <div>

  <div className='eventContainer '>
    <div className=' cardBanner' >
        <img src="https://ippasso.mediatriple.net/event/20062023134937-imany_piu_20062023.jpg" alt="" />
    </div>
    <div className='categoryInf'>
     <h5> {title}</h5>
  </div>
  </div>
    </div>
  )
}

export default EventCart