import React from 'react'
import '../styles/card.scss'
import {CiCalendarDate} from 'react-icons/ci'
//categoris-cardtıkladığın kartın detay sayfasına yönlendireceksin

const CategoriesRow = () => {
  return (
    <div className=' categoriesWrapper'>
     <div className='categoryName'><h2 className='fs-4'>Öne Çıkanlar</h2></div>
     <div className='row'>
     <div className='categoriesCard col-md-4  '>
    <div className=' cardBanner' >
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div ><CiCalendarDate size={17}></CiCalendarDate><span className='small'>Tarihi: 22.09.2023</span></div>
  </div>
    
    </div>
    <div className='categoriesCard  col-md-4  '>
    <div className=' cardBanner' >
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div ><CiCalendarDate size={17}></CiCalendarDate><span className='small'>Tarihi: 22.09.2023</span></div>
  </div>
    
    </div>
    <div className='categoriesCard  col-md-4   '>
    <div className=' cardBanner' >
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div ><CiCalendarDate size={17}></CiCalendarDate><span className='small'>Tarihi: 22.09.2023</span></div>
  </div>
    
    </div>
    <div className='categoriesCard  col-md-4   '>
    <div className=' cardBanner' >
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div ><CiCalendarDate size={17}></CiCalendarDate><span className='small'>Tarihi: 22.09.2023</span></div>
  </div>
    
    </div>
    <div className='categoriesCard  col-md-4  '>
    <div className=' cardBanner' >
        <img src="https://upload.wikimedia.org/wikipedia/tr/9/90/39_Basamak_afi%C5%9F.jpg" alt="" />
    </div>
    <div className='categoryInf'>
     <h5> 39 basamak</h5>
     <div ><CiCalendarDate size={17}></CiCalendarDate><span className='small'>Tarihi: 22.09.2023</span></div>
  </div>
    
    </div>
 
      </div>    
    </div>
   
  )
}

export default CategoriesRow