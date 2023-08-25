import React from 'react'
import '../styles/card.scss'
import {CiCalendarDate} from 'react-icons/ci'
const CategoriesRow = () => {
  return (
    <div className=' categoriesWrapper'>
    <div className='row'>
    <div><h2>Tiyatro</h2></div>
    <div className='col-lg-3 col-md-4 cardBanner' >
      <div className='banner'>
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
      </div>
      <h5>  Zengin Mutfağı</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
       <CiCalendarDate size={20}></CiCalendarDate>tarih: <span>22.09.2023</span>
    </div>
    <div className='col-lg-3 col-md-4  cardBanner' >
      <div className='banner'>
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
      </div>
      <h5>  Zengin Mutfağı</h5>
      <p></p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className='col-lg-3 col-md-4  cardBanner' >
      <div className='banner'>
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
      </div>
      <h5>  Zengin Mutfağı</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  
   

    

    </div>
    </div>
   
  )
}

export default CategoriesRow