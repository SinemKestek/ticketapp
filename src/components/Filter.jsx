import React from 'react'
import '../styles/filter.scss'
import {HiOutlineEye,HiLocationMarker} from 'react-icons/hi'
import {BsCalendarDate} from 'react-icons/bs'
import DateFilter from './DateFilter'
import {HiMiniAdjustmentsHorizontal} from 'react-icons/hi2'

const Filter = () => {
  return (

    <>
        <div  className='filterMenu bg-warning p-1'><HiMiniAdjustmentsHorizontal size={26}/></div>
       <form className='filterContainer '>  
    
      <div className='filter  '>
        <div className='title' >
        <HiOutlineEye size={19}></HiOutlineEye>
        <span>Kategori</span>
        </div>
        <div>
       <select class="form-select">
    <option>müzik</option>
    <option>Sahne</option>
     <option>Resim</option>
       </select>
        </div>
      </div>
      <div className='filter  '>
        <div className='title' >
        <BsCalendarDate size={19}></BsCalendarDate>
        <span>Tarih</span>
        </div>
        <div>
       <div class="filter">
         <DateFilter></DateFilter>
       </div>
        </div>
      </div>
      <div className='filter  '>
        <div className='title' >
        <HiLocationMarker size={19}></HiLocationMarker>
        <span>Yer</span>
        </div>
        <div>
       <select class="form-select">
    <option>müzik</option>
    <option>Sahne</option>
     <option>Resim</option>
       </select>
        </div>
      </div>


       <div> <div className="btn btn-light filter">Ara</div></div> 

    </form>
    </>
  )
  
 
}

export default Filter