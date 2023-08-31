
import '../styles/list.scss'
import React, { useEffect } from 'react'
import { useGlobalContext} from '../Context/GlobalState'


const List = () => {
  const {data}=useGlobalContext();


  useEffect(()=>{
 
    data.map((dt)=>console.log(dt))
    
   })


  return (

    <div div className='container'>
   
     <div className=' list-menu '>
       <div className='eventTitle '>Etkinlik</div>
          <div className='eventTitle '>Mekan</div>
          <div className='eventTitle '>Tarih</div>
     </div>
<div className='container my-4 '>
{
  data.map((dt)=>(
    <div className="listWrapper   ">
    <div className='eventInf '>
         <img src={dt.img.banner} alt=""  className='eventBanner' /> 
         <div>
        <h5>{dt.title}</h5>
       <span className='small'>Satışta</span>
        </div>
      </div>
      
    <div className='eventInf  '>
        <a href=''>{dt.location}</a>
          <span>İstanbul</span>
    </div>
    <div className='eventInf '>{dt.time}</div>
    </div>
  ))
}
</div>

       
    </div>
  )
}

export default List