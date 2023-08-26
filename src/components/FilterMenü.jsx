import React from 'react'
import '../styles/filter.scss'
import {HiOutlineEye,HiLocationMarker} from 'react-icons/hi'
import {BsCalendarDate} from 'react-icons/bs'
import DateFilter from './DateFilter'

const Filter = () => {
  return (
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


       <div> <div className="btn btn-light">Ara</div></div> 




    </form>
  )
}

export default Filter